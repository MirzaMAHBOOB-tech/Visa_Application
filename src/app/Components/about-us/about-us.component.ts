import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUSComponent implements OnInit {
  counts = {
    count1: 0,
    count2: 0,
    count3: 0
  };

    hover = false;
  hover2 = false;
  hover3 = false;


  ngOnInit(): void {
    this.animateCount('count1', 3, 100);
    this.animateCount('count2', 800, 5, true);
    this.animateCount('count3', 100, 50);
  }

  animateCount(
    property: keyof typeof this.counts,
    target: number,
    speed: number,
    divideBy1000 = false
  ) {
    const interval = setInterval(() => {
      if (this.counts[property] < target) {
        this.counts[property]++;
      } else {
        clearInterval(interval);
        if (divideBy1000) {
          this.counts[property] = +(target / 1000).toFixed(1); // e.g., 20.7
        }
      }
    }, speed);
  }
}
