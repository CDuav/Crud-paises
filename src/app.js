const express=require('express');
const morgan=require('morgan');
const mysql=require('mysql');
const myConnection=require('express-myconnection');

const app=express();
const cors=require('cors');


//const paisesRouter=require('./routes/paises.router')

app.set('port',3000);

app.use(cors());
app.use(morgan('dev'));


app.use( myConnection(mysql,{
        host:'localhost',
        user:'root',
        password:'',
        port:3306,
        database:'bd'
},'single'));

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(require('./routes/paises.router'));

module.exports= app;