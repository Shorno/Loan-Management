import {Button} from "@nextui-org/react";
import Link from "next/link";

export default function ClientsPage() {

    return (
        <>
            <div className={"flex flex-col items-center pt-36"}>
                <div className={"flex-col flex gap-10 items-center"}>
                    <Link href={"/add-client"}>
                        <p className={"bg-black text-white rounded-xl px-2 py-2 shadow-2xl hover:bg-gray-700 "}>Create new client</p>
                    </Link>
                    <Link href={"/client-list"}>
                        <p className={"bg-black text-white rounded-xl px-2 py-2 shadow-2xl hover:bg-gray-700 "}>View Clients</p>

                    </Link>
                </div>
            </div>
        </>
    )
}
