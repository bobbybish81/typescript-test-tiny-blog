import Nav from './Nav';
import '../styles/Header.css';

interface NavProps {
  sections: string[],
  setFilter: (value:string) => void,
}

const Header = ({ sections, setFilter } : NavProps) => {
  return (
    <header className='header'>
      <div>
        <h1>Welcome to Tiny Blog</h1>
      </div>
      <Nav
        sections={sections}
        setFilter={setFilter}/>
    </header>
  )
}

export default Header