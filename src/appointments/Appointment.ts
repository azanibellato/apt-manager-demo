export class Appointment {
    id: number;
    studentName: string;
    teacherName: string;
    date: Date;
    notes: string = '';

    constructor(id:number, studentName: string, teacherName: string, date: Date, notes?: string){
        this.id = id;
        this.studentName = studentName;
        this.teacherName = teacherName;
        this.date = date;
        if (notes) this.notes = notes;
    }
}