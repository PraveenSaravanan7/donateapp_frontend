import React, { useEffect, useState } from 'react'
import { Header_two } from "../components/Header_two";
import  axios from "../api";
import { Post } from "../components/Post";
import { useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { Loading } from "../components/Loading";
import 'react-toastify/dist/ReactToastify.css';
import FeatherIcon from "feather-icons-react";  
export const PostPage = ({match}) => {
    var [post,setpost]=useState([])
    var [loading,setloading]=useState(true);
    var [err,seterr]=useState(false);
    const history=useHistory() 
    var [copied, setcopied]=useState("")
    async function Getpost() {
        setloading(true)
        seterr(false)
        try {       
          let {id}=match.params
          var url="/posts/getpost/"+id
          const response = await axios.get(url);         
          console.log(response.data);
          setpost(response.data)
          setloading(false)
        } catch (error) {
          seterr(error);
          setloading(false)
        }
      }
    useEffect(()=>{
        //console.log("effect")
        Getpost()
    },[])
    useEffect(()=>{
        if(copied){
        toast.info('Link copied !!!', {
          position: "bottom-center",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });}
      },[copied])
    return (
        <div>
            
            <Header_two name="Post" ></Header_two>
            <ToastContainer></ToastContainer>
            {!loading &&
            <div className="mt60" >
                  { post.map((post)=> <Post key={post._id} data={post} setcopied={setcopied} fullview={true} ></Post> )  }

            
            <div className="text-center mt-5 mb-4" >
                    <h5>Comment Systems Under Developement</h5>
                    <br/>
                    <FeatherIcon icon="github" size={100} ></FeatherIcon>
                    <br/>
                    <br/>
                    <a className="text-break" target="blank" href="https://github.com/PraveenSaravanan7/donateapp_frontend" ><b>https://github.com/PraveenSaravanan7/donateapp_frontend</b></a>
                    <h4>Contribute on GitHub  </h4>
            </div>

            </div>}
            {loading && <Loading></Loading>}
        </div>
    )
}
