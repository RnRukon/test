const express=require("express")
const app=express()


app.use( "/",async (req,res)=>{
   try {
  await  res.status(200).json({
        fname:"rukon",
        lname:"uddin"
    })
   }catch (e) {
       console.log(e)
   }
})

const PORT=3000;
app.listen(PORT, () => {
  try {
      console.log(`Server is running on http://localhost:${PORT}`);
  }catch (err){
      console.log(err)
  }
});