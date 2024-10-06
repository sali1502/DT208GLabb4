import { Component } from '@angular/core';
import { Course } from '../models/course';
import { CoursesService } from '../services/courses.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {
  // Properties
  courses: Course[] = [];
  filteredCourses: Course[] = [];
  inputValue: string = "";

  constructor(private coursesService: CoursesService) { }

  ngOnInit() {
    this.coursesService.getCourses().subscribe((courses) => {
      this.courses = courses;
      this.filteredCourses = courses;
    });
  }

  // Metod för filtrering
  filterCourses(): void {
    this.filteredCourses = this.courses.filter((course) =>
      course.coursename.toLowerCase().includes(this.inputValue.toLowerCase()) ||
      course.code.toLowerCase().includes(this.inputValue.toLowerCase())
    );
  }
}
