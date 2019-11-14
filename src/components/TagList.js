import React, { useState, useEffect } from 'react';
import Axios from 'axios';

export default function TagList() {
    const [Tags, setTags] = useState(null);
    const url = "http://localhost:3000/api/tag";

    const getTag = async () => {
        const { data } = await Axios.get(url);
        setTags(data.tags);
    };

    useEffect(() => {
        getTag();
    }, []);

    return (
        <section>
            <ul>
                {Tags && Tags.map(tag => <li>{tag.name}({tag.posts.length})</li>)}
            </ul>

        </section>
    )
}
