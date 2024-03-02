FROM node
EXPOSE 3000
WORKDIR /wkdir
RUN npm i fastify
COPY app.js ./
CMD ["node", "app.js"] 