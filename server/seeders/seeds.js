const { faker } = require('@faker-js/faker');

const db = require('../config/connection');
const { User, Comment, Reply } = require('../models');

db.once('open', async () => {
  await User.deleteMany({});
  await Comment.deleteMany({});

  // create user data
  const userData = [];

  for(let i = 0; i < 15; i++) {
    const username = faker.internet.userName();
    const email = faker.internet.email();
    const password = faker.internet.password(10, true);

    userData.push({
      username,
      email,
      password
    });
  }

  const createdUsers = await User.collection.insertMany(userData);

  // create comments
  const createdComments = [];

  for(let i = 0; i < 40; i++) {
    const commentText = faker.lorem.words(Math.round(Math.random() * 20) + 1);
    const img = faker.image.animals();

    const randomUserIndex = Math.floor(Math.random() * userData.length);
    const username = userData[randomUserIndex].username;
    const userId = userData[randomUserIndex]._id;

    const createdComment = await Comment.create({
      commentText,
      img,
      username
    });

    const updatedUser = await User.updateOne(
      { _id: userId },
      { $push: { comments: createdComment._id } }
    );

    createdComments.push(createdComment);
  }

  // create replies
  for(let i = 0; i < 100; i++) {
    const replyText = faker.lorem.words(Math.round(Math.random() * 20) + 1);
    const img = faker.image.animals();

    const randomUserIndex = Math.floor(Math.random() * userData.length);
    const username = userData[randomUserIndex].username;

    const randomCommentIndex = Math.floor(Math.random() * createdComments.length);
    const commentId = createdComments[randomCommentIndex]._id;

    await Comment.updateOne(
      { _id: commentId },
      { $push: { replies: { replyText, img, username } } },
      { runValidators: true }
    )
  };

  console.log('Data seeded!');
  process.exit(0);
})
