const StudentService = require("../../../lib/services/StudentService");
const studentsData = [{
    id: "6264d5d89f1df827eb84bb23",
    name: "Warren",
    email: "Todd@visualpartnership.xyz",
    credits: 408,
    enrollments: [
      "Visual Thinking Intermedio",
      "Visual Thinking Avanzado"
    ],
    previousCourses: 1,
    haveCertification: true
  },
  {
    id: "6264d5d85cf81c496446b67f",
    name: "Lucinda",
    email: "Sexton@visualpartnership.xyz",
    credits: 677,
    enrollments: [
      "Visual Thinking Avanzado"
    ],
    previousCourses: 6,
    haveCertification: false
  }

]

describe("Pruebas de la clase StudentService", () => {
    test("1) Consultar todos los estudiantes", () => {
        const students =StudentService.getAllStudents(studentsData);
        expect(students.length).toBe(2);
    });
    test("2) Consultar los emails de todos los estudiantes que tengan certificación", () => {
        const students =StudentService.getMailWithCertification(studentsData);
        expect(students[0]).toBe("Todd@visualpartnership.xyz");
        expect(students.length).toBe(1);
    });
    test("3) Consultar todos los estudiantes que tengan credits mayor a 500.", () => {
        const students =StudentService.getStudentsByCredits(studentsData,500);
        expect(students.length).toBe(1);
    });
});