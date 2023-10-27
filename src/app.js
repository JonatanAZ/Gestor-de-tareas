import express from 'express';
import { create } from 'express-handlebars';
import indexRoutes from './routes/index.routes';
import path from 'path';
import morgan from 'morgan';

const app=express();

app.set('views', path.join(__dirname,'views'));
const hbs=create({
    extname: '.hbs',
    layoutsDir: path.join(app.get('views'),'layouts'),
    defaultLayout: 'main',
    partialsDir: path.join(app.get('views'),'partials')
});

app.engine('.hbs', hbs.engine);

app.set('view engine','.hbs');

app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

app.use(indexRoutes);

app.use(express.static(path.join(__dirname, "public")));

export default app;