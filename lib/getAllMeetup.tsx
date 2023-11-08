export default async function getAllMeetup(){
        const res = await fetch("https://crudcrud.com/api/f55e4f4045234eecbf171fe43eb276fb/allmeetups",{next:{revalidate:10}})
       console.log('fetching data')
    if (!res.ok) throw new Error('failed to fetch data')

    return res.json()
       
        
       
}