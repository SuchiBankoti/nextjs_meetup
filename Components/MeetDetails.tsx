'use client'

import { useEffect, useState } from "react";

interface Meetup {
    name: string;
    image: string;
    
}

export default function MeetDetails({ id }: { id: string }) {
    const [meet, setMeet] = useState<Meetup | null>(null); 

    useEffect(() => {
        fetch(`https://crudcrud.com/api/6b11232e2ddb4482a8171b2c8b18cd12/allmeetups/${id}`)
            .then(res => res.json())
            .then((res: Meetup) => { 
                setMeet(res);
            })
            .catch(e => console.log(e));
    }, [id]); 

    return (
        <div>
            {meet ? (
                <div className="meetbox">
                    <img src={meet.image} className="image" />
                    <div>{meet.name}</div>
                </div>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
}
