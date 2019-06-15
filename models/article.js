const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  title: String,
  datePosted: Date,
  content: String,
  authors: [String],
  hero: String
});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;