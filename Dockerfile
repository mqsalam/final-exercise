FROM node:latest

EXPOSE 80
WORKDIR /usr/src/final-exercise
ADD . /usr/src/final-exercise

RUN apt-get update -y
RUN apt-get install -y nodejs npm

RUN cd /src/final-exercise; npm install
RUN npm install --production
RUN npm install -g forever
RUN git pull

CMD ["node", "/usr/src/final-exercise/app.js"]
