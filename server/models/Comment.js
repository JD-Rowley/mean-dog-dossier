const { Schema, model } = require('mongoose');
const replySchema = require('./Reply');
const dateFormat = require('../utils/dateFormat');

const commentSchema = new Schema(
  {
    commentText: {
      type: String,
      required: 'You must type a comment!',
      minlength: 1,
      maxlength: 350
    },
    img: {
      type: String,
      required: false
    },
    username: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    },
    replies: [replySchema]
  }
);

commentSchema.virtual('replyCount').get(function() {
  return this.replies.length;
});

const Comment = model('Comment', commentSchema)

module.exports = Comment;
