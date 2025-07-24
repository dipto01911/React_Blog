import { useParams } from "react-router-dom";
import Layout from "../Layout/Layout";
import { useEffect, useState } from "react";
import { PostByCategory } from "../ApiRequest/ApiRequest";
import Loader from "../Component/Loader";
import BlogList from "../Component/BlogList";


 
 const ByCategoryPage = () => {
    let {categoryID}=useParams()
    const [List,SetList]=useState(false)


    useEffect(()=>{
        (async()=>{
    let result= await PostByCategory(categoryID)
    SetList(result)
        })()
    },[categoryID])

     //console.log('List by category',List)
    return (
        <Layout>
           {
            List==false?<Loader/>:<BlogList list={List}/>
           }
        </Layout>
    );
 };
 
 export default ByCategoryPage;