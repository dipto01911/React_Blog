
import React, { useEffect, useState } from 'react';
import { PostCategories } from '../ApiRequest/ApiRequest';
import { Link, NavLink } from 'react-router-dom';

const Layout = (props) => {

    const [Categories,SetCategories]=useState([])

   useEffect(()=>{
    (async()=>{
     let result= await PostCategories();
     SetCategories(result)
    })()
   },[])

   //console.log(Categories)
    return (
        <div>
            
    <div className="navbar top-0 fixed z-50 bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       <li><NavLink to='/'>Home</NavLink></li>
       {
        Categories.map((item,index)=> <li><NavLink className={({isActive})=>
        isActive? "text-red-600 font-bold underline text-[15px]":'text-gray-700 font-semibold text-[15px] '} key={index}   to={`/byCategory/${item.id}`}>{item.name}</NavLink></li>)
      }

      </ul>
    </div>
    <Link to='/' className='btn btn-ghost text-xl'>Blog</Link>
    {/* <Link to='/' className="btn btn-ghost text-xl">Blog</Link> */}
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
         <li><NavLink className={({isActive})=>
        isActive ?"text-red-600 font-bold underline text-[15px]":'text-gray-700 font-semibold text-[15px] ' } to='/'>Home</NavLink></li>
      {
        Categories.map((item,index)=> <li><NavLink className={({isActive})=>
        isActive ?"text-red-600 font-bold underline text-[15px]":'text-gray-700 font-semibold text-[15px] ' } key={index} to={`/byCategory/${item.id}`}>{item.name}</NavLink></li>)
      }
     
    </ul>
  </div>
  
</div>       
           
            {props.children}
        </div>
    );
};

export default Layout;













// import React, { useEffect, useState } from 'react';
// import { postCategories } from '../ApiRequest/ApiRequest';
// import { NavLink } from 'react-router-dom';



// const Layout = (props) => {

// const [categories,SetCategories]=useState([]);

// useEffect(()=>{
//     (async()=>{
//        let result= await  postCategories()
//        SetCategories(result);
//     })()
// },[])

// console.log(categories)
//     return (
//         <div>
//           <div className="navbar bg-base-100 shadow-sm">
//   <div className="navbar-start">
//     <div className="dropdown">
//       <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
//       </div>
//       <ul
//         tabIndex={0}
//         className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        
//         {
//             categories.map((item,index)=>{
//                 return <li><NavLink>{item.name}</NavLink></li>
//             })
//         }
        
     
//       </ul>
//     </div>
//     <a className="btn btn-ghost text-xl">daisyUI</a>
//   </div>
//   <div className="navbar-center hidden lg:flex">
//     <ul className="menu menu-horizontal px-1">
//       <li><a>Item 1</a></li>
//       <li>
//         <details>
//           <summary>Parent</summary>
//           <ul className="p-2">
//             <li><a>Submenu 1</a></li>
//             <li><a>Submenu 2</a></li>
//           </ul>
//         </details>
//       </li>
//       <li><a>Item 3</a></li>
//     </ul>
//   </div>
//   <div className="navbar-end">
//     <a className="btn">Button</a>
//   </div>
// </div>

//         {props.children}
//         </div>
//     );
// };

// export default Layout;