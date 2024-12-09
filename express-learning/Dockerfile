#node express app
FROM node:12

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "server.js"]

# Build 
#docker build -t node-app .

# Run
#docker run -p 3000:3000 node-app