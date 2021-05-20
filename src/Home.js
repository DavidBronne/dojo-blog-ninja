import {useState, useEffect} from 'react';
import BlogsList from './BlogsList';

const Home = () => {
    
    const [blogs, setBlogs] = useState(
        [
            { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
            { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
            { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
          ]
    )

    const [name, setName] = useState("Eliot");

    const handleDelete = (id) => {
        const newBlogs = blogs.filter((blog)=>blog.id !== id);
        setBlogs(newBlogs)
    }

    useEffect(()=> {
       console.log(blogs);
       console.log('run useEffect');
       
       
    }, [name])

    return ( 
        <div className="home">

            <BlogsList blogs={blogs} title='Global list' handleDelete={handleDelete}/>
            {/* <BlogsList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's  movies"/> */}
            <p>{ name }</p>
            <button onClick={()=>setName('Coucou')}>Change name</button>

        </div>
     );
}
 
export default Home;