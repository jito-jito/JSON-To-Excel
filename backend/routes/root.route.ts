import express from "express";
import createExcelRouter from "./createExcel.route.js";

const rootRouter = express.Router()

rootRouter.use('/json-to-excel', createExcelRouter)

export default rootRouter