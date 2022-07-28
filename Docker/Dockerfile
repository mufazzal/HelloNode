FROM node:alpine

RUN apk --no-cache add curl

RUN echo Building Docker image

RUN mkdir -p /usr/src/apps/HelloNode

WORKDIR /usr/src/apps/HelloNode

COPY ./outputs/dist/source .

EXPOSE 3010

CMD ["npm", "run", "start", "docker"]

# docker build -f Docker/Dockerfile -t mufazzal/hellonode:local .
# docker run -it -p 80:3010 -e logDir=/var/log/hnlog/log.json mufazzal/hellonode:local
# docker push mufazzal/hellonode:local