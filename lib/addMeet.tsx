
export default async function addMeet(formData:meetPost) {
    const res=await fetch("https://crudcrud.com/api/f55e4f4045234eecbf171fe43eb276fb/allmeetups", {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body:JSON.stringify(formData)
        })

if (!res.ok) {
    throw new Error('could not post data')
}
    
}