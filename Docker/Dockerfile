FROM node:alpine

RUN apk --no-cache add curl

RUN echo Building Docker image

RUN mkdir -p /usr/src/apps/HelloNode

WORKDIR /usr/src/apps/HelloNode

COPY ./outputs/dist/source .

EXPOSE 3010

CMD ["npm", "run", "start", "docker"]


# docker build -f Docker/Dockerfile -t mufazzal/hellonode:develop-21 -t mufazzal/hellonode:v1.0.0 .
# docker run -it -p 80:3010 mufazzal/hellonode:latest
# docker push mufazzal/hellonode:develop-21