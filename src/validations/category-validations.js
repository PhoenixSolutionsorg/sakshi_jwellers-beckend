import Joi from "joi";
const createCategory = Joi.object({
    name : Joi.string().min(3).required().messages({
        'any.require' : 'CATEGORY_IS_REQUIRED',
        'string.empty' : 'CATEGORY_IS_REQUIRED',
        'string.min' : 'CATEGORY_MINIMUM_VALIDATION'
    })
});
 export default {
    createCategory,

}