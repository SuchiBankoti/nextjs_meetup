import Link from "next/link"

export default function Navbar() {
    return (
        <div className="nav">
            
            <h1>NextJs Meetup</h1>
            
            <Link href="/">
            <h2>All Meetups</h2>
            </Link>
            <Link href='/addmeet'>
            <h2>Add New Meetup</h2>
            </Link>
        </div>
    )
}