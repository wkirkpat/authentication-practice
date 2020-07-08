import { Query } from "../index";

const getBlogs = async () => Query("SELECT * FROM blogs");

const getSingleBlog = async (id: number) => Query("SELECT * FROM blogs WHERE id = ?", [id]);

const postBlog = async (title:string, content: string) => Query("INSERT INTO blogs(title, content) VALUES (?, ?)", [title, content]);

const editBlog = async (id: number, title: string, content: string) => Query("UPDATE blogs SET title = ?, content = ? WHERE id = ?", [title, content, id]);

const deleteBlog = async (id:number) => Query("DELETE FROM blogs WHERE id = ?", [id]);

export default {
    getBlogs,
    getSingleBlog,
    postBlog,
    editBlog,
    deleteBlog
}