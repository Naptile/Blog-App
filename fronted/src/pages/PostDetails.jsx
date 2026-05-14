import {useEffect,useState} from "react";
import { useParams } from "react-router-dom";

export default function  PostDetails(){
    const {id}=useParams();
    const [post,setPost]=useState(null);

    useEffect(()=>{
        fetch(`https://blog-app-backed.onrender.com/api/posts/${id}`)
        .then((res)=>res.json())
        .then((data)=>setPost(data))
    },[id]);

    if(!post) return <p>Loading...</p>
    return(

        <div className="p-6">
            <h1 className="text-2xl font-bold">
                {post.title}
            </h1>
            <p className="mt-4">
                {post.description}
            </p>
        </div>
    )

}