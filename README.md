# Visual Thinking API
Los requerimientos que Visual Partner-Ship nos pide son los siguientes: 

 - Habilitar un endpoint para consultar todos los estudiantes con todos sus campos.
 - Habilitar un endpoint para consultar los emails de todos los estudiantes que tengan certificación *haveCertification*.
 - Habilitar un endpoint para consultar todos los estudiantes que tengan credits mayor a 500.
  
# Diseño de componentes
Similar al ejercicio anterior, se utiliza la misma estructura o flujo en la programación.
La clase Server, se encarga de recibir las peticiones y procesarlas utilizando la clase StudentController. Esta a su vez, manda a llamar al control StudentService desde el cual se utiliza la utilidad Reader para obtener de la base de datos (en formato JSON), la informacion de los estudiantes.

```mermaid
flowchart TD
    A[Server] --> B[StudentController]
    B --> C[StudentService]
    C --> D[Reader]
```
Para cumplir los requerimientos se diseñaron 3 clases
```mermaid
 classDiagram
     class StudentController{
          +static getAllStudents()
          +static getMailWithCertification()
          +static getStudentsByCredits(credits)
      }
      class StudentService{
          +static getAllStudents(students)
          +static getMailWithCertification(students)
          +static getStudentsByCredits(students,credits)
      }
      class Reader{
          +static readJsonFile(file)
      }

```
## StudentController
- static getAllStudents() .- Obtiene la lista de todos los estudiantes.
- static getMailWithCertification() .- Obtiene la lista de correos de los estudiantes con certificacion (haveCertification).
- static getStudentsByCredits(credits) .- Obtiene la lista de estudiantes con creditos mayores a *credits*.
## StudentService
- static getAllStudents(students) .- Obtiene la lista de todos los estudiantes del arreglo de objeto *students*.
- staticgetMailWithCertification(students) .- Obtiene la lista de correos de los estudiantes con certificacion (haveCertification) del arreglo de objeto *students*.
- static getStudentsByCredits(students,credits) .- Obtiene la lista de estudiantes con creditos mayores a *credits* del arreglo de objeto *students*.
## Reader
- static readJsonFile .- Lee un archivo JSON y regresa los datos en un objeto para poder ser consultado.

# Dependencias
<ul>
  <li>JEST</li>
  <li>Eslint</li>
  <li>Express</li>
  <li>Apidoc</li>
</ul>

# End points
- */v1/students* : Lista la información completa de todos los estudiantes.
- */v1/studentsCertificated* : Lista los correos de los alumnos certificados.
- */v1/studentsWithCredits* : Lista la información completa de los alumnos que tengan mas de 500 créditos.
