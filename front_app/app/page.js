import Link from 'next/link';

async function getData() {
    const res = await fetch('http://localhost:5000/api/all-post/1')
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    return res.json()
}
async function Page() {
    const {response:posts} = await getData();
    return(
        <>
            <div className="hero-area">
                <div className="container">
                <div className="hero-content">
                    <h1>Express js | Sequelize | MySql | React js</h1>
                    <h2>with <b>(Context API + useReducer)</b> like Redux Simple app</h2>
                    
                </div>
                </div>
            </div>
            <div className="single-post-area">
                <div className="container">
                    {
                    posts? posts.map((post)=>(
                    <div key={post.id} className="single-post-content col-md-8 offset-md-2">
                        <Link href={`/post/${post.id}`}>
                           <h3>{ post.title }</h3>
                           <img width="100%" height="300px" src={`${post.image}`}/>
                        </Link>
                        <p>{ post.content.substring(0,100) }...</p>
                    </div>
                    )):''
                    }
                    <hr/>
                </div>
            </div>
        </>
    );
}
export default Page;