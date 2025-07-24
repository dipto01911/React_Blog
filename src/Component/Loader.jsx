
 import React from 'react';
 
 const Loader = () => {
    return (
        <div>
            <div className='container mx-auto'>
                <div className='flex items-center justify-center h-screen'>
                 
                 <div className='text-center'>
    <span className="loading loading-bars loading-xs"></span>
<span className="loading loading-bars loading-sm"></span>
<span className="loading loading-bars loading-md"></span>
<span className="loading loading-bars loading-lg"></span>
<span className="loading loading-bars loading-xl"></span>
                 </div>
                </div>
            </div>
        </div>
    );
 };
 
 export default Loader;