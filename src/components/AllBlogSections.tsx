import { useState } from 'react';
import { BsChevronUp } from 'react-icons/bs';
import { IPosts } from '../interfaces/IBlogs';
import Post from './Post';
import '../styles/BlogSection.css';

interface SectionProps {
  loading: boolean,
  posts: IPosts[],
  errorMessage: string,
  section: string,
  index: number,
}

const AllBlogSections = ({ loading, posts, errorMessage, section, index } : SectionProps) => {

  const [displayBlog, setDisplayBlog] = useState<boolean>(true)

  return (
    <section key={index} className='blog'>
      {errorMessage && (<p>{errorMessage}</p>)}
      {loading && <h1>Loading... </h1>}
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
        {posts.map((post, index) => {
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

export default AllBlogSections