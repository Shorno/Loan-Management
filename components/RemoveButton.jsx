"use client"

import {useRouter} from "next/navigation";
import toast from "react-hot-toast";
import CustomModal from "/components/CustomModal";
import {useDisclosure} from "@nextui-org/react";

export default function RemoveButton({id, setClients, getClients}) {
    const router = useRouter();
    const {isOpen, onClose} = useDisclosure();

    const removeClient = async () => {

            const res = await fetch(`/api/clients?id=${id}`, {
                method: "DELETE",

            });
            if (res.ok) {
                toast.success('Client deleted successfully ❌');

                // Fetch the updated client list here and update `clients` with the fetched data
                const updatedClients = await getClients();
                setClients(updatedClients.clients);
                router.push("/client-list")
            }

    }
    return (
        <>
            <CustomModal isOpen={isOpen} onClose={onClose} onConfirm={removeClient} />
        </>

    )
}

