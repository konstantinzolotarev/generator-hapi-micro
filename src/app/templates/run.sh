#!/bin/bash

if [ -z "$APP" ]; then
    export APP=app.js
fi

cd /app
pm2 start -x $APP --no-daemon -- --prod
