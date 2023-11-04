import MeetDetails from "@/Components/MeetDetails";

export default function Meet({ params }: { params: { meetid: string } }) {
    return (
        <div>
            <MeetDetails id={params.meetid} />
        </div>
    );
}
