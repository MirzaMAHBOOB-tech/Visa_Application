import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {
   videos = [
  { src: 'assets/videos/francev.mp4', route: '/france' },
  { src: 'assets/videos/germany.mp4', route: '/germany' },
  { src: 'assets/videos/italy.mp4', route: '/italy' },
  { src: 'assets/videos/australia.mp4', route: '/australia' },
  { src: 'assets/videos/greece.mp4', route: '/greece' },
  { src: 'assets/videos/netherland.mp4', route: '/netherlands' },
  { src: 'assets/videos/switzerland.mp4', route: '/switzerland' },
  { src: 'assets/videos/usa.mp4', route: '/usa' },
  { src: 'assets/videos/canada.mp4', route: '/canada' }
];


  imageList = [
  'assets/flags/f1.png',
  'assets/flags/f2.png',
  'assets/flags/f3.png',
  'assets/flags/f4.png',
  'assets/flags/f5.png',
  'assets/flags/f6.png',
  'assets/flags/f7.png',
  'assets/flags/f8.jpg',
  'assets/flags/f9.png',
  'assets/flags/f10.png',
  'assets/flags/f11.png',
  'assets/flags/f12.jpg',
  'assets/flags/f13.webp',
  'assets/flags/f14.jpg',
  'assets/flags/japan.png',
  'assets/flags/morocco.png',
  'assets/flags/newzeeland.png',
  'assets/flags/sodia.jpg',
  // add more if needed
];
 Frontvideos: string[] = [
    'assets/videos/HOMEvideo1.mp4',
    'assets/videos/HOMEvideo2.mp4',
    'assets/videos/HOMEvideo3.mp4'
  ];
  currentIndex = 0;
intervalId: any;

ngOnInit(): void {
  this.intervalId = setInterval(() => {
    this.currentIndex = (this.currentIndex + 1) % this.Frontvideos.length;
  }, 5000);
}

ngOnDestroy(): void {
  clearInterval(this.intervalId);
}
}
