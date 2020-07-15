import { Component, OnInit,ViewChild, HostListener, ElementRef,Directive, EventEmitter, Output} from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { MainCartComponent } from '../main-cart/main-cart.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

@Directive({ selector: '[clickElsewhere]' })
export class NavbarComponent {

  @Output() clickElsewhere = new EventEmitter<MouseEvent>();

  sticky: boolean = false;
  elementPosition: any;
  overlapTrigger: boolean = false;

  isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset);
    
  constructor(private breakpointObserver: BreakpointObserver, public dialog: MatDialog, private elementRef: ElementRef) {}
  
  @ViewChild('stickyMenu') menuElement: ElementRef;

  menuPosition: any;
 


@HostListener('window:scroll', ['$event'])
    handleScroll(){
      const windowScroll = window.pageYOffset;
      if(windowScroll >= this.elementPosition){
        this.sticky = true;
      } else {
        this.sticky = false;
      }
    }
  ngOnInit() {

  }

  openLoginForm() {
    this.dialog.open(LoginComponent, {width: '500px', height: '450px'});
  }

  addToCart(){
    this.dialog.open(MainCartComponent);
  }
  

  }
