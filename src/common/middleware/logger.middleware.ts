import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {

  use(req: Request, res: Response, next: NextFunction){
        if(req.body.username == null || req.body.username ==''  ){
          res.json({message:"username wajib diisi."})
        }else if(req.body.email == null || req.body.email ==''){
          res.json({message:"email wajib diisi."})
        }else if(req.body.password == null || req.body.password =='' ){
          res.json({message:"password wajib diisi."})
        }else{
        next();
          console.log(`Request...`);

        }
    
      }

};