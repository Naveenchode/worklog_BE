const {userModel,projectModel} = require('../models/woklogmodels');

exports.getprojects = async (req,res)=>{
    try{
        const log = await projectModel.find();
        if(log.length>0){
            res.send(log)
        }else{
            res.send("no projects")
        }


    }catch(err){
        res.status(400).json(
            {
                message:err,
            }
        )
    }
}

exports.getprojectdetails = async (req,res)=>{
    try{
        const log = await projectModel.find( {
            projectId:req.params.projectId
        },{
            _id:0,_v:0
        });
        if(log.length>0){
            res.send(log)
        }else{
            res.send("no projects")
        }


    }catch(err){
        res.status(400).json(
            {
                message:err,
            }
        )
    }
}

exports.addLog = async (req,res)=>{
    try{
        const log = await projectModel.updateOne( {
            projectId:req.params.projectId
           //projectId:'9'
        },{$push:{ logs:{
            date:req.body.date,
            workers:req.body.workers,
            pay:req.body.paid,
            comments:req.body.comments
        }

        }        });
        console.log(log)
        if(log.modifiedCount>0){
            res.send("ok")
        }else{
            res.send("fail")
        }


    }catch(err){
        res.status(400).json(
            {
                message:err,
            }
        )
    }
}
