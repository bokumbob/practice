import React, { useEffect, useState } from 'react';
import Comments from './Comments'

const list = [
    {title: "comment1", content: "message1", likes: 1},
    {title: "comment2", content: "message2", likes: 1},
    {title: "comment3", content: "message3", likes: 1},
]

export default function Memo(){
    const [comments, setComments] = useState(list)
    useEffect(()=>{
        const interval = setInterval(()=>{
            setComments((pre) => [
                ...pre,
                {
                    title: `comment${pre.length + 1}`, content: `message${pre.length + 1}`, likes:1
                }
            ])
        },1000)

        return () => clearInterval(interval) 
    }, [])

    return (
        <Comments comments={comments} />
    );
};

// export default Memo;