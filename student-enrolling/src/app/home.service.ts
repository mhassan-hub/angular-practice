import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  students = [
    {id: 101, name: "Musk", description: "Musk Details", email: "musk@xyz"},
    {id: 102, name: "Sara", description: "Sara Details", email: "sara@xyz"},
    {id: 103, name: "Khalid", description: "Khalid Details", email: "khalid@xyz"},
    {id: 104, name: "Bezos", description: "Bezos Details", email: "bezos@xyz"},
  ]
  constructor() {
  }
  /**
   * getStudents
   */
  public getStudents(): Array<{id: number, name: string, description: string, email: string}>{
    return this.students;
  }

  public createStudent(student: {id: number, name: string, description: string, email: string}) {
    this.students.push(student)
  }
}
