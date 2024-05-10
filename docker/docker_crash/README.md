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

## Docker Network without Compose
```docker network create nameOfNetwork```
```docker network ls```
```docker network rm mongo-network``` - removing our network
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
3) http://localhost:8081 -> ```admin:pass```
```docker logs mongo-expressProcessName```

## Docker Compose
- compose.yaml is a YAML file
  ```
  version: '3.1' - version of docker-compose
  services: - list of all containers you want to run
    mongodb: - container name(name as you want)
      image: mongo:5.6
      ports:
        - 27017:27017 - host:container
      environment:
        - MONGO_INITDB_ROOT_USERNAME=admin
        - MONGO_INITDB_ROOT_PASSWORD=supersecret

    mongo-express: - container name(name as you want)
      image: mongo-express
      ports:
        - 8081:8081 - host:container
      environment:
        - ME_CONFIG_MONGODB_ADMINUSERNAME=admin
        - ME_CONFIG_MONGODB_ADMINPASSWORD=supersecret
        - ME_CONFIG_MONGODB_SERVER: mongodb
      depends_on: - our dependencies which should be ran before this container
      - "mongodb"

  ```
Configuration
- Be careful with the indentations
- Use a single YAML file to configure and maintain your application's services
- With a single command, create and start all the services from your configuration
- Declarative definition
- More structured
- Abstracts away the low-level commands
- Provides a higher-level, more human-readable configuration format
- Code that defines how your services should run
- Code can be versioned
- By default, Compose sets up a single network for an app
- Communication via container name
- But option to specify your own networks with the top-level "networks" key

```
docker-compose -f mongo-services.yaml up
```
// mongo-services.yaml - path to the compose.yaml file
```
docker-compose -f mongo-services.yaml up -d
```
// detach mode
```
docker-compose -f mongo-services.yaml down
```
// stop and remove all containers and the network. helps clean up the entire state
```
docker-compose -f mongo-services.yaml stop
```
// stops containers
```
docker-compose -f mongo-services.yaml start
```
// starts containers