import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { Flower } from '../shared/flower';
import { FlowerService } from '../services/flower.service';
import { Promotion } from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';
import { Leader } from '../shared/leader';
import { LeaderService } from '../services/leader.service';
import { flyInOut,expand } from '../animations/app.animation';
import { trigger, state, transition, style, animate } from '@angular/animations'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
  },
  animations:[
    flyInOut(),
    expand(),
    trigger('fade',
    [ 
      state('void', style({ opacity : 0})),
      transition(':enter',[ animate(300)]),
      transition(':leave',[ animate(500)]),
    ])
  ]
})
export class HomeComponent implements OnInit {

  flower: Flower;
  flowerErrMess: string;
  promotion: Promotion;
  promErrMess: string;
  leader: Leader;
  leadErrMess: string;

  constructor(private flowerservice: FlowerService,
    private promotionservice: PromotionService,private leaderservice: LeaderService,
    @Inject('BaseURL') public baseURL) { }

  ngOnInit() {
    this.flowerservice.getFeaturedFlower().subscribe((flower) => this.flower = flower, errmess => this.flowerErrMess = <any>errmess);
    this.promotionservice.getFeaturedPromotion().subscribe((promotion) => this.promotion = promotion, errmess => this.promErrMess = <any>errmess);
    this.leaderservice.getFeaturedLeader().subscribe((leader) => this.leader = leader, errmess => this.leadErrMess = <any>errmess);
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
     if (window.pageYOffset > 550) {
       let element = document.getElementById('navbar');
       element.classList.add('sticky');
     } else {
      let element = document.getElementById('navbar');
        element.classList.remove('sticky'); 
     }
  }

}
