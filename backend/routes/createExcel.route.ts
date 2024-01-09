import express, { Request, Response } from "express";
import xl from 'excel4node';
import { logger } from "../logger.js";
import { createExcel } from "../services/createExcel.service.js";

const createExcelRouter = express.Router()

createExcelRouter.post('', function root(req: Request, resp: Response) {
  const body = req.body
  try {
    const workBook = createExcel(body)
    
    workBook.write('test2.xlsx', resp)
  } catch (error) {
      logger.error(error)
      resp.status(500).send('ups, a ocurrido un error generando el archivo')
  }
})

export default createExcelRouter