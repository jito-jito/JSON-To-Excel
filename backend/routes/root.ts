import { Request, Response } from "express";

export function root(req: Request, resp: Response) {

  resp.status(200).send('hello world')

}