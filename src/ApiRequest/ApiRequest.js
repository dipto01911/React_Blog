

import axios from "axios";

export async function PostCategories() {
    let res=await axios.get('https://basic-blog.teamrabbil.com/api/post-categories')
    if(res.status==200){
        return res.data;
    }else{
        return [];
    }
}

export async function PostLatest() {
    let res=await axios.get('https://basic-blog.teamrabbil.com/api/post-newest')
    if(res.status==200){
        return res.data;
    }else{
        return [];
    }
}

export async function PostByCategory(id) {
    let res=await axios.get(`https://basic-blog.teamrabbil.com/api/post-list/${id}`)
    if(res.status==200){
        return res.data;
    }else{
        return [];
    }
}

export async function PostBlogDetails(id) {
    let res=await axios.get(`https://basic-blog.teamrabbil.com/api/post-details/${id}`)
    if(res.status==200){
        return res.data;
    }else{
        return [];
    }
}