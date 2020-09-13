FROM node:10

EXPOSE 80

ADD sample-server.js /sample-server.js

RUN npm install -y node-datetime

WORKDIR /

CMD ["node", "sample-server.js"]
