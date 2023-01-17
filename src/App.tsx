import { useEffect, useState } from 'react';
import Nav from './components/Nav';
import BlogPosts from './components/BlogPosts';
import Footer from './components/Footer';
import Blog from './interfaces/blog';
import './styles/app.css';

const App = () => {

  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [filter, setFilter] = useState<string>('ALL');

  const categoryList = (blogs:Blog[]) => {
    const tagArrays = blogs[0].posts.map(obj => obj.tags).map(tag => tag);
    const allTags:string[] = [];
    tagArrays.forEach(arr => arr.forEach(tag => allTags.push(tag)))
    return allTags.filter((item, index) => allTags.indexOf(item) === index).sort();
  }

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
        blogs={blogs}
        categoryList={categoryList}
        setFilter={setFilter}/>
      <main className='main'>
        <BlogPosts
          blogs={blogs}
          categoryList={categoryList}
          filter={filter}/>
      </main>
      <Footer/>
    </>

  );
}

export default App;
