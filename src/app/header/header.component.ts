import { Component} from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],

})
export class HeaderComponent {
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