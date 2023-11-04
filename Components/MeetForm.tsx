'use client'

import { useState,ChangeEvent } from "react";

export default function MeetForm() {
    const [formData, setFormData] = useState({
        name: "",
        image: "",
        
    })
   
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData(prev=>({...prev,[e.target.name]:e.target.value}))
    }
    function add() {
        fetch("https://crudcrud.com/api/6b11232e2ddb4482a8171b2c8b18cd12/allmeetups", {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body:JSON.stringify(formData)
        })
    }
    return (
        <div className="main">
            <form className="form">

                <input
                    type="text"
                    name="name"
                    className="input"
                    placeholder="name of the city"
                    value={formData.name}
                    onChange={handleChange}
                />
                <input
                    type="url"
                    name="image"
                    className="input"
                    placeholder="image url"
                    value={formData.image}
                    onChange={handleChange}
                />
                

            </form>
            <button onClick={()=>add()}>Add</button>
        </div>
    );
}
