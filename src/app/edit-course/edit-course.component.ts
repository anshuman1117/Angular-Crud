import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {


  course={
    "id" :0,
    "title":''
  };

  constructor(private courseService:CourseService) { }

  ngOnInit(): void {
  }

  submitted=false;

  editCourse(){
 
    console.log(this.course.id + " " + this.course.title)
    const data={
      "id":this.course.id,
      "title":this.course.title
    };

    this.courseService.updateCourse(this.course.id,data).subscribe(
      response=>{
        console.log(response);
        this.submitted=true;
      },
      error=>{
        console.log(error);
        this.submitted=false;
      }
    );


  }

}
