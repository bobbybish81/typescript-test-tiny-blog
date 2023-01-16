import React from 'react';
import '../styles/nav.css';

interface NavProps {
  sections: string[],
  setFilter: (value:string) => void;
}

const Nav = ({ sections, setFilter } : NavProps) => {

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