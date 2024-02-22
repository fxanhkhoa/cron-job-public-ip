###################
# PRODUCTION
###################

FROM node:20-alpine As production

RUN npm install

CMD [ "node", "index.js" ]