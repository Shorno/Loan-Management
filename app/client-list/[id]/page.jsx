
export default function ClientInfo({params}) {
    return (
        <>
            <div className={"pt-36"}>
                <div className={"flex-col flex gap-10 items-center"}>
                    <h1>Client info page</h1>
                    <p>Client no {params.id}</p>
                </div>
            </div>

        </>
    )
}