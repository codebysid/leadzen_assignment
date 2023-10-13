const express=require('express')
const cors=require('cors')

const app=express()
const PORT=8000

app.use(express.json())
app.use(cors())

app.get("/users",async(req,res)=>{
    try{
        const response=await fetch("https://jsonplaceholder.typicode.com/users")
        const data=await response.json()
        if (!data) return res.json({err:"No Users Available"})
        return res.json({users:data})
    }catch(e){
        console.log(`Error is ${e}`)
    }
    return res.json({err:"No Users Available"})
})

app.listen(PORT,()=>{
    console.log(`Express is on ${PORT}`)
})