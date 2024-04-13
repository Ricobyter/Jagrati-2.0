const {z} = require('zod')

//creating an object schema

const signupSchema = z.object({
    name: z.string({required_error: "Username is required"})
    .trim()
    .min(3, {message: "Username must be atleast 3 characters long"})
    .max(255, {message: "Username must not be more than 255 characters long"}),

    email: z.string({required_error: "Email is required"})
    .trim()
    .email({message: "Invalid email address"})
    .min(3, {message: "Email must be atleast 3 characters long"})
    .max(255, {message: "Email must not be more than 255 characters long"}),

    year: z.string({required_error: "Year is required"})
    .trim()
    .min(3, {message: "Year must be atleast 3 characters long"})
    .max(255, {message: "Year must not be more than 255 characters long"}),

    password: z.string({required_error: "Password is required"})
    .trim()
    .min(3, {message: "Password must be atleast 3 characters long"})
    .max(255, {message: "Password must not be more than 255 characters long"}),

}
)

module.exports = {signupSchema}