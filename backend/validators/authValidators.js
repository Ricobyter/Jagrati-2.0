const {z} = require('zod')

//creating an object schema

const signupSchema = z.object({
    username: z.string({required_error: "Username is required"})
    .trim()
    .min(3, {message: "Username must be atleast 3 characters long"})
    .max(255, {message: "Username must not be more than 255 characters long"})

})