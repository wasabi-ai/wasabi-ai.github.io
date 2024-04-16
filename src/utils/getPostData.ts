import readingTime from "reading-time";

export type Post = {
  title: string;
  file: string;
  rawContent: () => string;
};

export function getPostData(post: Post) {
  return {
    slug: post.file.split("/").pop()!.split(".").shift(),
    readingTime: readingTime(post.rawContent()).text,
  };
}
