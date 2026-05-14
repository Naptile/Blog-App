import Home from "./pages/Home.jsx"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import CreatePost from "./pages/CreatePost.jsx"
import PostDetails from "./pages/PostDetails.jsx"
export default function App(){

  return(
   <BrowserRouter>

   <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/create" element={<CreatePost/>}></Route>
    <Route path="/post/:id" element={<PostDetails/>}></Route>
    {/* <Route path="/edit/:id" element={<EditPost/>}></Route> */}
   </Routes>

   </BrowserRouter>
  )
}