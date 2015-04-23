FROM node:0.10-onbuild

WORKDIR /usr/src/app

RUN mkdir -p /usr/share/nginx/html/ && npm install && npm run bower -- install --allow-root && npm run gulp build && mv build/* /usr/share/nginx/html/

VOLUME /usr/share/nginx/html
