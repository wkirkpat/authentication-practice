import {Query} from "../index";

//the first parameter is what you want to find a user by, this value has to have a matching column in the table. 
//the second parameter is what you want to search for, so if you were searching by email, you would put the
//actual email you wanted to find there
const findOneBy = async (type: string, value: string | number) => Query("SELECT * FROM users WHERE ? = ? LIMIT 1", [type, value])

export default {
    findOneBy
}