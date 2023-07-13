import fs from 'fs';
import mongoose from 'mongoose';
import path from 'path';
import { dirname } from 'path';
import config from '../config'
import { fileURLToPath } from 'url';
import uniqueValidator from 'mongoose-unique-validator';
const dbConfig = config.database.dbURL;
const db = {};
const mongose=mongoose.connect(dbConfig,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  fs.readdirSync(__dirname).filter((file)=>file.indexOf(".")!=0&&file!=="index.js").forEach((file)=>{
    const filePath = path.join(__dirname,file);
    const model = require(filePath);
    db[model.name] = model;
})
db.mongoose = mongose;
db.uniqueValidator = uniqueValidator;
export default db;