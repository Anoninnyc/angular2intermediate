import {Component} from 'angular2/core'
import {CourseService} from './course.service'
import {AutoGrow} from  './auto-grow.directive'

@Component({
	selector: 'courses',
	template: `
	<h2>Courses</h2>
	{{title}}
	<input type="text" autoGrow>
	<ul>
		<li *ngFor="#course of courses">
		{{course}}
		</li>

	</ul>
	`,
	providers: [CourseService],
	directives: [AutoGrow]
})

export class CoursesComponent {

	constructor(courseService: CourseService){
	  this.courses = courseService.getCourses();
	}

   title = "The title of the courses page";
   courses


 }