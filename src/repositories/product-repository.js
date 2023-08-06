import product from '../models/product'; 
import logger from '../services/logger';
export default {
    async checkekProduct(request){
        try{
            const {name,id} = request?.body;
            const isProduct = await product?.findOne({id,name});
            return isProduct;
        }catch(error){
            console.log(error);
            logger(error);
            throw error;
        }
    },
    async createProduct(request){
        try{
            const {name,description,metalId,quantity,images,video} = request?.body;
            const result = await product?.create({name,description,metalId,quantity,video,images});
            return result;
        }catch(error){
            console.log(error);
            logger.error(error);
            throw error;
        }
    },
    async viewProduct(request){
        try{
            const {viewProductCount,name} = request?.body;
            const result = await product.findOneAndUpdate({name},{viewProductCount:viewProductCount*1+1});
            console.log(result);
            return result;
        }catch(error){
            console.log(error);
            logger.error(error);
            throw error;
        }
    },
    async getAllProducts(request){
        try{
            const {limit,offset,search,name} = request?.body;
            const allProducts = await product.aggregate([
                {$skip : offset},
                {$limit:limit},
                {$sort:{name : name && -1}},
                {$match : {name : name}},    
            ]);
            console.log(allProducts);
            return allProducts;
        }catch(error){
            console.log(error);
            logger.error(error);
            throw error;
        }
    },
    async updateProduct(request){
        try{
            const productData = await this.checkekProduct(request);
            const name = request.body?.name || productData?.name;
            const description = request.body?.description || productData?.description;
            const quantity = request.body?.quantity || productData?.quantity;
            const metalId = request.body?.metalId || productData?.metalId;
            const updatedProduct = await product?.findOneAndUpdate({_id : request.body?.id},{name,description,quantity,metalId});
            console.log(updatedProduct);
            if(updatedProduct?.effectedRow)
                return updatedProduct;
            return false;
        }catch(error){
            console.log(error);
            logger.error(error);
            throw error;
        }
    }
}  