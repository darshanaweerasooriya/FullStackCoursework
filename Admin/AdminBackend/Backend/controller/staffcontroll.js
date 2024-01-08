const asyncHandler = require('express-async-handler');
const staff = require('../models/staff');

const register = asyncHandler(async(req,res) =>{
    const{StaffID,StaffName,JobRole,Password,TeleNumber,NICNumber,DateofBirth} = req.body;

    try {
        // Check all the fields are complete
        if(!StaffID || !StaffName || !JobRole || !Password || !TeleNumber || !NICNumber || !DateofBirth ){
            res.status(400)
            throw new Error('Please enter all fields');
        }

        const userExists = await staff.findOne({NICNumber});

        if(userExists){
            res.status(400);
            throw new Error('This user is already exists');
        }

        // Check if the phone number is valid or not
        const validMobileNumber = /^\+[1-9]\d{1,14}$/.test(TeleNumber);
        if(!validMobileNumber){
            return res.status(400).json({message:'Invalid mobile number'});
        }

        //Hash the password
        // const hashPassword = await bcrypt.hash(password,10);

        const Staff = new staff({
            StaffID,
            StaffName,
            JobRole,
            Password,
            TeleNumber,
            NICNumber,
            DateofBirth,
           

            
        })

        await Staff.save();
        res.status(201).json({message:'User registered succefully'});
    } catch (error) {
        console.error('Error during register:',error);
        res.status(500).json({message:'Failed to register user'});
    }
})


// Update member
const updatestaff = asyncHandler(async(req,res) =>{
    const nic = req.params.nic;
    const {name,gender,birthday,email,mobile} = req.body;

   try {
    const updateStaff = await staff.findOneAndUpdate({NICNumber},{StaffID,StaffName,JobRole,TeleNumber,mobile},{new:true});

        if(!updateStaff){
            return res.status(404).json({error:"User not found"});
        }

        res.status(200).json(updateStaff);
   } catch (error) {
     console.error('Failed to update user data:',error);
     res.status(500).json({error:'Failed to update users data'});
   }
});

// Delete user
const deletestaff = asyncHandler(async(req,res) => {
    const nic = req.params.nic;

    try {
        const deleteUser = await staff.findOneAndDelete({NICNumber});
        if(!deleteUser){
            res.status(404).json({error:'Can not find this user'});
        }

        res.status(200).json({message:'User data deleted successfully'});
    } catch (error) {
        console.log('Failed to delete users data',error);
        res.status(500).json({error:'Failed to delete users data'});
    }
})

const getstaff = asyncHandler(async(req,res) =>{
    try {
        const getStaff = await Users.find();
        res.status(200).json(getstaff);
    } catch (error) {
        console.log('Failed to fetch the data');
        res.status(500).json({error:'Failed to fetch data'});
    }
})
module.exports={register, updatestaff, deletestaff,getstaff}