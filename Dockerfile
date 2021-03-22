FROM node:carbon

LABEL AUTHOR="Diana Watson <diana.watson@andela.com>"
LABEL app="wire-backend"

WORKDIR /app

COPY src/package.json /app/package.json
COPY src/yarn.lock /app/yarn.lock
COPY src/.sequelizerc /app/.sequelizerc

RUN yarn install

COPY src /app

COPY scripts/migration.sh scripts/migration.sh
RUN chmod +x scripts/migration.sh

RUN chmod +x bin/www

CMD [ "bin/www" ]
