import connectMongoDB from "/libs/mongodb";
import {NextResponse} from "next/server";
import Client from "/models/client";

export async function POST(request) {
    try {
        const {name, mobile, address, serialNo} = await request.json();
        await connectMongoDB();
        const createdClient = await Client.create({name, mobile, address, serialNo});
        console.log(createdClient); // Log the created client
        return NextResponse.json({message: "Client created successfully"}, {status: 201});
    } catch (error) {
        console.error(error);
        return NextResponse.json({message: "An error occurred"}, {status: 500});
    }
}

export async function GET() {
    await connectMongoDB();
    const clients = await Client.find();
    return NextResponse.json({clients});
}

export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Client.findByIdAndDelete(id);
    return NextResponse.json({message: "Client deleted successfully"}, {status: 200});
}