import Link from "next/link"
import getAllMeetup from "@/lib/getAllMeetup";


export default async function HomePage() {
    const data: Promise<Meetups[]> = getAllMeetup()
    const arr = await data
    console.log('arr',arr)
    if (!arr) {
        return <div>Loading...</div>
    }
    return (
        <div>
            {arr.map((e:Meetups, i:number) => (
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


