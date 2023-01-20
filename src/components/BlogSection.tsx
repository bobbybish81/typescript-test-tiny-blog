import { IPosts } from '../interfaces/IBlogs';
import Post from './Post';
import '../styles/BlogSection.css';

interface SectionProps {
  loading: boolean,
  posts: IPosts[],
  errorMessage: string,
  filter: string,
}

const BlogSection = ({ loading, posts, errorMessage, filter } : SectionProps) => {

  return (
    <section key={filter} className='blogs'>
      {errorMessage && (<p>{errorMessage}</p>)}
      {loading && <h1>Loading... </h1>}
      <header className='blog-header'>
        <h2>{filter.toUpperCase()}</h2>
      </header>
      <article className='blog-posts'>
        {posts.map((post, index) => {
          if (post.tags.includes(filter.toLowerCase())) {
            return (
              <Post
              index={index}
              post={post}/>
            )
          } else return null;
        })}
      </article>
    </section>
  )
}

export default BlogSection