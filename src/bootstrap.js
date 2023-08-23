import bodyParser from "body-parser";
import express from 'express';
import models from './models';
import routes from './routes';
import cors from "cors";
export default class Bootstrap{
    constructor(app){
        this.app=app;
        this.middleware();
        this.connectDB();
        this.routes();
        this.start();
    }
    middleware(){
        const {app}=this;
        app.use(cors());
        app.use(bodyParser.urlencoded({extended:true}));
        app.use(bodyParser.json({limit:'500mb'}));
        app.use('/assets',express.static(`${__dirname}/uploads/images`));
        app.use('/assets',express.static(`${__dirname}/uploads/videos`));
    }
    connectDB(){
        const {mongoose} = models;
        mongoose.then(()=>console.log('database connected....'))
        .catch((error)=>console.log(error));
    }
    routes(){
        routes(this.app);

    }
    start(){
        const {app}=this;
        const port = app.get('port');
        app.listen(port,()=>console.log(`Server started on ${port} number`));
    }
}