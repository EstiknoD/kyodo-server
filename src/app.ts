import * as express from 'express';
import {Application} from 'express';
import * as morgan from 'morgan';

export class App{

    private app: Application;

    constructor(private port?: number){
        this.app = express();
    }

    middlewars(){
        this.app.use(morgan('dev'));
        this.app.use(express.json())
        this.app.use(express.urlencoded({extended: false}));
    }

    settings(){
        if(this.port == null){
            this.app.set('port', 3000);
        }
        else{
            this.app.set('port', this.port);
        }
    }

    listen(){
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port ', this.app.get('port'));
        });
    }
}