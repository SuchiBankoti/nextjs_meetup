'use client'

import addMeet from "@/lib/addMeet";
import { useState,ChangeEvent } from "react";

export default function MeetForm() {
    const [formData, setFormData] = useState({
        name: "",
        image: "",
        
    })
   
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData(prev=>({...prev,[e.target.name]:e.target.value}))
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
            <button onClick={()=>addMeet(formData)}>Add</button>
        </div>
    );
}
