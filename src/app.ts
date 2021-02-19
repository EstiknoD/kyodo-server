import express from 'express';
import {Application} from 'express';
import morgan from 'morgan';

export class App{

    private app: Application;

    constructor(private port?: number){
        this.app = express();
        this.middlewars();
        this.settings();
    }
    
    middlewars(){
        this.app.use(morgan('dev'));
        this.app.use(express.json())
        this.app.use(express.urlencoded({extended: false}));
    }

    settings(){
        this.app.set('port', this.port || 3000);
    }

    async listen(){
        await this.app.listen(this.app.get('port'));
        console.log('Server on port ' + this.app.get('port'));
    }
}