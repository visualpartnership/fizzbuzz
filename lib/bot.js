require("dotenv").config();

if(!process.env.TOKEN) {
    throw new Error("No token found");
}