"use client"
import { useRouter } from 'next/navigation';
import { useState } from "react";

function page() {
    const router = useRouter();
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
        console.log(state);
        fetch(`http://localhost:5000/api/create-post`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(state)
        })
        .then((res)=>res.json())
        .then((data)=>{
            if(data.message){
                router.push('/posts?page=1');
             }
        })
    }

  return (
    <>
    <div className="create-post-area">
            {/* <Toaster position="top-right" reverseOrder={true}/> */}
            <div className="container">
                <div className="create-post-content col-md-8 offset-md-2">
                    <h3>Create Post</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="form-group col-md-6">
                            <label htmlFor="inputAddress2">Post title</label>
                            <input type="text" onChange={handleInput} name="title" className="form-control" id="inputEmail4"/>
                            </div>
                            <div className="form-group col-md-6">
                            <label htmlFor="inputAddress2">Post thumbnail link</label>
                            <input type="text" onChange={handleInput} name="image" className="form-control" id="inputPassword4"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputAddress2">Post Content</label>
                            <textarea className="form-control" onChange={handleInput} name="content" id="inputAddress" rows="4"></textarea>
                        </div>
                        
                        <button type="submit" className="btn btn-primary">Create</button>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}
export default page;