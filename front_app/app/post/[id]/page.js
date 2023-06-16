import React from 'react';

async function getData(id) {
    const res = await fetch(`http://localhost:5000/api/single-post/${id}`,{ cache: 'no-store' })
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    return res.json()
}
async function Page({params}) {
    const {response:post} = await getData(params.id);
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