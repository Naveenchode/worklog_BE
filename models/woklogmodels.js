const mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost:27017/library').then(()=> console.log("DB connection successful!!"));
//var dbUrl ='mongodb+srv://Naveen:Naveen965@cluster0.vqrt0h2.mongodb.net/bls?retryWrites=true&w=majority'
mongoose.connect('mongodb+srv://naveen:Naveen965@worklog.itmcaie.mongodb.net/?retryWrites=true&w=majority').then(()=> console.log("DB connection successful!!"));

const userSchema =new mongoose.Schema(
    {
        userid:{
            type:String,
            unique:true,
            required:true
        },
        name:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        },
        userrole:{
            type:String,
        },
        gender:{
            type:String,
        },
        email:{
            type:String,
        },
        mobilenumber:{
            type:Number,
        },
        city:{
            type:String,
        }
    },{
        timestamps:{
            createdAt:true,
            updatedAt:true,
        }
    }
);

const userModel = mongoose.model('users',userSchema);

const user = [
    {
        userid:'UI-1',
        name:'Maria',
        password:'maria123',
        gender:'F',
        email:'maria@gmail.com',
        mobilenumber:9876543201,
        city:'Banglore'
    },
    {
        userid:'UI-2',
        name:'Ravi',
        password:'Ravi123',
        gender:'M',
        email:'ravi@gmail.com',
        mobilenumber:7896543201,
        city:'Banglore'
    }
];

 (async () =>{
     const deletecount = await userModel.deleteMany({});
     if(deletecount){
         console.log('user collection removed');
         const data = await userModel.insertMany(user);
         if(data){
             console.log("user collection created");
         }
     }
 })();

 const projectSchema =new mongoose.Schema(
    {
        userid:{
            type:String,
        },
        projectId:{
            type:String,
        },
        name:{
            type:String,
        },
        logs:[
            {
                date:{
                    type:String,
                },
                workers:{
                    type:Number,
                },
                pay:{
                    type:Number,
                },
                comments:{
                    type:String,
                }

            }
        ]

    }
 );

 const projectModel = mongoose.model('projects',projectSchema);

 const proj = [
    {
        userid:'UI-1',
        projectId:'pr-1',
        name:'Project-1',
        logs:[
            {
                date:'09/06/2000',
                workers:5,
                pay:2000,
                comments:"no"
            },
            {
                date:'10/06/2000',
                workers:4,
                pay:2000,
                comments:"2"
            }
        ]
    },
    {
        userid:'UI-1',
        projectId:'pr-2',
        name:'Project-2',
        logs:[
            {
                date:'09/07/2000',
                workers:2,
                pay:2000,
                comments:"no"
            },
            {
                date:'10/07/2000',
                workers:1,
                pay:2000,
                comments:"2"
            }
        ]
    }
];

(async () =>{
    const deletecount = await projectModel.deleteMany({});
    if(deletecount){
        console.log('projects collection removed');
        const data = await projectModel.insertMany(proj);
        if(data){
            console.log("projects collection created");
        }
    }
})();

 module.exports = {userModel,projectModel}