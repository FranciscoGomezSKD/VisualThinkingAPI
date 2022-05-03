class StudentService {
    static getAllStudents(students){
        return students;
    }
    static getMailWithCertification(students){
        const studentsCerticated=   students.filter((student) => student.haveCertification === true);
        return  studentsCerticated.map((student) => student.email);
    }
    static getStudentsByCredits(students,credits){
        return  students.filter((student) => student.credits>credits);
    }
}
  
module.exports = StudentService;