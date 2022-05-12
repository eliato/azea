import { Component, ElementRef, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { SwitcherService } from '../../services/switcher.service';
import { AuthService } from '../../services/firebase/auth.service';
import { NavService } from '../../services/nav.service';

@Component({
  selector: 'app-header',
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        right: '-290px'
      })),
      state('closed', style({
        right: '0px'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('1s')
      ]),
    ]),
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  private body:HTMLBodyElement | any = document.querySelector('body');
  public isCollapsed = true;
  constructor(public SwitcherService : SwitcherService, public authService: AuthService,public navServices: NavService) {

  }

  ngOnInit(): void {
  }

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


  toggleSwitcher() {
    this.SwitcherService.emitChange(true);
  }

  signOut(){
    this.authService.SignOut();
  }
}
