const mongoose = require('mongoose');

const Dbconnection = async() =>{
    try{
        const MONGODB_URL =`mongodb+srv://darshanaweerasooriya11:Elakiri@cluster0.mpyxvll.mongodb.net/library_db?retryWrites=true&w=majority`
        const con = await mongoose.connect(MONGODB_URL,{
          
        });
         // Check if the connection is successful
         if (con.connection.readyState === 1) {
            console.log('Connected to MongoDB');
        } else {
            console.log('Failed to connect to MongoDB');
            process.exit();
        }

    }
    catch(error)
    {
        console.log(`Error:${error}`);
        process.exit();
    }
}

module.exports = Dbconnection;