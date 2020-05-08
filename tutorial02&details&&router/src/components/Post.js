import React, { Component } from 'react';
import axios from 'axios'
class Posts extends Component {
    state = {
        // id:null
        post: null
    }
    componentDidMount() {
        console.log(this.props)
        let id = this.props.match.params.post_id;
        axios.get("https://jsonplaceholder.typicode.com/posts/" + id)
            .then(res => {
                this.setState({
                    post: res.data
                })

            })
        // this.setState({
        //    id:id 
        // })
    }
    render() {
        const post = this.state.post ? (
            
                    <div className="container">
                        <h4>{this.state.post.body}</h4>
                    </div>
               
           
        ) : (
                <div className="center">No Data </div>
            )
        return (
            <div className="">
                {post}
            </div>
        
        );
    }
}

export default Posts;