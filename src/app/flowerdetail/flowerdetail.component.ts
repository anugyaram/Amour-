import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Flower } from '../shared/flower';
import { FlowerService } from '../services/flower.service';
import { switchMap } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { visibility,flyInOut,expand } from '../animations/app.animation';

@Component({
  selector: 'app-flowerdetail',
  templateUrl: './flowerdetail.component.html',
  styleUrls: ['./flowerdetail.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
  },
  animations: [
    visibility(),
    flyInOut(),
    expand()
  ]
})


export class FlowerdetailComponent implements OnInit {

  autoTicks = false;
  disabled = false;
  invert = false;
  max = 5;
  min = 1;
  showTicks = false;
  step = 1;
  thumbLabel = true;
  value = 5;
  vertical = false;
  tickInterval = 1;

  getSliderTickInterval(): number | 'auto' {
    if (this.showTicks) {
      return this.autoTicks ? 'auto' : this.tickInterval;
    }

    return 0;
  }
  @ViewChild('cForm') commentFormDirective;
  flower: Flower;
  flowerIds: string[];
    prev: string;
    next: string;
    commentForm: FormGroup;
    comment: Comment;
    date: string;
    errMess: string;
    flowercopy: Flower;
    visibility = 'shown';


    formErrors={
      'author': '',
      'rating': '',
      'comment': '',
    }
  
    validationMessages={
      'author':{
        'required': 'Author Name is required',
        'minlength': 'Author Name must be atleast 2 characters long',
        'maxlength': 'Author Name should not exceed 25 characters in length'
      },
      'rating':{
      },
      'comment':{
        'required': 'Comment shouldd not be empty.'
      }
    }
  
    constructor(private flowerService: FlowerService,
                  private route: ActivatedRoute,
                  private location: Location,
                  private fb: FormBuilder, @Inject('BaseURL') public baseURL) {
     
    }
  
    ngOnInit(): void {
      this.flowerService.getFlowerIds()
          .subscribe((flowerIds)=> {
            this.flowerIds=flowerIds
          });
          this.route.params
          .pipe(switchMap((params: Params) => {
            this.visibility = 'hidden'; 
            return this.flowerService.getFlower(params['id']); 
          }))
          .subscribe((flower)=> {
              this.flower= flower; 
              this.flowercopy = flower;
              this.setPrevNext(this.flower.id);
              this.visibility = 'shown';
          }, 
          errmess => this.errMess = <any>errmess);
    }
  
    setPrevNext(flowerId: string){
      const index= this.flowerIds.indexOf(flowerId);
      this.prev= this.flowerIds[(this.flowerIds.length + index-1)%this.flowerIds.length];
      this.next= this.flowerIds[(this.flowerIds.length + index+1)%this.flowerIds.length];
    }
  
    goBack(): void {
      this.location.back();
    }
  
   
   
  
  
}
