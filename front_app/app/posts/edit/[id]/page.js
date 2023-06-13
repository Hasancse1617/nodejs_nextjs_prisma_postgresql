"use client"

import { useEffect, useState } from "react";

function Page({ params }) {
    console.log(params.id);
    const [state, setState] = useState({
        title: "",
        image: "",
        content: ""
    });
    const handleInput = (e) =>{
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        
    }
    useEffect(()=>{
        fetch(`http://localhost:5000/api/edit-post/${params.id}`)
        .then((res)=>res.json())
        .then((data)=>{
            if(data.response){
                setState({
                    title: data.response.title,
                    image: data.response.image,
                    content: data.response.content
                });
             }
        })  
    },[params.id]);
  return (
    <>
      <div className="create-post-area">
            <div className="container">
                <div className="create-post-content col-md-8 offset-md-2">
                    <h3>Edit Post</h3>
                      <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="form-group col-md-6">
                            <label for="inputAddress2">Post title</label>
                            <input type="text" onChange={handleInput} name="title" value={state.title} className="form-control" id="inputEmail4"/>
                            </div>
                            <div className="form-group col-md-6">
                            <label for="inputAddress2">Post thumbnail link</label>
                            <input type="text" onChange={handleInput} name="image" value={state.image} className="form-control" id="inputPassword4"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label for="inputAddress2">Post Content</label>
                            <textarea className="form-control" onChange={handleInput} name="content" value={state.content} id="inputAddress" rows="4"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Update</button>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}
export default Page;