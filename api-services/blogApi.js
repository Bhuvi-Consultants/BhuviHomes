import axios from "axios";
export async function getBlogsByCategory(category) {
  const res = await axios.get(`/api/v1/blogs?category=${category}`);
  return res.data;
}
export async function getBlogById(id) {
  const res = await axios.get(`/api/v1/blogs/${id}`);
  return res.data;
}
export async function getBlogs() {
  try {
    const res = await axios.get("/api/v1/blogs");
    console.log(res.data)
    return res.data;
  } catch (err) {
    console.error("Error fetching blogs:", err);
  }
}
export async function getBlogBySlug(slug) {
  const res = await axios.get(`/api/v1/blogs?slug=${slug}`);
  return res.data;
}
