import mongoose, {Schema} from "mongoose";


const clientSchema = new Schema(
    {
        name: String,
        mobile: Number,
        address: String,
        serialNo: Number,
    },
    {
        timestamps: true,
    }
);

const Client = mongoose.models.Client ||mongoose.model("Client", clientSchema)

export default Client;