import {Query} from "../index";

const findOne = async (id: string, token: string) => Query("SELECT * FORM tokens WHERE id = ? AND token = ?", [id, token]);

const insert = async (userid: number) => Query("INSERT INTO tokens(userid) VALUES (?)", [userid]);

const update = async (id: string, token: string) => Query("UPDATE tokens SET token = ? WHERE id = ?", [token, id]);

export default {
    findOne,
    insert,
    update
}