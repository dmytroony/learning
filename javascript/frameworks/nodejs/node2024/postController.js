const posts = [
  { id: 1, title: 'Post One', },
  { id: 2, title: 'Post Two', },
];

// export const getPosts = () => posts;
const getPosts = () => posts;

export const getPostsLength = () => `Amount of posts: ${posts.length}`;

// export { getPosts };
export default getPosts;