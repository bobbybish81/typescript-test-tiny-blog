import { useEffect, useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Blog from './interfaces/blog';

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
      <Header
        sections={sections}
        setFilter={setFilter}/>
      <Main
        blogs={blogs}
        sections={sections}
        filter={filter}/>
      <Footer/>
    </>

  );
}

export default App;
