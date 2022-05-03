const StudentController = require("../../../lib/controllers/StudentController");

describe("Pruebas de la clase StudentController", () => {
    test("1) Consultar todos los estudiantes", () => {
        const students =StudentController.getAllStudents();
        expect(students.length).toBe(51);
    });
    test("2) Consultar los emails de todos los estudiantes que tengan certificación", () => {
        const students =StudentController.getMailWithCertification();
        expect(students[0]).toBe("Todd@visualpartnership.xyz");
        expect(students.length).toBe(29);
    });
    test("3) Consultar todos los estudiantes que tengan credits mayor a 500.", () => {
        const students =StudentController.getStudentsByCredits(500);
        expect(students.length).toBe(27);
    });
});