import { Component, HostListener, OnInit } from '@angular/core';
import { SwitcherService } from '../../services/switcher.service';

@Component({
  selector: 'app-horizontal-layout-components',
  templateUrl: './horizontal-layout-components.component.html',
  styleUrls: ['./horizontal-layout-components.component.scss']
})
export class HorizontalLayoutComponentsComponent implements OnInit {

  constructor(public SwitcherService: SwitcherService) { }

  ngOnInit(): void {
  }
  clickOnBody(){
    let switcher = document.querySelector('.demo_changer');
    if(switcher?.classList.contains('active')){ this.SwitcherService.emitChange(false);}
  }

  
  scrolled: boolean = false;

  @HostListener("window:scroll", [])
  onWindowScroll() {    
    this.scrolled = window.scrollY > 70;
  }
}
