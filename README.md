# JSON-To-Excel
An application to create an Excel file using JSON data

## Install/Configuration/Environment - Backend

### Technologies used:

This project uses NodeJs on version 20.10.0 and npm on version 10.2.3

### Dependencies:
| Name           | Version     |
|-----------------------|-------------|
| dotenv                | ^16.3.1     |
| excel4node            | ^1.8.2      |
| express               | ^4.18.2     |
| winston               | ^3.11.0     |

### DevDependencies:
| Name           | Version     |
|-----------------------|-------------|
| @types/express        | ^4.17.21    |
| npm-run-all           | ^4.1.5      |
| rimraf                | ^5.0.5      |
| tsc-watch             | ^6.0.4      |
| typescript            | ^5.3.3      |



to install dependencies use: 

> npm install


### Configuration

Use the.env.example to create a .env file with each environment variable

### Usage

The following commands are enabled to run the project:

    "clean": "rimraf dist", // to clean dist directory
    "build": "tsc", // build typescript app
    "start": "node dist/server.js", // run server
    "dev": "npm-run-all clean build start", // to clean, build and run the server with one command
    "dev-server": "tsc-watch --onSuccess \"node dist/server.js 9001\"" // to run server on watch mode



## Project status

This project is currently in **development**.


