export default interface Posts {
  id: number,
  title: string,
  body: string,
  userId: number,
  tags: string[],
  reactions: number,
};