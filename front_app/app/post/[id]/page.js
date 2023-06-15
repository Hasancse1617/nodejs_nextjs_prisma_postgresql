import React from 'react';

function Page() {
  return (
    <>
       <div className="single-post-area">
            <div className="container">
                <div className="single-post-content col-md-8 offset-md-2">
                    <h3>{ post.title }</h3>
                    <img width="100%" height="300px" src={`${post.image}`}/>
                    <p>{ post.content }</p>
                    
                    {/* <Comment/> */}
                </div>
            </div>
        </div>
    </>
  )
}
export default Page;