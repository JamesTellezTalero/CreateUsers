# syntax=docker/dockerfile:1
FROM node:16.10.0
WORKDIR /
RUN npm run dev
EXPOSE 3000
COPY . .