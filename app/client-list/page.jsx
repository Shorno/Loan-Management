"use client"
import {useEffect, useState} from 'react';

import RemoveButton from "/components/RemoveButton";
import {Button} from "@nextui-org/react";


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

            <div className={"text-center flex flex-col gap-5  w-full items-center pt-10 pb-10"}>

                {clients.map((client, index) => (
                    <div key={index}>
                        <div className={"text-start pl-5 py-2 rounded-2xl bg-secondary-50"}>
                            <div className={"w-96"}>
                                <div className="text-xl font-bold"><h1>Client {index + 1}</h1></div>
                                <div className={"font-bold"}>
                                    <h2>{client.name}</h2>
                                    <p>{client.mobile}</p>
                                    <p>Serial: {client.serialNo}</p>
                                </div>

                            </div>
                        </div>
                        <div className={"pt-1"}>
                            <div className="flex gap-3">
                                <div className="">
                                    <RemoveButton id={client._id} setClients={setClients}
                                                  getClients={getClients}></RemoveButton>

                                </div>
                                <div className={""}>
                                    <Button variant={"bordered"} className={""}>Edit</Button>
                                </div>
                                <div className={"w-full"}>
                                    <Button color={"primary"} className={"w-full"}>Add Payment</Button>
                                </div>

                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </>
    )
}