import React from 'react';
import { IPosts } from '../interfaces/IBlogs';
import '../styles/Post.css';

interface ArticleProps {
  post: IPosts,
  index: number,
}

const Post = ({post, index}: ArticleProps) => {
  return (
    <article className='post-container' key={index}>
      <div className='post'>
        <h2>{`${post.title}`}</h2>
        <p className='post-body' >{post.body}</p>
        <p
          className='post-reactions'
          style={{color: post.reactions === 0 ? 'red' : 'green'}}>
          <b style={{color: '#000'}}>Reactions:</b>
          {` ${post.reactions}`}
        </p>
      </div>
      <div className='tags'>
        {post.tags.map((tag:string, index:number) => {
          return (
            <p className='tag-name'key={index}>{`#${tag}`}</p>
          )
        })}
      </div>
    </article>
  )
}

export default Post