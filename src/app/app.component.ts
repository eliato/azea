import { Component, OnInit, Input, Inject } from '@angular/core';
import { Router , NavigationStart, NavigationEnd, NavigationCancel, NavigationError} from '@angular/router';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{
  public showLoader: boolean = true;
  public isLoaderVisible = true;

  @Input() display = false;
  constructor(
    private router: Router,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.router.events.subscribe(
      event => {
        if (event instanceof NavigationStart) {
          this.isLoaderVisible = true;

        } else if (
          event instanceof NavigationEnd ||
          event instanceof NavigationCancel ||
          event instanceof NavigationError
        ){
          this.isLoaderVisible = false;
        }
      },
      () => {
        this.isLoaderVisible = false;
      }
    )
  }
  ngOnInit(): void {}
  ngOnDestroy() {
    this.isLoaderVisible = false;
  }
}
