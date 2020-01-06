import { Student } from './../Students and Teachers/student';
import { Teacher } from "../Students and Teachers/teacher";

export interface Class {
    startDate: string,
    endDate: string,
    teachers: Teacher[],
    students: Student[],
    id?: string

    // Como eu entendo que ao criar uma nova classe, já é
    // necessário passar todos os parâmetros citados acima,
    // eu deixei os parâmetros do método createNewClass como
    // opcional. Se não passar nenhum parâmetro, irá criar uma nova
    // classe com os dados já passados pelo construtor.
    generateNewCourse(
        startDate?: string,
        endDate?: string,
        teachers?: Teacher[],
        students?: Student[],
        id?: string,
    ): void
};