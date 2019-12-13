import { Student } from './Students and Teachers/student';
import { WebClass } from "./Classes/webClass";
import { MobileClass } from "./Classes/mobileClass";
import { Teacher } from "./Students and Teachers/teacher";

// INSTRUTORES
const soter = new Teacher("Soter Padua", "soter@hotmail.com", "20/10/1995", ["Javascript", "Front-end", "Debugging"]);

const darvas = new Teacher("Pedro Darvas", "darvas@hotmail.com", "10/01/1993", ["Fullstack", "React", "Redux", "Falar Sueco"]);

const paula = new Teacher("Paula Arantes", "paula@outlook.com", "15/07/1995", ["Python", "Machine Learning", "Frontend", "Javascript"]);

const goli = new Teacher("João Golias", "goli@gmail.com", "27/04/1995", ["Kotlin", "Java", "Back-end", "Typescript"]);


// ALUNOS DA F4 - NEWTON
const davi = new Student("Davi Duarte", "davi_duarte@gmail.com", "04/01/2001", "Newton");

const leonardo = new Student("Leonardo Nogueira", "leo@hotmail.com", "18/05/1995", "Newton");

const pedro = new Student("Pedro Severo", "pedro@gmail.com", "17/10/1994", "Newton");

const brunna = new Student("Brunna Rocha", "brunna@gmail.com", "15/07/1995", "Newton");

const amanda = new Student("Amanda Rangel", "amanda@outlook.com", "12/08/1993", "Newton");


// ALUNOS DA F4 - BOUMAN
const eduardo = new Student("Eduardo Mendes", "edu@hotmail.com", "12/01/1991", "Bouman");

const igor = new Student("Igor Alves", "igao@gmail.com", "10/04/1998", "Bouman");

const eloisa = new Student("Eloísa Castro", "eloisa@outlook.com", "05/08/1996", "Bouman");

soter.createNewUser();
darvas.createNewUser();
paula.createNewUser();
goli.createNewUser();
davi.createNewUser();
leonardo.createNewUser();
pedro.createNewUser();
brunna.createNewUser();
amanda.createNewUser();
eduardo.createNewUser();
igor.createNewUser();
eloisa.createNewUser();

const newton = new WebClass("01/09/2019", "20/03/2020", [soter, darvas, paula, goli], [davi, leonardo, pedro, brunna, amanda], "Newton");

newton.generateNewCourse();

const bouman = new WebClass("15/10/2019", "01/04/2020", [goli, paula], [eduardo, igor, eloisa], "Bouman");

bouman.generateNewCourse();

const firstMobileClass = new MobileClass("01/02/2020", "06/06/2020", [soter, darvas, paula, goli], [davi, eduardo, amanda, eloisa, pedro]);

firstMobileClass.generateNewCourse();