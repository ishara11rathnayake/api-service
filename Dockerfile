# specify base image
FROM node:alpine

WORKDIR /usr/app

# Download and install a dependancy
COPY ./package.json ./
RUN npm install
COPY ./ ./

EXPOSE 3000

#Default command
CMD ["npm", "start"]