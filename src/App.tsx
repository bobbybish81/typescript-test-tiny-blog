import { useEffect, useState } from 'react';
import Header from './components/Header';
import AllBlogSections from './components/AllBlogSections';
import BlogSection from './components/BlogSection';
import Footer from './components/Footer';
import { IBlogs, IPosts } from './interfaces/IBlogs';
import './styles/App.css';

const App = () => {

  const [blogs, setBlogs] = useState<IBlogs>(
    {
      loading: false,
      posts: [] as IPosts[],
      errorMessage: '',
    }
  );
  const [filter, setFilter] = useState<string>('ALL');

  const sections = ['american', 'crime', 'fiction', 'french', 'history'];

  useEffect(() => {
    setBlogs({...blogs, loading: true})
    const fetchData = async () => {
      const response = await fetch('https://dummyjson.com/posts');
      try {
        const data = await response.json();
        setBlogs({
          ...blogs,
          loading: false,
          posts: data.posts,
        });
      } catch (err: any) {
        setBlogs({
          ...blogs,
          loading: false,
          errorMessage: err.message,
        });
      }
    };
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  const { loading, posts, errorMessage } = blogs;

  return (
    <>
      <Header
        sections={sections}
        setFilter={setFilter}/>
      <main className='main-container'>
        {filter === 'ALL' ? 
          sections.map((section,index) =>           
          (<AllBlogSections
            loading={loading}
            posts={posts}
            errorMessage={errorMessage}
            section={section}
            index={index}/>))
          : 
          <BlogSection
            loading={loading}
            posts={posts}
            errorMessage={errorMessage}
            filter={filter}/>}
      </main>
      <Footer/>
    </>

  );
}

export default App;
