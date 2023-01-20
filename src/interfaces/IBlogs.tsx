export interface IPosts {
  id: number,
  title: string,
  body: string,
  userId: number,
  tags: string[],
  reactions: number,
};

export interface IBlogs{
  loading: boolean,
  posts: IPosts[],
  errorMessage: string,
}