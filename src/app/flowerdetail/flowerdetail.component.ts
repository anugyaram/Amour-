import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Flower } from '../shared/flower';
import { FlowerService } from '../services/flower.service';
import { switchMap } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Comment } from '../shared/comment';
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
      this.createForm();
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
  
    createForm(){
      this.commentForm=this.fb.group({
        author: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25),]],
        rating: [5],
        comment: ['', [Validators.required,]],
        date: ['']
      });
      this.commentForm.valueChanges
        .subscribe(data=> this.onValueChanged(data));
      
      this.onValueChanged();
    }
  
    onValueChanged(data?: any){
      if(!this.commentForm){return ;}
      const form= this.commentForm;
      for (const field in this.formErrors){
        if(this.formErrors.hasOwnProperty(field)){
          this.formErrors[field]='';  //clear previous error messages, if any
          const control= form.get(field)
          if (control && control.dirty && !control.valid){
            const messages= this.validationMessages[field];
            for(const key in control.errors){
              if(control.errors.hasOwnProperty(key)){
                this.formErrors[field] += messages[key] + ' ';
              }
            }
          }
        }
      }
    }
  
  onSubmit(){
    this.comment= this.commentForm.value;
    this.comment.date = new Date().toISOString();
    console.log(this.comment);
    this.flowercopy.comments.push(this.comment);
    this.flowerService.putFlower(this.flowercopy).subscribe(flower => {
      this.flower = flower;
      this.flowercopy = flower;
    },errmess => { 
      this.flower= null;
      this.errMess = <any>errmess;
    });
    this.commentForm.reset({
      author: [' '],
      rating: 5,
      comment: [' '],
    });
    this.commentFormDirective.resetForm();
  }

}
