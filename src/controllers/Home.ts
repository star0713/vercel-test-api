import { NextFunction, Request, Response } from "express";


const index = (req: Request, res: Response) => {
  res.send({
    message: 'Hello World'
  });
};

const test = (req: Request, res: Response): void => {
  res.send({message: "Hello"})
}

const Home = {
  index,
  test
}
export default Home;