import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  images  = [
    {img: "/assets/images/slider.png"},
    {img: "/assets/images/slider1.png"},
    {img: "/assets/images/slider2.png"},
    {img: "/assets/images/slider1.png"}
  ];
  slideConfig = {  
    "slidesToShow": 1,  
    "slidesToScroll": 1,  
    "dots": true,  
    "infinite": true,
    "autoplay":true,
    "arrows":true  
  };  
  
}
