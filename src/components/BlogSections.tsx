import { useState } from 'react';
import { BsChevronUp } from 'react-icons/bs';
import Blog from '../interfaces/blog';
import Post from './Post';
import '../styles/BlogSection.css';

interface SectionProps {
  blogs: Blog[],
  section: string,
  index: number,
}

const BlogSections = ({ blogs, section, index } : SectionProps) => {

  const [displayBlog, setDisplayBlog] = useState<boolean>(true)

  return (
    <section key={index} className='blog'>
      <header className='blog-header'>
        <h2>{section.toUpperCase()}</h2>
        <BsChevronUp
          className='arrow-icon'
          onClick={(() => displayBlog ? setDisplayBlog(false) : setDisplayBlog(true))}
          style={{transform: displayBlog ? 'rotate(0)' : 'rotate(180deg)'}}/>
      </header>
      <article
        className='blog-posts'
        style={{height: displayBlog ? 'fit-content' : '0rem'}}>
        {blogs[0]?.posts.map((post, index) => {
          if (post.tags.includes(section)) {
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

export default BlogSections