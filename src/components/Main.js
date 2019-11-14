import React, { useState, useEffect } from 'react';
import Axios from 'axios';

export default function Main() {
    const [Posts, setPosts] = useState(null);

    const url = "http://localhost:3000/api/post";
    const getPosts = async () => {
        const { data } = await Axios.get(url);
        console.log(data);
    }

    useEffect(() => {
        getPosts();
    }, [])
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-md-10 mx-auto">
                    <div className="post-preview">
                        <a href="post.html">
                            <h2 className="post-title">Man must explore, and this is exploration at its greatest</h2>
                        </a>
                        <p className="post-meta">on September 24, 2019</p>
                    </div>
                    <hr />
                    <div className="clearfix">
                        <a className="btn btn-primary float-right" href="#">Older Posts &rarr;</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
