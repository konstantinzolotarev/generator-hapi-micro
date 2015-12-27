'use strict';

const _ = require('lodash');
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const connection = require('../connection/mongoDefault');

/* jshint maxlen: false */
const UserSchema = new Schema({

  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    validate: {
      validator: function (v) {
        return v.length >= 5 && v.length <= 35 && /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)$/.test(v);
      },
      message: '{VALUE} is not a valid email'
    }
  },

  name: {
    type: String,
    trim: true,
    validate: {
      validator: function (v) {
        return /^[a-zA-Z0-9-_]{3,10}$/.test(v);
      },
      message: '{VALUE} is not a valid playername'
    }
  },
  password: {
    type: String,
    trim: true
  }
}, {
  timestamps: true,

  versionKey: false,

  toObject: {
    virtuals: true
  },

  toJSON: {
    virtuals: true
  }
});

UserSchema.statics = {

  /**
   * Load User by email or name
   * @param  {string} nameOrEmail
   * @return {Promise}
   */
  getByNameOrEmail: function (nameOrEmail) {
    return this
      .find({
        $or : [
          { email: nameOrEmail },
          { name: nameOrEmail }
        ]
      })
      .exec();
  }
};

/* hides/deletes password when returned to client */
UserSchema.methods.toJSON = function () {
  const user = this.toObject();
  delete user.password;
  return user;
};

UserSchema.methods.comparePasswords = function (password, callback) {
  bcrypt.compare(password, this.password, callback);
};

/* pre -save hook for hooking up the encryption */
UserSchema.pre('save', function (next) {
  /* check if there is a modification to the password before hashing */
  if (!user.isModified('password')) {
    return next();
  }

  /* generate a salt to use in the hash function */
  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      return next(err);
    }
    /* do the actual hashing */
    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) {
        return next(err);
      }
      this.password = hash;
      next();
    });

  });
});

module.exports = connection.model('User', UserSchema);
