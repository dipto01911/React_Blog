

import { useParams } from 'react-router-dom';
import Layout from '../Layout/Layout';
import { useEffect, useState } from 'react';
import { PostBlogDetails } from '../ApiRequest/ApiRequest';
import Loader from '../Component/Loader';
import BlogDetails from '../Component/BlogDetails';
 
 const DetailsPage = () => {
    const {postId}=useParams()
    let[details,setDetails]=useState(false)
    useEffect(()=>{
        (async()=>{
         let result= await PostBlogDetails(postId)
         setDetails(result)
        })()
    },[postId])
   
    //console.log('Set Details',details)

    return (
        <Layout>
            {
                details==false?<Loader/>:<BlogDetails details={details}/>
            }
        </Layout>
    );
 };
 
 export default DetailsPage;