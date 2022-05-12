import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { SwitcherService } from 'src/app/shared/services/switcher.service';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-switcher02',
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
  templateUrl: './switcher02.component.html',
  styleUrls: ['./switcher02.component.scss']
})
export class Switcher02Component implements OnInit {


  layoutSub: Subscription;
  isOpen: boolean = false;
  demoChangerboolean: boolean = false;
  body = document.querySelector('body');

  @ViewChild('switcher', {static: false}) switcher!: ElementRef;
  @ViewChild('demoChanger', {static: false}) demo_changer!: ElementRef;
  constructor( public renderer: Renderer2, public switcherServic: SwitcherService){
      this.layoutSub = switcherServic.changeEmitted.subscribe(
        value => {          
          if (this.isOpen) {
            this.renderer.removeClass(this.switcher.nativeElement.firstElementChild, 'active');
            this.renderer.setStyle(this.switcher.nativeElement.firstElementChild, 'right', '-290px');
            this.isOpen = false;
          }
          else {
            this.renderer.addClass(this.switcher.nativeElement.firstElementChild, 'active');
            this.renderer.setStyle(this.switcher.nativeElement.firstElementChild, 'right', '0px');
            this.isOpen = true;
          }          
        }
      );
    }
  ngOnInit(): void {}
  
  toggleSwitcher() {
    this.switcherServic.emitChange(true);
    if(this.demo_changer.nativeElement.classList.value.includes('active')){
      this.demoChangerboolean =  true;
    }
    else{
      this.demoChangerboolean =  false;
    }
  }
  
	/*LTR Layout Start*/
  myonoffswitch55() {
    this.body?.classList.add('rtl');
    this.body?.classList.remove('ltr');
    document.querySelector('html')?.setAttribute('dir', 'rtl');
    // document.getAttribute("html[lang=en]").attr("dir", "rtl");
    (document.getElementById("style")?.setAttribute("href", "assets/css/bootstrap/bootstrap.rtl.css"));
  };
  /*LTR Layout End*/

  /*RTL Layout Start*/
  myonoffswitch54() {
    this.body?.classList.add('ltr');
    this.body?.classList.remove('rtl');
    document.querySelector('html')?.setAttribute('dir', 'ltr');
    (document.getElementById("style")?.setAttribute("href", "assets/css/bootstrap/bootstrap.css"));
  };
  /*RTL Layout End*/
  /*Light Layout Start*/
  myonoffswitch1() {
    this.body?.classList.add('light-mode');
    this.body?.classList.remove('dark-mode');
    this.body?.classList.remove('light-menu');
    this.body?.classList.remove('gradient-hormenu');
    this.body?.classList.remove('dark-mode');
    this.body?.classList.remove('color-header');
    this.body?.classList.remove('dark-header'); 
    this.body?.classList.remove('dark-menu');
    this.body?.classList.remove('gradient-menu');
    this.body?.classList.remove('gradient-header');
    this.body?.classList.remove('color-menu');
    localStorage.setItem("light-mode", "True");
  }
  /*Light Layout End*/  
  // /*Dark Layout Start*/
  myonoffswitch2() {
      this.body?.classList.add('dark-mode');
      this.body?.classList.remove('light-mode');
      this.body?.classList.remove('light-menu');
      this.body?.classList.remove('light-header');
      this.body?.classList.remove('light-hormenu');
      this.body?.classList.remove('color-menu');
      this.body?.classList.remove('color-header');
      this.body?.classList.remove('dark-header');
      this.body?.classList.remove('dark-menu');
      this.body?.classList.remove('gradient-header');
      this.body?.classList.remove('gradient-menu');
      this.body?.classList.remove('gradient-hormenu');
      localStorage.setItem("dark-mode", "True");
  }
  // /*Dark Layout End*/

  // /*Light Menu Start*/
  myonoffswitch3() {
    this.body?.classList.add('light-menu');
    this.body?.classList.remove('color-menu');
    this.body?.classList.remove('dark-menu');
    this.body?.classList.remove('gradient-menu');
    this.body?.classList.remove('light-hormenu');
    this.body?.classList.remove('dark-hormenu');
    this.body?.classList.remove('color-hormenu');
    localStorage.setItem("light-menu", "True");
  };
  // /*Light Menu End*/

  //   /*Color Menu Start*/
  myonoffswitch4() {
    this.body?.classList.add('color-menu');
    this.body?.classList.remove('light-menu');
    this.body?.classList.remove('dark-menu');
    this.body?.classList.remove('gradient-menu');
    this.body?.classList.remove('light-hormenu');
    this.body?.classList.remove('dark-hormenu');
    this.body?.classList.remove('color-hormenu');
    localStorage.setItem("color-menu", "True");
  };
  // /*Color Menu End*/

  //   /*Dark Menu Start*/
  myonoffswitch5() {
    this.body?.classList.add('dark-menu');
    this.body?.classList.remove('color-menu');
    this.body?.classList.remove('light-menu');
    this.body?.classList.remove('gradient-menu');
    this.body?.classList.remove('light-hormenu');
    this.body?.classList.remove('dark-hormenu');
    this.body?.classList.remove('dark-hormenu');
    localStorage.setItem("dark-menu", "True");
  };
  // /*Dark Menu End*/

  // /*Gradient Menu Start*/
  myonoffswitch25() {
    this.body?.classList.add('gradient-menu');
    this.body?.classList.remove('color-menu');
    this.body?.classList.remove('light-menu');
    this.body?.classList.remove('dark-menu');
    this.body?.classList.remove('light-hormenu');
    this.body?.classList.remove('dark-hormenu');
    this.body?.classList.remove('dark-hormenu');
    localStorage.setItem("gradient-menu", "True");
  };
  // /*Gradient Menu End*/

  // /*Light Header Start*/
  myonoffswitch6() {
    this.body?.classList.add('light-header');
    this.body?.classList.remove('color-header');
    this.body?.classList.remove('dark-header');
    this.body?.classList.remove('gradient-header');
    localStorage.setItem("light-header", "True");
  };
  // /*Light Header End*/
  // /*Color Header Start*/
  myonoffswitch7() {
    this.body?.classList.add('color-header');
    this.body?.classList.remove('light-header');
    this.body?.classList.remove('dark-header');
    this.body?.classList.remove('gradient-header');
    localStorage.setItem("color-header", "True");
  };
  // /*Color Header End*/

  // /*Dark Header Start*/
  myonoffswitch8() {
    this.body?.classList.add('dark-header');
    this.body?.classList.remove('color-header');
    this.body?.classList.remove('light-header');
    this.body?.classList.remove('gradient-header');
    localStorage.setItem("dark-header", "True");
  };
  // /*Dark Header End*/

  // /*Gradient Header Start*/
  myonoffswitch26() {
    this.body?.classList.add('gradient-header');
    this.body?.classList.remove('dark-header');
    this.body?.classList.remove('color-header');
    this.body?.classList.remove('light-header');
    localStorage.setItem("gradient-header", "True");
  };
  // /*Gradient Header End*/

  // /*Full Width Layout Start*/
  myonoffswitch9() {
    this.body?.classList.add('layout-fullwidth');
    this.body?.classList.remove('layout-boxed');
    localStorage.setItem("layout-fullwidth", "True");
  };
  // /*Full Width Layout End*/

  // /*Boxed Layout Start*/
  myonoffswitch10() {
    this.body?.classList.add('layout-boxed');
    this.body?.classList.remove('layout-fullwidth');
    localStorage.setItem("layout-boxed", "True");
  };
  // /*Boxed Layout End*/

  // /*Header-Position Styles Start*/
  myonoffswitch11() {
    this.body?.classList.add('fixed-layout');
    this.body?.classList.remove('scrollable-layout');
    localStorage.setItem("fixed-layout", "True");
  };
  myonoffswitch12() {
    this.body?.classList.add('scrollable-layout');
    this.body?.classList.remove('fixed-layout');
    localStorage.setItem("scrollable-layout", "True");
  };
  // /*Header-Position Styles End*/
}
