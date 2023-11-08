import MeetDetails from "@/Components/MeetDetails";
import getAllMeetup from "@/lib/getAllMeetup";

export default function Meet({ params }: { params: { meetid: string } }) {
    return (
        <div>
            <MeetDetails id={params.meetid} />
        </div>
    );
}

export async function generateStaticParams() {
    const data: Promise<Meetups[]> = getAllMeetup()
    const arr = await data
    
    return arr.map(meet => (
        {id:meet._id}
    ))
}