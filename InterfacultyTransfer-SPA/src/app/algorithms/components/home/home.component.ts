import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isScrollInvisible = false;
  isCollapsed = false;

  @HostListener('window:scroll') // for window scroll events
  onScroll(): void {
    let verticalOffset = window.pageYOffset
      || document.documentElement.scrollTop
      || document.body.scrollTop || 0;

    const screenHeight = window.innerHeight;

    if (verticalOffset > 66) {
      verticalOffset = 66;
    }

    document.documentElement.style.setProperty('--vertical-offset', `-${verticalOffset}px`);
    document.documentElement.style.setProperty('--height', `${screenHeight - 66 + verticalOffset}px`);
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
