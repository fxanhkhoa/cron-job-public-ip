###################
# PRODUCTION
###################

FROM node:20-alpine As production

RUN npm install ci

CMD [ "node", "index.js" ]