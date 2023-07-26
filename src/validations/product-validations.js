import Joi from "joi";
const createProductSchema = Joi.object({
    name : Joi.string().min(3).max(30).messages({
        'any.require' : 'PRODUCT_NAME_IS_REQUIRED',
        'string.empty' : 'PRODUCT_NAME_IS_REQUIRED',
        'string.min' : 'PRODUCT_NAME_MINIMUM_VALIDATION',
        'string.max' : 'PRODUCTNAME_MAXIMUM_VALIDATION'
    }).required(),
    description : Joi.string().min(3).max(500).messages({
        'any.require' : 'DESCRIPTION_IS_REQUIRED',
        'string.empty' : 'DESCRIPTION_IS_REQUIRED',
        'string.min' : 'DESCRIPTION_MINIMUM_VALIDATION',
        'string.max' : 'DESCRIPTION_MAXIMUM_VALIDATION'
    }).required(),
    metalId : Joi.string().max(50).messages({
        'string.empty' : 'METALID_REQUIRED',
        'any.required' : 'METALID_REQUIRED',
        'string.max' : 'METALiD_MAXIMUM_VALIDATION'
    }).required(),
    quantity : Joi.number().messages({
        'number.any' : 'QUANTITY_REQUIRED',
        'number.require' : 'QUANTITY_REQUIRED'
    }).required(),
    images : Joi.array().optional(),
    video : Joi.array().optional(),
    viewProductCount : Joi.number().messages().optional(),
});
export default{
    createProductSchema,
    
}