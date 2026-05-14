import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
export default function Home(){
const [posts,setPosts]= useState([]);

useEffect(()=>{
    fetch("https://blog-app-backed.onrender.com/api/posts")
    .then((res)=>res.json())
    .then((data)=>setPosts(data))
},[]);

const handleDelete = async (id)=>{
    await fetch(`https://blog-app-backed.onrender.com/api/posts/${id}`,{
        method:"DELETE",
    });

    setPosts(posts.filter((post)=>post._id !== id))

}

const [keyWord, setKeyWord] = useState("");

const handleSearch = async()=>{
    const res = await fetch(`https://blog-app-backed.onrender.com/api/posts?keyWord=${keyWord}`);
    const data = await res.json();
    setPosts(data);
    
}



return(
    <div className="p-6 border m-4 shadow-xl shadow-green-200">
        <h1 className="text-2xl font-bold mb-6">
            Blog App
        </h1>
        <input 
        value={keyWord}
        onChange={(e)=>setKeyWord(e.target.value)}
        placeholder="Search..."
        className="border p-2 mr-2 hover:shadow-lg shadow-blue-100 "
        />

        <button 
        onClick={handleSearch}
        className="bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700 transition mr-2"
        >
                 Search
         </button>

         <Link
         to={"/create"}
         >
         <button className="bg-green-500 py-2 px-3 rounded text-white font-bold hover:bg-green-700">
            New Post
         </button>
         </Link>

        {posts.map((post)=>(
            <Link key={post._id} to={`/post/${post._id}`}>
            <div 
            key={post._id}
            className="border p-4 rounded-lg m-4 shadow-lg shadow-blue-600 border-purple-600 hover:shadow-2xl transition "
            >
                <h2 className="font-bold text-lg text-purple-600">
                    {post.title}
                </h2>

                <p>{post.description}</p>

            <button
               
               onClick={(e)=>{
                e.preventDefault();
                handleDelete(post._id);
               }}
               className="bg-red-500 text-white px-2 py-1 mt-2 rounded"
            >
             Delete
            </button>
               
            </div>
             </Link>
        ))}
    </div>
   
)

}
