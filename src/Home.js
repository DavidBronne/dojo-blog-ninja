import {useState, useEffect} from 'react';
import BlogsList from './BlogsList';

const Home = () => {
    
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);


    useEffect(()=> {
       
       fetch(' http://localhost:8000/blogs')
        .then(res =>{
            return res.json()
        })
        .then(data => {  
            setBlogs(data)
            setIsPending(false)
        })
        
        
    }, [])

    return ( 
        <div className="home">
            { isPending && <div>Loading...</div>}
            { blogs && <BlogsList blogs={blogs}  /> }
         </div>
     );
}
 
export default Home;