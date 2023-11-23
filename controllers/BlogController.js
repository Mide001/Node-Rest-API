const BlogService = require("../services/BlogService");

exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await BlogService.getAllBlogs();
    res.json({ data: blogs, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.Message });
  }
};

exports.createBlog = async (req, res) => {
  try {
    const blog = await BlogService.createBlog(req.body);
    res.json({ data: blog, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.Message });
  }
};

exports.getBlogById = async (req, res) => {
  try {
    const blog = await BlogService.getBlogById(req.params.id);
    res.json({ data: blog, status: "success" });
  } catch (err) {
    res.staus(500).json({ error: err.Message });
  }
};

exports.updateBlog = async (req, res) => {
  try {
    const blog = await BlogService.updateBlog(req.params.id, req.body);
    res.json({ data: blog, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.Message });
  }
};

exports.deleteBlog = async (req, res) => {
  try {
    const blog = await BlogService.deleteBlog(req.params.id);
    res.json({ data: blog, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.Message });
  }
};
