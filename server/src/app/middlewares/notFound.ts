/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from "express";
//import httpStatus from "http-status";
import { StatusCodes } from "http-status-codes";


//not found route
const notFound = ((
    req:Request , 
   res: Response ,
    next:NextFunction)=>{
   
    return res.status(StatusCodes.NOT_FOUND).json({
      success: false,
      message:'Not Found',
      error:' '
     })
  })

  export default notFound