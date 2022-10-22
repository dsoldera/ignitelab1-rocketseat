# IGNITE LAB BY ROCKETSEAT

## DEVELOPING A BACK-END AND FRONT-END PROJECT USING

- React
- Auth0
- NestJS
- GraphQL
- Apache Kafka
- Next.js
- Apollo Client (GraphQL)

## Inicial Project
https://github.com/rocketseat-education/ignite-lab-01-aulas


## Start the projects
run in each of the folder
`npm i`

- Web Folder
`npm run dev`

- purchases or classroom folder
`npm run start:dev`

### Initial installation

- To install the NextJs or follow the link:
`npm i -g @nestjs/cli`

- https://docs.nestjs.com/

### Databse on Docker 
To be able to use a Backend we need a Databse. So there is one already created inside the docker.compose file at the project root.

- To create and run the database get inside the project folder and run
`docker-compose up -d`

The database will run on localhost:5432
## PRISMA
For the Backend for each of microservices, run

- Install the Prisma Globally
`npm i prisma -D`

- to create the tables from the squema.prisma
`npx prisma migrate dev`

- to open studio to create data
`npx prisma studio`

## GRAPHQL
- After installed and the server next is running on localhost:3333, to open the browser interface go to:
`http://localhost:3333/graphql`

#### Auth0

- https://auth0.com/docs
- https://manage.auth0.com/dashboard/us/ignite-lab-dani2022/

### Documentation

```
nest generate module database
nest generate module http
nest generate guard authorization --no-spec
nest generate service prisma
```

- to install auth0 module to authenticate was used:
`yarn add @auth0/nextjs-auth0`

- to create the hex for the auth0 on windows
`openssl rand -hex 32`

- to install graphql inside the project was used:
`npm i @nestjs/graphql @nestjs/apollo graphql apollo-server-express`