import { Component, OnInit, ViewChild, HostListener, ElementRef } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  sticky: boolean = false;
  elementPosition: any;

  constructor(public dialog: MatDialog ) { }

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