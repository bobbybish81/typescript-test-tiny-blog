import tinyBlog from './api';
import { useEffect, useState } from 'react';
import Nav from './components/Nav';
import BlogPosts from './components/BlogPosts';
import Footer from './components/Footer';
import Blog from './interfaces/blog';
import './styles/app.css';

const App = () => {

  const data = [];
  data.push(tinyBlog)

  const [blogs, setBlogs] = useState<Blog[]>(data);
  const [filter, setFilter] = useState<string>('ALL');

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch('https://dummyjson.com/posts');
  //     const data = await response.json();
  //     setBlogs(data);
  //   };
  //   fetchData();
  // },[])


const tagArrays = blogs[0].posts.map(obj => obj.tags).map(tag => tag);
const allTags:string[] = [];
tagArrays.forEach(arr => arr.forEach(tag => allTags.push(tag)))

const sections:string[] = allTags.filter((item, index) => allTags.indexOf(item) === index).sort();

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
