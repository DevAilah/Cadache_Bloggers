import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
   const [tittle, setTittle] = useState('');
   const [body, setBody] = useState('');
   const [author, setAuthor] = useState('Marioo');
   const [isPending, setIsPending] = useState(false);
   const navigate = useNavigate();

   const handleSubmit = (e) => {
       e.preventDefault();
       const blog = { tittle, body, author};

       setIsPending(true);
    
       /*adding values to json db or any other database*/
       fetch('http://localhost:8000/blogs', {
           method: 'POST',
           headers: {"Content-Type": "application/json"},
           body: JSON.stringify(blog)
       }).then(() => {
           console.log('new blog added');
           setIsPending(false);
           //navigate(-1);
           navigate("/home", { replace: true });
       })
   }


    return (  
        <div className="create">
           <h2>Add a new Blog</h2>
           <form onSubmit={handleSubmit}>
               <label>Blog tittle:</label>
               <input 
                   type="text"
                   required 
                   value={tittle}
                   onChange={(e) => setTittle(e.target.value)} />

               <label>Blog body:</label>
               <textarea 
                   required
                   value={body}
                   onChange={(e) => setBody(e.target.value)}>
              </textarea>

               <label>Blog author:</label>
               <select
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}>
                   <option value="Marioo">Marioo</option>
                   <option value="Yoshi">Yoshi</option>
                   <option value="Patrick">Patrick</option>
                   <option value="Bute">Bute</option>
               </select>
               { !isPending && <button>Add Blog</button> }
               { isPending && <button disabled>Adding Blog.....</button> }
                {/*<p>{ tittle }</p>
                   <p>{ body }</p>
                   <p>{ author }</p>*/}
           </form>
        </div>
    );
}
 
export default Create;