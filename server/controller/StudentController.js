const Student = require('../models/StudentSchema');


//get all students
exports.allStudents = async (req,res,next)=>{
     try{
        const students = await Student.find();
        
        res.status(200).json({
            success:true,
            students
        })
        next();
     }catch(error){
        return next(error);
     }

    }

    //Get a single user
    exports.singleStudent = async (req,res, next) =>{
        try{
            const student = await Student.findById(req.params.id);
            res.status(200).json({
                success:true,
                student
            })
            next();
        }catch(error){
           return  next(error);
        }            
    }
   

    //create a new student
    exports.createStudent= async (req,res,next)=>{
        try{
            const student = await Student.create({
                firstName : req.body.firstName,
                lastName : req.body.lastName,
                bachelor : req.body.bachelor,           
            });
            
            res.status(201).json({
                success: true,
                student
            })
        }catch(error){
            next(error);
            console.log(error);
    
        }
    }


    //delete student
    exports.deleteStudent = async (req,res,next) =>{
            try{
                const student = await Student.findByIdAndDelete(req.params.id);
                res.status(200).json({
                    success:true,
                    student
                })
                next();
            }catch(error){
                next(error);
            }
    }


    //update student
    exports.updateStudent= async (req,res,next)=>{
        try{
            const student = await Student.findByIdAndUpdate(req.params.id , req.body, {new:true});
            res.status(200).json({
                student,
                success:true
            })
            next();

        }catch(error){
            next(error);
        }
    }