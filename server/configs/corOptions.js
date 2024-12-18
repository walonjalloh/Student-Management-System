import { allowedOrigins } from "./allowedOrigins.js";

const corsOptions = {
    origin:(origin,callback) => {
        console.log(`Origin ${origin}`)
        if(allowedOrigins.includes(!origin) || !origin){
            callback(null, true)
        }else{
            callback(new Error('Not Allowed by CORS'))
        }
    },
    method: ['POST','GET','UPDATE','DELETE','PATCH'],
    allowedHeader: [
        'Content-Type',
        'Set-Cookie',
        'Authorization',
        'Allow-Control-Allow-Origin',
        'Allow-Control-Allow-Credentials'
    ],
    credential:true
}

export default corsOptions