import mongoose from "mongoose"
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        //console.log('MongoDB Connected...');
    } catch (err) {
        throw new Error("Connection failed!")
        //console.error(err.message);
        // make the process fail
        //process.exit(1);
    }
}

export default connect