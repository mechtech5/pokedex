import { Request, Response } from "express";
// import { MongooseDocument } from 'mongoose';
// import { User } from '../models/user.model';
// import { WELCOME_MESSAGE } from "../constants/pokeApi.constants";

export class AuthService {
  public signup(req: Request, res: Response) {
    console.log(req.body);
  }
  
  public login(req: Request, res: Response) {
    console.log(req.body);
  }

}