const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    comments: [Comment]
  }

  type Comment {
    _id: ID
    commentText: String
    img: String
    createdAt: String
    username: String
    replies: [Reply]
  }

  type Reply {
    _id: ID
    replyText: String
    img: String
    createdAt: String
    username: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    comments(username: String): [Comment]
    comment(_id: ID!): Comment
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addComment(commentText: String!, img: String): Comment
    addReply(commentId: ID!, replyText: String!): Comment
    deleteComment(_id: ID!): Comment
    deleteReply(commentId: ID!, replyId: ID!): Comment
  }
`;

module.exports = typeDefs;
