// const asyncHandler = require('express-async-handler')
// const Librarian = require('../models/lib');

// const register = asyncHandler(async(req,res) =>{
//     const{MemberID,Name,Password,WorkingDays,TeleNumber,DateofBith,Salary} = req.body;

//     try{
//         if(!MemberID || !Name || !Password || !WorkingDays || !TeleNumber || !DateofBith || !Salary ){
//             res.status(400);
//             throw new Error('Please enter all fields');
//         }

//         const libExists = await Librarian.findOne({MemberID});

//         if(libExists){
//             res.status(400);
//             throw new Error('This Librarian is already Exists');
//         }
//         const validenumber = /^\+[1+9]\d{1,14}$/.test(TeleNumber);
//         if(!validenumber){
//             return res.status(400).jason({message:'Invalide Telephone Number'});

//         }

//         const newlib = new Librarian({
//             MemberID,
//             Name,
//             Password,
//             WorkingDays,
//             TeleNumber,
//             DateofBith,
//             Salary,

//         });

//         await newlib.save();
//         res.status(201).jason({message:'Library  registered succefully'});
//     } catch (error){
//         console.log('Failed to insert data',error);
//         console.error(500).jason({message:'Failed to resgister user'});
//     }
// })
// module.exports={register}