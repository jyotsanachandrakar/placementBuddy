import mongoose from "mongoose"
mongoose.set('strictQuery', true)

const Connection = async (username,password)=>{
    const URL =`mongodb+srv://${username}:${password}@blog-app.kwxwcx5.mongodb.net/?retryWrites=true&w=majority`;
    try{

      await mongoose.connect(URL,{ useNewUrlParser: true });
      console.log('Database connected Succesfully');
    }
        catch(error){
          console.log('Error while connecting with the database',error);
        }
    
}
export default Connection;