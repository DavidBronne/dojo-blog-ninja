
import BlogsList from './BlogsList';
import useFetch from './useFetch';

const Home = () => {
    
    const {data, isPending, error} = useFetch(' http://localhost:8000/blogs')

    return ( 
        <div className="home">
            { error && <div> {error} </div>}
            { isPending && <div>Loading...</div>}
            { data && <BlogsList blogs={data}  /> }
         </div>
     );
}
 
export default Home;