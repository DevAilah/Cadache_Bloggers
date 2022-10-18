import { Link } from "react-router-dom";

const BlogList = ({blogs, tittle }) => {
    //const blogs = props.blogs;
    //const tittle = props.tittle;

    //console.log(props,blogs)

    return ( 
      <div className="blog-list">
          <h1>{ tittle }</h1>
         {blogs.map((blog) =>(
                <div className="blog-preview" key={blog.id}>
                   <Link to={`/blogs/${blog.id}`}>
                     <h2>{ blog.tittle }</h2>
                   </Link>
                     {/*<p>{ blog.body }</p>*/}
                     <p>written by { blog.author }</p>
                   
                </div>
         ))}
      </div>
     );
}
 
export default BlogList;