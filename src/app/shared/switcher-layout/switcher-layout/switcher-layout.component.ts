import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/firebase/auth.service';
import { NavService } from '../../services/nav.service';

@Component({
  selector: 'app-switcher-layout',
  templateUrl: './switcher-layout.component.html',
  styleUrls: ['./switcher-layout.component.scss']
})
export class SwitcherLayoutComponent implements OnInit {


  private body:HTMLBodyElement | any = document.querySelector('body');
  mainSidebarOpen!: string;
  public isCollapsed = true;
  constructor(public authService: AuthService, public navServices: NavService) {}

  ngOnInit(): void {}

  themeMode(){
    if(this.body != !this.body){
      this.body.classList.toggle('dark-mode')
    }
  }

  toggleSidebar(){
    if ((this.navServices.collapseSidebar = !this.navServices.collapseSidebar)) {
      document.querySelector('body')?.classList.add('sidenav-toggled');
    }
    else {
      document.querySelector('body')?.classList.remove('sidenav-toggled');
    }
  }
  
  signOut(){
    this.authService.SignOut();
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
