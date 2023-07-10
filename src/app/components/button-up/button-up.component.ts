import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-up',
  templateUrl: './button-up.component.html',
  styleUrls: ['./button-up.component.css']
})
export class ButtonUpComponent implements OnInit {
  showButton: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    this.showButton = (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) > 500;
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}

