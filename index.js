import express, { response } from 'express';
import dotenv from 'dotenv';
import Connection from './database/db.js'
import router from './routes/route.js'
import cors from 'cors';
import bodyParser from 'body-parser';
import Post from './model/post.js';
import mongoose from 'mongoose';


dotenv.config();

const app=express();

app.use(cors());
app.use(bodyParser.json({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/',router);
 


const PORT =process.env.PORT || 8000;

app.listen(PORT,()=> console.log(`Server is running successfully on hellooo PORT ${PORT}`));

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

Connection(USERNAME,PASSWORD);
 
