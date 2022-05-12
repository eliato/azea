import { Component, HostListener, OnInit } from '@angular/core';
import { AuthService } from '../../services/firebase/auth.service';
import { HorizontalNavService } from '../../services/horizontal-nav.service';
import { SwitcherService } from '../../services/switcher.service';

@Component({
  selector: 'app-hori-header',
  templateUrl: './hori-header.component.html',
  styleUrls: ['./hori-header.component.scss']
})
export class HoriHeaderComponent implements OnInit {

  private body:HTMLBodyElement | any = document.querySelector('body');
  resized!: boolean;
  public isCollapsed = true;
  constructor(public SwitcherService : SwitcherService, public authService: AuthService,public navServices: HorizontalNavService) { }
  
  ngOnInit(): void {
    this.onWindowWidth()
  }
  
  themeMode(){
    if(this.body != !this.body){
      this.body.classList.toggle('dark-mode')
    }
  }
  signOut(){
    this.authService.SignOut();
  }

  @HostListener("window:resize", [])
  onWindowScroll() {    
    this.resized = window.innerWidth < 992;
    if(this.resized){
      document.querySelector('body')?.classList.add('sidebar-gone');
    }
    else{
      document.querySelector('body')?.classList.remove('sidebar-gone');
    }
  }
  
  toggleSidebar(){
    const sidebar:boolean = this.body.classList.value.includes('active');
    
    if (sidebar == true) {
      this.body.classList.remove('active');
    }
    else {
      this.body.classList.add('active');
    }
  }
  
  toggleSwitcher() {
    this.SwitcherService.emitChange(true);
  }

  onWindowWidth() {    
    let checkWidth = window.innerWidth < 992;
    if(checkWidth){
      document.querySelector('body')?.classList.add('sidebar-gone');
    }
  }
}
