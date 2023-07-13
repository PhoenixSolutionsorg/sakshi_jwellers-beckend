import fs from 'fs';
import path from 'path';
import models from '../models';
import config from '../config';
const {media} = models;
export default{
    async createFile({params,file,headers,connection}){
        try{
            let result = '';
            const mediaType = params.mediaType;
            const imgDir = path.join(__dirname,`../../${file.path}`);
            const HTTPs = connection.encrypted===undefined?'http':'httpStatus';
            const mediaData = {
                name : file.filename,
                basePath : file.path,
                baseUrl : `${HTTPs}://${headers.host}/${file.path}`,
                mediaType,
                mediaFor
            }
            result = await mediaData.create(mediaData);
            return result;
        }catch(error){
            throw Error(error);
        }
    }
}