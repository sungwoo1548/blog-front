import React, { useState, useEffect } from 'react';
import Axios from 'axios';

// component
import Main from './Main'
import TagList from './TagList';

const Home = () => {
    const [Posts, setPosts] = useState(null);
    const [Tags, setTags] = useState(null);

    const getPosts = async () => {
        const url = "http://localhost:3000/api/post";
        const { data } = await Axios.get(url);
        setPosts(data.posts);
    }
    const getTags = async () => {
        const url = "http://localhost:3000/api/tag";
        const { data } = await Axios.get(url);
        setTags(data.tags);
    };

    const getAll = async () => {
        await getPosts();
        await getTags();
    }
    
    useEffect(() => {
        getAll();
    }, []);

    return (
        <>
            <TagList Tags={Tags} />
            <Main Posts={Posts} />
        </>
    )
}

export default Home
