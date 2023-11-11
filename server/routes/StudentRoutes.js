const express = require('express');
const studentController= require('../controller/StudentController');
const router = express.Router();
 


//api/allstudents
router.get('/allstudents',studentController.allStudents);
//api/createstudent
router.post('/createstudent', studentController.createStudent)
//api/singlestudent/:id
router.get('/singlestudent/:id', studentController.singleStudent);
//api/deletestudent/:id
router.delete('/deletestudent/:id', studentController.deleteStudent);
//api/updatestudent/:id
router.put('/updatestudent/:id' , studentController.updateStudent)


module.exports=router;