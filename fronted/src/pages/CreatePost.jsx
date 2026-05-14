import {useState} from "react";
import { Link } from "react-router-dom";
export default function CreatePost(){
    const [title,setTitle] = useState("");
    const [description,setDescription]=useState("");

    const handleSubmit = async (e)=>{
        e.preventDefault();
        await fetch("http://localhost:5000/api/posts",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body: JSON.stringify({ title, description }),
        });
        setTitle("");
        setDescription("");    
    };

    return(
        <div className="max-w-4xl justfy-center text-center m-auto border mt-4 rounded-lg shadow-xl border-green-600 shadow-blue-400 hover:shadow-blue-700">

        <form onSubmit ={handleSubmit} className="p-6  text-center " >
            <input 
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
            placeholder="Title"
            className="border p-2 block mb-2"
            />

            <textarea 
            value={description} 
            onChange={(e)=>setDescription(e.target.value)}
            placeholder="Body"
            className="border p-2 block mb-2"
            
            />

            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700  m-4">
                Create post
            </button>
            <Link 
            to={"/"}
            >
            <button 
            className="bg-gray-300 py-2 px-3 rounded hover:bg-gray-600 transition duration-300  text-green-600 font-bold"
            >

                View Posts
            </button>
            </Link>
        </form>
       
        

        </div>
    )
}