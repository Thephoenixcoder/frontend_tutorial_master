import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

class Home extends Component {
    state = { 
        posts:[]
     }
    componentDidMount(){
       axios.get('https://jsonplaceholder.typicode.com/posts').then(res=>{
           this.setState({
               posts:res.data.slice(0,10)
           })
       })
    }
    render() { 
        const {posts}=this.state;
        const postlist=posts.length? (
            posts.map(post=>{
               return(
                   <div className="post card col  " key={post.id}>
                       <div className="card-content">
                           <Link className="card-title" to={'/'+ post.id }>
                               {post.title}
                           </Link>
                           <p>{post.body}</p>
                       </div>
                   </div>
               )
            })
        ):(
            <div className="center">No posts yet </div>
        )
        return ( 
            <div className="container" >
                <h1 className="center">Home </h1>
             {postlist}
            </div>
         );
    }
}
 
export default Home;