import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Main({ Posts, getNextPage }) {

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-md-10 mx-auto">
                    {Posts && Posts.map((post) => (
                        <>
                            <div className="post-preview">
                                <Link to={`/post/${post._id}`}>
                                    <h2 className="post-title">{post.title}</h2>
                                </Link>
                                <p className="post-meta">{post.date}</p>
                            </div>
                            <hr />
                        </>
                    ))}

                    <div className="clearfix">
                        <button type="button" className="btn btn-primary float-right"
                            onClick={() => { getNextPage(); }}
                        >Older Posts &rarr;
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
