"use client"
import {useEffect, useState} from 'react';

import RemoveButton from "/components/RemoveButton";


const getClients = async () => {
    try {
        const res = await fetch("http://localhost:3000/api/clients", {
            cache: "no-store"
        });
        if (!res.ok) {
            throw new Error("Failed to fetch Client list")
        }
        return res.json();
    } catch (error) {
        console.log("Error loading clients", error);
    }
};
export default function ClientList() {
    const [clients, setClients] = useState([]);
    useEffect(() => {
        const fetchClients = async () => {
            const result = await getClients();
            setClients(result.clients);
        };

        fetchClients();
    }, []);


    return (
        <>
            <h1 className={"pt-36 items-center text-center text-3xl font-bold"}>Client List</h1>

            <div className={"text-center flex flex-col gap-5 bg-red-400 w-full items-center pt-10"}>
                {clients.map((client, index) => (
                    <div key={index}>
                        <div className={"bg-pink-300 text-start pl-5 py-2 rounded-lg shadow-2xl"}>
                            <div>
                                <h1>Client {index + 1}</h1>
                            </div>
                            <div>
                                <RemoveButton id={client._id}></RemoveButton>
                                {/*_id is important*/}
                            </div>
                            <div>
                                Edit
                            </div>
                            <div className={"w-96"}>
                                <h2>Name: {client.name}</h2>
                                <p>Mobile: {client.mobile}</p>
                                <p>Address: {client.address}</p>
                                <p>Serial: {client.serialNo}</p>
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </>
    )
}