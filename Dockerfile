###################
# PRODUCTION
###################

FROM node:20-alpine As production

COPY . .
RUN npm ci

CMD [ "node", "index.js" ]