import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  showNavigationArrows = false;
  showNavigationIndicators = false;
  showArrow = false;
  showIndicator = false;
  constructor() {}

  ngOnInit(): void {}

  showArrows() {
    this.showArrow = !this.showArrow;
  }
  showIndicators() {
    this.showIndicator = !this.showIndicator;
  }

  public carouselImages = [
    { img: '../../assets/images/photos/1.jpg', slide: '1' },
    { img: '../../assets/images/photos/2.jpg', slide: '2' },
    { img: '../../assets/images/photos/3.jpg', slide: '3' },
    { img: '../../assets/images/photos/4.jpg', slide: '4' },
    { img: '../../assets/images/photos/5.jpg', slide: '5' },
    { img: '../../assets/images/photos/6.jpg', slide: '6' },
    { img: '../../assets/images/photos/7.jpg', slide: '7' },
    { img: '../../assets/images/photos/8.jpg', slide: '8' },
  ];

  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;
  pauseOnFocus = true;

  @ViewChild('carousel', { static: true }) carousel!: NgbCarousel;

  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }

  onSlide(slideEvent: NgbSlideEvent) {
    if (this.unpauseOnArrow && slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)) {
      this.togglePaused();
    }
    if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
      this.togglePaused();
    }
  }

}
