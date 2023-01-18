import Blog from '../interfaces/blog';
import BlogSection from './BlogSection';
import BlogSections from './BlogSections';
import '../styles/Main.css';

interface SectionProps {
  blogs: Blog[],
  sections: string[],
  filter: string,
}

const Main = ({ blogs, sections, filter } : SectionProps) => {

  return (
    <main className='main-container'>
      {filter === 'ALL' ? 
        sections.map((section,index) =>           
        (<BlogSections
          blogs={blogs}
          section={section}
          index={index}/>))
        : 
        <BlogSection
          blogs={blogs}
          filter={filter}/>}
    </main>
  )
}

export default Main