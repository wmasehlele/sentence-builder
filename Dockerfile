FROM node:18.12.1-alpine as builder
COPY . /app
WORKDIR /app
RUN npm config set strict-ssl false
RUN npm install
RUN npm config set strict-ssl true
RUN npm run build

FROM nginx:1.23.2-alpine
EXPOSE 80
COPY --from=builder /app/dist/sentence-builder /usr/share/nginx/html
