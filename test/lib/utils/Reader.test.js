const Reader = require("../../../lib/utils/Reader");

describe("Pruebas de la clase Reader", () => {
    test("1) Leer lista de estudiantes", () => {
        const students =Reader.readJsonFile("./data/visualpartners.json");
        expect(students.length).toBe(51);
    });
});