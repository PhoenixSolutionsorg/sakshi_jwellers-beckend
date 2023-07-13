import Joi from "joi";
const userProfileSchema = Joi.object({
    first_name : Joi.string().min(3).max(30).messages({
        'any.require' : 'NAME_IS_REQUIRED',
        'string.empty' : 'NAME_IS_REQUIRED',
        'string.min' : 'NAME_MINIMUM_VALIDATION',
        'string.max' : 'NAME_MAXIMUM_VALIDATION'
    }).required(),
    last_name : Joi.string().min(3).max(30).messages({
        'any.require' : 'NAME_IS_REQUIRED',
        'string.empty' : 'NAME_IS_REQUIRED',
        'string.min' : 'NAME_MINIMUM_VALIDATION',
        'string.max' : 'NAME_MAXIMUM_VALIDATION'
    }).required(),
    email : Joi.string().email({
        minDomainSegments : 2,tlds:{allow:false}
    }).min(6).max(50).messages({
        'string.empty' : 'EMAIL_REQUIRED',
        'any.required' : 'EMAIL_REQUIRED',
        'string.email':'VALID_EMAIL_ALLOWED',
        'string.min':'EMAIL_MINIMUM_VALIDATION',
        'string.max' : 'EMAIL_MAXIMUM_VALIDATION'
    }).required(),
    password : Joi.string().messages({
        'string.any' : 'PASSWORD_REQUIRED',
        'string.require' : 'PASSWORD_REQUIRED'
    }).required(),
    contact : Joi.string().regex(/^[0-9]{10,15}$/).messages({
        'string.pattern.base' : 'ONLY_NUMERIC_ALLOWED',
        'string.length' : 'CONTACT_MAXIMUM_VALIDATION'
    }).required(),
    address : Joi.string().optional(),
    date_of_birth : Joi.date().required().messages({
        'date.formate' : 'DATE_OF_BIRTH_FORMATE',
        'any.require' : 'DATE_OF_BIRTH_REQUIRED'
    }),
    date_of_anniversry : Joi.date().required().messages({
        'date.formate' : 'DATE_OF_BIRTH_FORMATE',
        'any.require' : 'DATE_OF_BIRTH_REQUIRED'
    })
});
export default{
    userProfileSchema
}