import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }
  

  ngOnInit() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.handleFragment();
      });

  }

  private handleFragment(): void {
    const fragment = this.getCurrentFragment();
    if (fragment) {
      this.scrollToSection(fragment);
    }
  }

  private getCurrentFragment(): string {
    const urlTree = this.router.parseUrl(this.router.url);
    return urlTree.fragment || '';
  }

  private scrollToSection(fragment: string): void {
    const element = document.getElementById(fragment);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'nearest',
      });
    }
  }
}
