import { useEffect, useState } from "react";
import BlogList from "../Component/BlogList";
import Layout from "../Layout/Layout";
import { PostLatest } from "../ApiRequest/ApiRequest";
import Loader from "../Component/Loader";




 
 const HomePage = () => {
    let [list,setList]=useState(false);
    useEffect(()=>{
        (async()=>{
        let result= await PostLatest();
        setList(result)
        })()
    },[])

    //console.log('List',list)
    return (
        <Layout>
           {
            list==false?<Loader/>:<BlogList list={list}/>
           }
        </Layout>
    );
 };
 
 export default HomePage;