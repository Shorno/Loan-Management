"use client"


import {useRouter} from "next/navigation";

export default function RemoveButton({id}) {
    const router = useRouter();
    const removeClient = async () => {

        const confirmed = confirm("Are you sure?");

        if (confirmed) {
            const res = await fetch(`/api/clients?id=${id}`, {
                method: "DELETE",
            });
            if (res.ok) {
               router.push("/client-list")
            }
        }

    }
    return (

        <button onClick={removeClient} className={"bg-red-400"}>Delete</button>

    )
}