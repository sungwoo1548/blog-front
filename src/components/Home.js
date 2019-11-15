import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Main from './Main';
import TagList from './TagList';

import { baseURL } from '../config';

export default function Home() {
    const [posts, setPosts] = useState(null);
    const [tags, setTags] = useState(null);
    const [page, setPage] = useState(1);

    const getPosts = async () => {
        const url = `${baseURL}/api/post/`;
        const { data } = await Axios.get(url);
        setPosts(data.posts);
    };

    const getPostsByTag = async (tag_id) => {
        const url = `${baseURL}/api/post/?tag=${tag_id}`;
        const { data } = await Axios.get(url);
        setPosts(data.posts);
    };

    const getNextPage = async () => {
        await getPosts(page + 1);
        setPage(page + 1);
    };

    const getTags = async () => {
        const url = `${baseURL}/api/tag`;
        const { data } = await Axios.get(url);
        setTags(data.tags);
    };

    const getAll = async () => {
        await getPosts();
        await getTags();
    };

    useEffect(() => {
        getAll();
    }, []);

    return (
        <>
            <TagList tags={tags} getPostsByTag={getPostsByTag} />
            <Main Posts={posts} getNextPage={getNextPage} />
        </>
    );
}