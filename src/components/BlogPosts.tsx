import React from 'react';
import Blog from '../interfaces/blog';
import Post from './Post';
import '../styles/blogposts.css';

interface SectionProps {
  blogs: Blog[],
  categoryList: (blogs:Blog[]) => string[],
  filter: string;
}

const BlogPosts = ({ blogs, categoryList, filter } : SectionProps) => {

  const sections = categoryList(blogs)

  return (
    <>
    {filter === 'ALL' ? 
      <>
        {sections.map((section:string, index:number) => 
          <section key={index} className='blog'>
            <h2>{section.toUpperCase()}</h2>
            <article className='blog-posts'>
              {blogs[0].posts.map((post, index) => {
                if (post.tags[0] === section) {
                  return (
                    <Post
                    index={index}
                    post={post}/>
                  )
                } else return null;
              })}
            </article>
          </section>
        )}
      </> : 
        <section key={filter} className='blogs'>
          <h2>{filter.toUpperCase()}</h2>
          <article className='blog-posts'>
            {blogs[0].posts.map((post, index) => {
              if (post.tags[0] === filter.toLowerCase()) {
                return (
                  <Post
                  index={index}
                  post={post}/>
                )
              } else return null;
            })}
          </article>
        </section>}
    </>
  )
}

export default BlogPosts