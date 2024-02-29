import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent {
  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const sections = document.querySelectorAll('.jobText');
    const windowHeight = window.innerHeight;

    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop < windowHeight) {
        section.classList.add('visible');
      } else {
        section.classList.remove('visible');
      }
    });
  }
}
