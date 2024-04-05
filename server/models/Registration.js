const mongoose=require("mongoose")
const validator=require("validator");
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')

const userRegistrationschema=new mongoose.Schema({
    Name:{
        type:String,
        required:true,
        trim:true
     },
     Email:{
       type:String,
       required:true,
       unique:[true,"enter valid email"],
       validator(value){
           if(!validator.isEmail(value)){
               throw new Error("invalid email")
           }
       }
   
     },
     Password:{
       type:String,
       required:true
   
     },
     Confirm_Password:{
       type:String,
       required:true
     },
     tokens:[{
       token:{
           type:String,
           required:true,
       }
   }],
   is_verified:{
       type:Number
   }
   
})

userRegistrationschema.methods.generateAuthToken=async function(){
  try{
    const token=jwt.sign({_id:this._id.toString()},"mynameisprincekumarsingh")
    this.tokens=this.tokens.concat({token:token})
    await this.save();
    return token;

  }
  catch(err){
    console.log(err)
  }
}
userRegistrationschema.pre('save', async function (next) {
    if (this.isModified('Password') || this.isNew) {
      // Hash the password only if it's modified or it's a new record
      
      this.Password = await bcrypt.hash(this.Password, 10);
      this.Confirm_Password=await bcrypt.hash(this.Confirm_Password,10);
    //   console.log(${this.Password});

    //   this.Confirm_Password=undefined;
    }
    next();
  });

const newusers=new mongoose.model("newusers",userRegistrationschema);
module.exports=newusers;