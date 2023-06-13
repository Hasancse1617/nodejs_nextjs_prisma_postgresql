import moment from "moment";
import Link from 'next/link';
import Pagination from "../components/pagination/Pagination";

async function getData(page) {
    const res = await fetch(`http://localhost:5000/api/all-post/${page}`)
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    return res.json()
}
async function Page({searchParams }) {
  const {response:posts,perPage,count} = await getData(searchParams.page);
  return (
    <>
    <div className="post-list-area">
            {/* <Toaster position="top-right" reverseOrder={true}/> */}
            <div className="container">
                <div className="post-list-content">
                    <h3>Post List</h3>
                    
                    <table className="table" style={{width:'100%'}}>
                        <thead>
                        <tr>
                            <th style={{paddingLeft:'70px',width:'50%'}}>Post</th>
                            <th style={{width:'25%'}}>Date</th>
                            <th style={{width:'25%'}}>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                           posts? posts.map((post)=>(
                                <tr key={post.id}>
                                    <td style={{paddingLeft:'95px'}}><Link title="Click here to go single post" href={`/post/${post.id}`}><img width="50" height="50" src={`${post.image}`}/>{ post.title }</Link></td>
                                    <td>{ moment().format('MMMM Do YYYY', post.createdAt) }</td>
                                    <td>
                                        <Link href={`/posts/edit/${post.id}`} title="Edit"><i className="fa-regular fa-pen-to-square"></i></Link>
                                        {/* <a href="#" title="Delete" onClick={()=>deleteAction(post.id)}><i className="fa-solid fa-trash-can"></i></a> */}
                                    </td>
                                </tr>
                            )):''
                        }
                        </tbody>
                        <tfoot></tfoot>
                    </table>
                     <Pagination page={searchParams.page} perPage={perPage} count={count} pageLink={`/posts`} />
                </div>
            </div>
        </div>
    </>
  )
}
export default Page;
