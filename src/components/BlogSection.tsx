import Blog from '../interfaces/blog';
import Post from './Post';
import '../styles/BlogSection.css';

interface SectionProps {
  blogs: Blog[],
  filter: string,
}

const BlogSection = ({ blogs, filter } : SectionProps) => {

  return (
    <section key={filter} className='blogs'>
      <header className='blog-header'>
        <h2>{filter.toUpperCase()}</h2>
      </header>
      <article className='blog-posts'>
        {blogs[0]?.posts.map((post, index) => {
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