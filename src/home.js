//import { useState, useEffect } from "react";
import BlogList from "./bloglist";
import useFetch from "./useFetch";

const Home = () => {
  const { data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs')
   
    /*let name = 'Marioo';
      const [name, setName] = useState('Marioo');
      const [age, setAge] = useState(25);

    const handleClick = () => {
       // name = 'Patrick';
        //console.log(name);
        setName('Patrick');
        setAge(30);
    }
    const handleClickAgain = (name, e) => {
        console.log('Hello' + name, e.target);
    }*/
    return(
        <div className="home">
            {error && <div>{ error }</div>}
            {isPending && <div>Loading......</div>}
          {blogs && <BlogList blogs={blogs} tittle="All blogs"  />}
        {blogs && <BlogList blogs={blogs.filter((blog) => blog.author === 'Marioo')} tittle="Marioo's blogs" />}
            
        </div>
    );
    }
 
export default Home;