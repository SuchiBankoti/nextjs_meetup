'use client'

import Link from "next/link"
import { useEffect, useState } from "react"

// Define interface for the expected data structure
interface Meetup {
    _id: string;
    name: string;
    image: string;
    
}

export default function HomePage() {
    const [arr, setArr] = useState<Meetup[]>([]); // Specify the type as an array of Meetup objects

    useEffect(() => {
        fetch("https://crudcrud.com/api/6b11232e2ddb4482a8171b2c8b18cd12/allmeetups")
            .then(res => res.json())
            .then((res: Meetup[]) => { // Annotate the type of 'res'
                setArr(res);
            })
            .catch(e => console.log(e));
    }, []);

    return (
        <div>
            {arr.map((e, i) => (
                <div key={i} className="meetbox">
                    <img src={e.image} className="image" />
                    <div>{e.name}</div>
                    <Link href={`/${e._id}`}>
                        <div className="detail-btn">Show Details</div>
                    </Link>
                </div>
            ))}
        </div>
    );
}
