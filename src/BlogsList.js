const BlogsList = ({blogs,title,handleDelete}) => {
    
/*     const blogs = props.blogs;
    const title = props.title;
    console.log(`props :` , props); */
    
    
    return ( 
        <div className="blogs-list">

                            <h2>{title}</h2>
            {
                
                blogs.map( (blog) => (
                       <div className="blog-preview" key={blog.id}>
                            <h2>{blog.title}</h2>
                            <p>{blog.author}</p>
                            <button onClick={()=>handleDelete(blog.id)}>Delete</button>
                       </div>   
                )
    
                )
            }
        </div>
     );
}
 
export default BlogsList;