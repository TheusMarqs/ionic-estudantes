import { StudentService } from './../../services/student.service';
import { Estudantes } from './../../models/student';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.page.html',
  styleUrls: ['./student-details.page.scss'],
})
export class StudentDetailsPage implements OnInit {

  student: Estudantes = {} as Estudantes;

  constructor( private route: ActivatedRoute,
               private service: StudentService
             ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if(id){
      this.service.getStudentById(id).subscribe(
       {
          next: student => this.student = student
        }
      )
    }
  }

}
