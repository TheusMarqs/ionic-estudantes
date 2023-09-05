import { StudentService } from './../../services/student.service';
import { Estudantes } from './../../models/student';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.page.html',
  styleUrls: ['./students.page.scss'],
})
export class StudentsPage implements OnInit {

  students:Estudantes[] = []
  constructor(private service: StudentService) { }

  ngOnInit() {
    this.loadStudents();
  }

  loadStudents() {
    this.service.getStudents().subscribe(
      {
        next: students => this.students=students
      }
    );
  }
}
