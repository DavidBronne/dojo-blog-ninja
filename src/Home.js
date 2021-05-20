import {useState} from 'react';
import BlogsList from './BlogsList';

const Home = () => {
    
    const [blogs, setBlogs] = useState(
        [
            { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
            { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
            { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
          ]
    )

    const handleDelete = (id) => {
        const newBlogs = blogs.filter((blog)=>blog.id !== id);
        setBlogs(newBlogs)
    }


    return ( 
        <div className="home">

            <BlogsList blogs={blogs} title='Global list' handleDelete={handleDelete}/>
            {/* <BlogsList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's  movies"/> */}


        </div>
     );
}
 
export default Home;