const validate = (schema) => async(req,res, next) => {
    try{
        const parseBody = await schema.parseAsync(req.body)
        req.body = parseBody
        next()
    }catch(err){
        res.staus(400).json({msg: err})
    }

}

module.exports = validate