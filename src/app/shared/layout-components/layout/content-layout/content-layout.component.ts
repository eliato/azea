import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { SwitcherService } from 'src/app/shared/services/switcher.service';

@Component({
  selector: 'app-content-layout',
  templateUrl: 
  './content-layout.component.html',
  styleUrls: ['./content-layout.component.scss']
})
export class ContentLayoutComponent implements OnInit {
  isOpen!: Boolean;
  body = document.querySelector('body');
  mainSidebarOpen!: string;

  constructor(public SwitcherService: SwitcherService) { }

  ngOnInit(): void {
  }

  clickOnBody(){
    let switcher = document.querySelector('.demo_changer');
    if(switcher?.classList.contains('active')){ this.SwitcherService.emitChange(false);}
  }

  hoverEffect($event:any) {
    this.mainSidebarOpen = $event.type == 'mouseover' ? 'sidenav-toggled1' : '';
    if(this.body?.classList.contains('sidenav-toggled')){
      if(this.mainSidebarOpen == 'sidenav-toggled1'){
        this.body?.classList.add('sidenav-toggled1')
      }
      else{
        this.body?.classList.remove('sidenav-toggled1')
      }
    }
  }
}
