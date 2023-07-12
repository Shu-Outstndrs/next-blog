import fs from 'fs'; //ファイルの中身を見たりディレクトリ構造を見たりできます
import path from 'path'; //ファイル パスを操作できる Node.js モジュールです。
import matter from 'gray-matter'; //各マークダウン ファイル内のメタデータを解析できるライブラリです。

const postsDirectory = path.join(process.cwd(), 'posts');

export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory); //fs.readdirSync() でフォルダーの中身を配列にする
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName); //next-blog/posts/ssg-ssrなどができる
    const fileContents = fs.readFileSync(fullPath, 'utf8'); //ファイルの中身を取得

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    };
  });
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}