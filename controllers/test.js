const {userModel}=require('../models/test');


exports.userLogin = async (req,res)=>{
    try{
        const userid = (req.body.UserId);
        const password = req.body.Password;
        const log = await userModel.find({$and:[{userid:userid},{password:password}]});
        if(log.length>0){
            res.cookie('UserId',userid);
            console.log(userid)
            res.status(200).json({
                "status":"ok",
                "message": userid

            })
        }else{
            console.log("failed")
            res.status(400).json({
                "status":"failed",
                "message":"Incorrect UserId or password"
            })
        }
    }catch(err){
        res.status(400).json(
            {
                message:err,
            }
        )
    }
}

exports.users = async (req,res)=>{
    try{
        const log = await userModel.find();
        if(log.length>0){
            res.send(log)
        }else{
            res.send("no users")
        }


    }catch(err){
        res.status(400).json(
            {
                message:err,
            }
        )
    }
}