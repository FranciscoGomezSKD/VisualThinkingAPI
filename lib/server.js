const StudentController = require("./controllers/StudentController");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({message: "Student Visual Thinking Api welcome!"});
});


app.get("/v1/students", (request, response) => {
  
    const allStudents= StudentController.getAllStudents();
    response.json({students: allStudents});
});

app.get("/v1/studentsCertificated", (request, response) => {
    const mailCertificated= StudentController.getMailWithCertification();
    response.json({studentsCertificated: mailCertificated});
});


app.get("/v1/studentsWithCredits", (request, response) => {
    const students= StudentController.getStudentsByCredits(500);
    response.json({students: students});
});

app.listen(port, () => {
    console.log(`Student Visual Thinking  API in localhost:${port}`);
});