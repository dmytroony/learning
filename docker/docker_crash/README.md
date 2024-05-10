# 1. Demo project for a "[Docker crash course" on YouTube](https://www.youtube.com/watch?v=pg19Z8LL06w)

## Structure of Dockerfile
- Dockerfiles start from a parent image or "base image"
- It's a Docker image that your image is based on
- You choose the base image, depending on which tools you need to have available

### FROM
- Build this image from the specified image

### COPY
- Copies files or directories from <src> and adds them to the filesystem of the container at the path <dest>

### WORKDIR
- Sets the working directory for all following commands

### RUN
- Will execute any command in a shell inside the container environment

### CMD
- The instruction that is to be executed when a Docker container starts
- There can only be one "CMD" instruction in a Dockerfile

## Build

```docker build -t node19-server:1.0 .```
```docker scout quickview```

## Notes:
- Each instruction in Dockerfile creates one layer
- These layers are stacked & each oe is a delta of the changes from the previous layer

# 2. [Docker Compose](https://www.youtube.com/watch?v=SXwC9fSwct8)

## Docker Network
```docker network create nameOfNetwork```
```docker network ls```
1) mongo container
```
docker run -d \
-p 27017:27017 \
-e MONGO_INITDB_ROOT_USERNAME=admin \
-e MONGO_INITDB_ROOT_PASSWORD=supersecret \
--network mongo-network \
--name mongodb \
mongo
```
2) mongo-express container
```
docker run -d \
-p 8081:8081 \
-e ME_CONFIG_MONGODB_ADMINUSERNAME=admin \
-e ME_CONFIG_MONGODB_ADMINPASSWORD=supersecret \
-e ME_CONFIG_MONGODB_SERVER=mongodb \
--network mongo-network \
--name mongo-express \
mongo-express
```
3) http://localhost:8081
```docker logs mongo-expressProcessName```
```admin:pass```
