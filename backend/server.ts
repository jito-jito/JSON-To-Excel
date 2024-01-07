import dotenv from "dotenv"
const environment = dotenv.config()

if(environment.error) {
  console.log('Error loading environment variables')
  process.exit(1)
}

import express from 'express'
import rootRouter from './routes/root.route.js'
import { isInteger } from './utils.js';
import { logger } from "./logger.js"

const app = express()

function setupExpress() {
  app.use(express.json())
  app.use("/api/v1", rootRouter)
}

function startServer() {
  let port: number

  const portEnv = process.env.PORT
  const portArg = process.argv[2]
  
  if(isInteger(portEnv)) {
    port = parseInt(portEnv)
  }
  
  if(!port && isInteger(portArg)) {
    port = parseInt(portArg)
  } 
  
  if(!port) { 
    port = 9000
  }

  app.listen(port, () => {
    logger.info(`HTTP API running on port: http://localhost:${port}`);
  })
}


setupExpress()
startServer()