import path from "path"; //ファイル パスを操作できる Node.js モジュールです。
// import matter from "gray-matter"; //各マークダウン ファイル内のメタデータを解析できるライブラリです。
// import { remark } from "remark";
// import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "posts");

export async function getSortedPostsData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  return posts.map((post) => {
    return {
      id: post.id,
      title: post.title,
      body: post.body,
    };
  });
}

export async function getAllPostIds() {
  // Instead of the file system,
  // fetch post data from an external API endpoint
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  return posts.map((post) => {
    return {
      params: {
        slug: String(post.id),
      },
    };
  });
}

export async function getPostData(id) {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  const post = posts[id - 1];
  return {
    id: String(post.id),
    title: post.title,
    body: post.body,
  };
}
