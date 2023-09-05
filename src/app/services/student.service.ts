import { Estudantes } from './../models/student';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  getStudents():Observable<Estudantes[]>{
    return this.http.get<Estudantes[]>(`${environment.baseUrl}/students`);
  }

  getStudentById(id:string):Observable<Estudantes>{
    return this.http.get<Estudantes>(`${environment.baseUrl}/students/${id}`);
  }
}
