import React, { useState, useEffect } from 'react';

function History() {
    const [data, setData] = useState(null);
    useEffect(() => {
        const t = async() => {
            const res = await fetch('https://vlrggapi.vercel.app/news',{
                method: 'GET',
                mode: 'cors',
            })
            console.log(res);

        }
        console.log(t());
    }, []);

}

export default History;