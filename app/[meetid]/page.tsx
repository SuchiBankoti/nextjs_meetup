export default function Meet({ params }: { params: { meetid:string } }) {
    const DUMMY_MEETUPS = [
        {
            name: "casablanca",
            id: 1,
            image:"https://images.unsplash.com/photo-1444723121867-7a241cacace9?auto=format&fit=crop&q=80&w=1770&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }, {
            name: "amsterdam",
            id: 2,
            image:"https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&q=80&w=1912&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
    ]
    const meet=DUMMY_MEETUPS.find(e=>e.id===Number(params.meetid))

    return(<div>
            
                    <div className="meetbox">
                        <img src={meet?meet.image:""} className="image" />
                        <div>{meet?meet.id:""}</div>
                    <div>{meet?meet.name:""}</div>
                    </div>
    </div>)
}