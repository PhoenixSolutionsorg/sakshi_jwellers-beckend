import fs from 'fs';
import path from 'path';
import media from '../models/media';
export default{
    async createFile({params,file,headers,connection}){
        try{
            let result = '';
            const mediaType = params.mediaType;
            const mediaFor = params.mediaFor;
            const imgDir = path.join(__dirname,`../../${file.path}`);
            const HTTPs = connection.encrypted===undefined?'http':'httpStatus';
            const mediaData = {
                name : file.filename,
                basePath : file.path,
                // baseUrl : `${HTTPs}://${headers.host}/${file.path}`,
                mediaType,
                mediaFor
            }
            result = await media.create(mediaData);
            return result;
        }catch(error){
            console.log(error);
            throw Error(error);
        }
    },   
}