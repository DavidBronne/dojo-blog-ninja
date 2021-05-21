import {useState, useEffect} from 'react';
import BlogsList from './BlogsList';

const Home = () => {
    
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);


    useEffect(()=> {
       
       fetch(' http://localhost:8000/blogs')
        .then(res =>{
            if (!res.ok) {
                throw Error ('Connected to server but response failed')
            }
            
            return res.json()
        })
        .then(data => {  
            setBlogs(data)
            setIsPending(false)
            setError(null)
        })
        .catch(err => {
            setError(err.message)
            setIsPending(false)    
        }
        )
        
    }, [])

    return ( 
        <div className="home">
            { error && <div> {error} </div>}
            { isPending && <div>Loading...</div>}
            { blogs && <BlogsList blogs={blogs}  /> }
         </div>
     );
}
 
export default Home;