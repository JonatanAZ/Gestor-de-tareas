import {connect} from "mongoose"

(async()=>{
    try{
        await connect('mongodb://127.0.0.1/crud-mongo');
        console.log('DB is connected')
    }catch(err){
        console.log(err)
    }
})()