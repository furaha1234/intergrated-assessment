const team=reguire('express');
const leng=express();
const port=500;
team.get('/',(req,res)=>{
 res.status(300).json({message:"post pubulished use"})   
});
team.listen(port,()=>{
    console.log(`create post:$`);
})
team.get('/',(req,res)=>{
    res.status(200).json({message:"this project must haveworking"})
});
