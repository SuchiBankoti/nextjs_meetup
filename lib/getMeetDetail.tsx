export default async function getMeetDetails(id:string) {
    
    const res = await fetch(`https://crudcrud.com/api/f55e4f4045234eecbf171fe43eb276fb/allmeetups/${id}`)
    if (!res.ok) {
        throw new Error('could not fetch data')
    }
    return res.json()
}
