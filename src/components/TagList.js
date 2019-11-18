import React, { useState } from 'react';
import "./TagList.css";

export default function TagList({ tags, getPostsByTag }) {
    const [active, setActive] = useState(null);

    return (
        <section>
            <ul>
                {tags && tags.map((tag, i) => (
                    <li className={active === i ? 'tag-active tag' : 'tag'}
                        onClick={() => {
                            getPostsByTag(tag._id); setActive(i);
                        }}>
                        {`${tag.name}(${tag.posts.length})`}
                    </li>
                ))
                }
            </ul>
        </section>
    );
}