import React, { useState, useEffect } from 'react';

function History() {
    const [data, setData] = useState(null);
    useEffect(() => {
        const t = async() => {
            const res = await fetch('https://www.gamer.no/klubber/revengers/179892/kamper/resultater')
            console.log(res);
            
            if (res.status === 200) {
                const data = await res.json();
                console.log('Data from Cloud Function:', data);
              } else {
                console.error('Error response from Cloud Function:', res.statusText);
              }
        }
        console.log(t());
    }, []);

}

export default History;