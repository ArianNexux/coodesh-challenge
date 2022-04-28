FROM node:16.14-alpine AS develpmentImage
WORKDIR /app
COPY src ./
COPY package.json ./
COPY tsconfig.json ./
COPY .env ./
RUN npm install --production
RUN npm install -g typescript
RUN npx tsc -p .


FROM node:16.14-alpine AS productionImage
COPY --from=develpmentImage /app .
RUN npm install pm2 -g
EXPOSE 3000
ENTRYPOINT [ "node", "/build/main/server.js" ]
#ENTRYPOINT [ "tail", "-f", "/dev/null" ]