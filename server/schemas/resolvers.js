const { User, Comment } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');
const { comment } = require('../models/Reply');

const resolvers = {
  Query: {
    me: async(parent, args, context) => {
      if(context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select('-__v -password')
          .populate('comments');

        return userData;
      }
    },

    users: async() => {
      return User.find()
        .populate('comments');
    },

    user: async(parent, { username }) => {
      return User.findOne({ username })
        .select('-__v -password')
        .populate('comments');
    },

    comments: async(parent, { username }) => {
      const params = username ? { username } : {};
      return Comment.find(params).sort({ createdAt: -1 });
    },

    comment: async(parent, { _id }) => {
      return Comment.findOne({ _id }).sort({ createdAt: -1 });
    }
  },

  Mutation: {
    addUser: async(parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },

    login: async(parent, { email, password }) => {
      const user = await User.findOne({ email });

      if(!user) {
        throw new AuthenticationError('Incorrect credentials!');
      }

      const correctPw = await user.isCorrectPassword(password);

      if(!correctPw) {
        throw new AuthenticationError('Incorrect credentials!');
      }

      const token = signToken(user);

      return { token, user };
    },

    addComment: async(parent, args, context) => {
      if(context.user) {
        const post = await Post.create({ ...args, username: context.user.username });

        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { comments: comment._id } },
          { new: true }
        );

        return post;
      }

      throw new AuthenticationError('You need to be logged in!');
    },

    addReply: async(parent, { commentId, replyText }, context) => {
      if(context.user) {
        const updatedComment = await Comment.findOneAndUpdate(
          { _id: commentId },
          { $push: { replies: { replyText, username: context.user.username } } },
          { new: true, runValidators: true }
        );

        return updatedComment;
      }

      throw new AuthenticationError('You need to be logged in!');
    },

    deleteComment: async(parent, { _id }, context) => {
      if(context.user) {
        const deletedComment = await Comment.findOneAndRemove(
          { _id },
          { new: true }
        );

        return deletedComment;
      }
    },

    deleteReply: async(parent, { commentId, replyId }, context) => {
      if(context.user) {
        const deletedReply = await Comment.findOneAndUpdate(
          { _id: commentId },
          { $pull: { replies: { _id: replyId } } },
          { new: true }
        );
      }

      return deletedReply;
    }
  }
};

module.exports = resolvers;
