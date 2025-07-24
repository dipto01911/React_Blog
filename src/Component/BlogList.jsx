

import { Link } from 'react-router-dom';


 
 const BlogList = ({list}) => {
    return (
        <div>
            <div className='container mx-auto my-16 p-9 '>
                <div className='grid grid-cols-1 mt-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7'>
                   {
                    list.map((item,index)=>{
                        return(
                <Link key={index} to={`/details/${item.id}`} className='card w-75 glass'>
              
                <figure><img src={item.img} alt='cart'/> </figure>
                    <div className='card-body '>
                    <h2 className='card-title'>{item.title}</h2>
                    <p>{item.short}</p>
                    </div>
             </Link>
                        )
                    })
                   }
                </div>
            </div>
        </div>
    );
 };
 
 export default BlogList;