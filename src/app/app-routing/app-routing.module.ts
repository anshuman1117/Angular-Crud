import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddCourseComponent } from '../add-course/add-course.component';
import { CourseListComponent } from '../course-list/course-list.component';
import { EditCourseComponent } from '../edit-course/edit-course.component';

const routes : Routes = [
  {
    path : "componentAdd",
    component : AddCourseComponent
  },
  {
    path : "componentHome",
    component : CourseListComponent
  },
  {
    path : "componentEdit",
    component : EditCourseComponent
  }

]



@NgModule({
  imports: [
    RouterModule.forRoot(routes)
    ],
    exports: [
    RouterModule
    ],
    declarations: []
})

export class AppRoutingModule { }
