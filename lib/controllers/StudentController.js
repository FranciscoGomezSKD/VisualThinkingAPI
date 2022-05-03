const StudentService= require("../services/StudentService");
const Reader = require("../utils/Reader");
const file ="./data/visualpartners.json";

class StudentController {
    static getAllStudents(){
        const students = Reader.readJsonFile(file);
        return StudentService.getAllStudents(students);
    }
    static getMailWithCertification(){
        const students = Reader.readJsonFile(file);
        return StudentService.getMailWithCertification(students);
    }

    static getStudentsByCredits(credits){
        const students = Reader.readJsonFile(file);
        return StudentService.getStudentsByCredits(students,credits);
    }
}
  
module.exports = StudentController;