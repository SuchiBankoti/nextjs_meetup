import Link from "next/link"

export default function HomePage() {
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

    return(<div>
        {
            DUMMY_MEETUPS.map((e,i) => {
                return (
                    <Link href={`/${e.id}`}>
                    <div key={i} className="meetbox">
                        <img src={e.image} className="image" />
                        <div>{e.id}</div>
                    <div>{e.name}</div>
                    </div>
                    </Link>
                )
            })
        }
    </div>)
}