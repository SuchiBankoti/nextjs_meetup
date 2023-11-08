import getMeetDetails from "@/lib/getMeetDetail";


export default async function MeetDetails({ id }: { id: string }) {
      const data:Promise<Meetups>=getMeetDetails(id)
      const meet = await data
    

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