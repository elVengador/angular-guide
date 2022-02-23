export interface Post {
  title: string,
  author: string,
  date?: string,
  tags: string[],      //<<-- here
  content: string,
}
