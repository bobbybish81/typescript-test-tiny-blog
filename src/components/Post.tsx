import React from 'react';
import Posts from '../interfaces/posts';
import '../styles/post.css';

interface ArticleProps {
  post: Posts,
  index: number,
}

const Post = ({post, index}: ArticleProps) => {
  return (
    <article className='post' key={index}>
      <h2>{`${post.title}`}</h2>
      <p className='post-body' >{post.body}</p>
      <h3
        style={{color: post.reactions === 0 ? 'red' : 'green'}}
        className='post-reactions'>
        <b style={{color: '#000'}}>Reactions:</b>
        {` ${post.reactions}`}
      </h3>
      <div className='tags'>
        <h3>Tags:</h3>
        {post.tags.map((tag:string, index:number) => {
          return (
            <p className='tag-name'key={index}>{tag.toUpperCase()}</p>
          )
        })}
      </div>
    </article>
  )
}

export default Post