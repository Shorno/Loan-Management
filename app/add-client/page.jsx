"use client"
import {Button, Input} from "@nextui-org/react";

import {useRouter} from "next/navigation";
import {useState} from "react";
import toast from "react-hot-toast";

export default function AddClient() {
    const [client, setClient] = useState({name: "", mobile: "", address: "", serialNo: ""});
    const [clients, setClients] = useState([]);
    const router = useRouter();


    const handleChange = (e) => {
        setClient({...client, [e.target.name]: e.target.value});
    };

    const handleCreate = async (e) => {
        e.preventDefault();
        if (!client.name || !client.mobile || !client.address || !client.serialNo) {
            toast.error("All fields must be filled");
            return;
        }


        setClients([...clients, client]);
        setClient({name: "", mobile: "", address: "", serialNo: ""});

        try {
            const res = await fetch("api/clients", {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    name: client.name,
                    mobile: client.mobile,
                    address: client.address,
                    serialNo: client.serialNo
                })
            });
            if (res.ok) {
                toast.success("New client created successfully ")
                //router.push("/")
            } else {
                throw new Error("Failed to create new Client")
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>

            <div className={"pt-36 text-center justify-center"}>
                <h1>Client Form</h1>
            </div>
            <div className={"flex flex-col items-center pt-20 "}>
                <form className={"flex max-w-md flex-col flex-wrap md:flex-nowrap gap-4"}>
                    <Input
                        name="name"
                        label="Name"
                        placeholder="Enter Client's Name:"
                        variant="bordered"
                        autoComplete={"off"}
                        value={client.name}
                        onChange={handleChange}
                    />
                    <Input
                        name="mobile"
                        label="Mobile"
                        placeholder="Client's Mobile:"
                        type="number"
                        variant="bordered"
                        autoComplete={"off"}
                        value={client.mobile}
                        onChange={handleChange}
                    />
                    <Input
                        name="address"
                        label="Address"
                        placeholder="Client's Address:"
                        type="text"
                        variant="bordered"
                        autoComplete={"off"}
                        value={client.address}
                        onChange={handleChange}
                    />
                    <Input
                        name="serialNo"
                        label="Serial No:"
                        placeholder="Client's Serial:"
                        type="number"
                        variant="bordered"
                        value={client.serialNo}
                        onChange={handleChange}
                    />
                    <Button onClick={handleCreate}>Create Client</Button>
                </form>
            </div>

            <div className={"p-10 text-center"}>
                <h1>Client List</h1>
                {clients.map((client, index) => (
                    <div key={index}>
                        <h2>Name: {client.name}</h2>
                        <p>Mobile: {client.mobile}</p>
                        <p>Address: {client.address}</p>
                        <p>Serial: {client.serialNo}</p>
                    </div>
                ))}
            </div>


        </>
    )
}