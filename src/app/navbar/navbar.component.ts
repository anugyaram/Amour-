import { Component, OnInit,ViewChild, HostListener, ElementRef} from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  sticky: boolean = false;
  elementPosition: any;


  isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset);
    
  constructor(private breakpointObserver: BreakpointObserver, public dialog: MatDialog) {}
  
  @ViewChild('stickyMenu') menuElement: ElementRef;

  menuPosition: any;
  ngAfterViewInit(){
    this.elementPosition = this.menuElement.nativeElement.offsetTop;
  }


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

  

  }
