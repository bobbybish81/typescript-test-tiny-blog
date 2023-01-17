import { useEffect, useState } from 'react';
import Nav from './components/Nav';
import BlogPosts from './components/BlogPosts';
import Footer from './components/Footer';
import Blog from './interfaces/blog';
import './styles/app.css';

const App = () => {

  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [filter, setFilter] = useState<string>('ALL');

  const sections = ['american', 'crime', 'fiction', 'french', 'history'];

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://dummyjson.com/posts');
      const data = await response.json();
      setBlogs([data]);
    };
    fetchData();
  },[])

  return (
    <>
      <header className='header'>
        <h1>Welcome to Tiny Blog</h1>
      </header>
      <Nav
        sections={sections}
        setFilter={setFilter}/>
      <main className='main'>
        <BlogPosts
          blogs={blogs}
          sections={sections}
          filter={filter}/>
      </main>
      <Footer/>
    </>

  );
}

export default App;
