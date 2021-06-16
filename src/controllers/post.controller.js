const { Category, Post } = require('../database');

const getAll = async (req, res) => {
  try {
    const posts = await Post.findAll({
      order: [['createdAt', 'desc']],
      attributes: ['id', 'title', 'image', 'createdAt'],
      include: [{ model: Category, attributes: ['name'] }],
    });
    return res.status(200).json(posts);
  } catch (error) {
    console.error(error);
  }
};

const getOne = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await Post.findOne({
      where: { id },
      include: [{ model: Category, attributes: ['name'] }],
    });
    if (!post) return res.status(404).json({ error: 'post not found' });
    return res.status(200).json(post);
  } catch (error) {
    console.error(error);
  }
};

const addOne = async (req, res) => {
  try {
    const post = await Post.create({ ...req.body });
    const newPost = await Post.findOne({
      where: { id: post.id },
    });
    return res.status(201).json(newPost);
  } catch (error) {
    console.error(error);
  }
};

const updateOne = async (req, res) => {
  const { id } = req.params;
  try {
    const postToUpdate = await Post.findOne({ where: { id } });
    if (!postToUpdate) return res.status(404).json({ error: 'post not found' });
    await postToUpdate.update(req.body);
    return res.status(200).json(postToUpdate);
  } catch (error) {
    console.error(error);
  }
};

const deleteOne = async (req, res) => {
  const { id } = req.params;
  try {
    const postToDelete = await Post.findOne({ where: { id } });
    if (!postToDelete) return res.status(404).json({ error: 'post not found' });
    await postToDelete.destroy();
    return res.status(204).end();
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  addOne,
  deleteOne,
  getAll,
  getOne,
  updateOne,
};
