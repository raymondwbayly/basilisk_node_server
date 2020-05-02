# Beowulf_Node_Server
This is a Node JS Express server build on Micro services archit[![N|Solid](https://github.com/raymondwbayly/beowulf-assets/blob/master/img/src/Beowulf-server-banner.fw.png?raw=true)](#)

# Beowulf

## NODE JS Express Server for Local Development

Beowulf is a NODEJS development server built using Microservices architecture to allow delivery of data locally to test and develop flutter/dart application systems.


## Download the repository and install, once you have it installed download postman and set it up based on instructions below

---

## Install and run Beowulf Server

- Type some Markdown on the left
- See HTML in the right
- Open terminal and enter project director
- ```cd /{path to project}```
- ```npm install```
- ```DEBUG=myapp:* npm start``` for mac
- ```set DEBUG=myapp:* & npm start``` for windows.
- Open a browser window and point it at ```http://localhost:3000/``` to view the server homepage

---

## POSTMAN (https://www.postman.com/)

- Once you have the server installed and running download postman
- Import the schema from within the ```docs``` folder under the project.
- This will give you all the server calls and parameters allowing you to test

---

## Beowulf Series

- A sutie of appliations leveraging the google flutter/dart technologies
- A self contained series of applications to provide testing and process

---

## Tech

Beowulf uses a number of technologies within the suite:

- [Flutter] - A web/mobile framework based off of Google's Dart Language!
- [Hummingbird] - Codename for the web framework for flutter
- [Node] - Application server and package manager.
- [Express] - A framework for building Node.js micro services and server uri calls

---

## Building the Product

Beowulf server will run locally within your box and can be tested using Postman

There will be a documented option to release on AWS Lambda as a production platform

---

## Start Node Express Server

Once the server is installed, open a terminal window and to go the folder where it is housed, Use one of the following commands to run the server locally. NOTE: you will need to keep the terminal open to run the server.

### Run Server with debug

```sh npm test```

### Run Server

```sh npm start```

---

## Documentation

- All information on the project is in the ```/docs``` folder of the project
- A postman export of the collection is listed in here.
- Import the collection to postman and start the server to test.
- The ticket information list is in the spreadsheet marked tickets
- The use case used as a road map is also listed in docs.

---

## URI Calls

- All URI calls can be tested and modeled from the POSTMAN file in docs, simply import it into a new collection.

| URI                           | CALL   | RETURN    |  NOTES                        |
| ------                        | ------ | ------    | ------                        |
|```/```                        |  GET   | HTML PAGE | Server Information Page       |

---

## Mock Data

This is the mock data section, this explains the mock data server setup.

---

## Todos

- Integrate into AWS Lambda
- Build Out the Services

---

## Views

- Default Server View (```/```)
- POSTMAN setup View (```/postman```)

---

## License

MITecture and backed by JSON tables. 
