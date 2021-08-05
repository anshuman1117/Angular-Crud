import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  courses:any;
  courrentCourse=null;
  currentIndex=-1;
  title="";

  constructor(private courseService:CourseService) { }

  ngOnInit(): void {
    this.retriveCourses();
  }


  retriveCourses():void{
    this.courseService.getAllCourses()
    .subscribe(data=>{this.courses=data;
      console.log(data);
    },error=>{console.log(error);}
    )
  }

  removeCourse(id:number){

    this.courseService.deleteCourseById(id).subscribe(
      response => {console.log(response)},
      error=>{console.log(error);}
    )

  }


  editCourse(id:number){

    this.courseService.updateCourse(id,this.retriveCourses).subscribe(
      response => {console.log(response)},
      error=>{console.log(error);}
    )

  }

}
