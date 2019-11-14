import React, { useState, useEffect } from 'react';

export default function TagList({Tags}) {
  
    return (
        <section>
            <ul>
                {Tags && Tags.map(tag => <li>{tag.name}({tag.posts.length})</li>)}
            </ul>

        </section>
    )
}
