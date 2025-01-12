const mongoose =  require('mongoose');

const uri = "mongodb+srv://avadhut:VlmIumuHuocT3qvT@cluster0.9cc26.mongodb.net/shop?retryWrites=true&w=majority&appName=Cluster0";

const connect = async () => {
    try {
        await mongoose.connect(uri);
        console.log("Connected To MongoDB");
        
    } catch (error) {
        console.log(error);
        
    }
}

connect();