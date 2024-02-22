###################
# PRODUCTION
###################

FROM node:20-alpine As production

RUN npm ci

CMD [ "node", "index.js" ]