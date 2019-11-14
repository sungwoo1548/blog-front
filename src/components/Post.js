import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { localURL } from '../config';

export default function Post({ match }) {
    const [Post, setPost] = useState(null);

    const getPost = async () => {
        const url = `${localURL}/api/post/${match.params.id}`;
        const { data } = await Axios.get(url);
        setPost(data);
    }

    useEffect(() => {
        getPost();
    }, [])

    return (
        <>
            <h1>{Post && Post.title}</h1>
            <p>{Post && Post.contents}</p>
        </>
    )
}
