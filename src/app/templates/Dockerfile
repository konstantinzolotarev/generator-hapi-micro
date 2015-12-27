FROM node:4.2.2

MAINTAINER Konstantin Zolotarev

ENV NODE_APP_PATH /var/www/service
ENV NODE_ENV development

RUN mkdir -p $NODE_APP_PATH

COPY ./package.json ${NODE_APP_PATH}/

RUN cd $NODE_APP_PATH && npm install

COPY . ${NODE_APP_PATH}
WORKDIR ${NODE_APP_PATH}

VOLUME ${NODE_APP_PATH}/logs

CMD ["node", "app.js"]

EXPOSE 3000
