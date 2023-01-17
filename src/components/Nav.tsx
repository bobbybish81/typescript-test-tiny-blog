import React from 'react';
import Blog from '../interfaces/blog';
import '../styles/nav.css';

interface NavProps {
  blogs: Blog[],
  categoryList: (blogs:Blog[]) => string[],
  setFilter: (value:string) => void;
}

const Nav = ({ blogs, categoryList, setFilter } : NavProps) => {

  const sections = categoryList(blogs)

  return (
    <nav className='nav'>
      <label htmlFor='nav-select'>Select Category:</label>
      <select name='nav-select' onChange={event => setFilter(event.target.value)}>
        <option value="ALL">ALL</option>
        {sections.map((section:string, index:number) => {
          return (
            <option key={index} value={section.toUpperCase()}>{section.toUpperCase()}</option>
          )}
        )}
      </select>
    </nav>
  )
}

export default Nav