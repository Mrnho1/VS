import { Component } from '@angular/core';
import { fadeInAnimation } from './fade-in.animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fadeInAnimation]
})
export class AppComponent {
  title = 'projeto';

  public showImage: boolean = true;

  onAnimationEnd() {
    this.showImage = false;
  }
}
