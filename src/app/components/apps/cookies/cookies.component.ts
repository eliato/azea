import { Component, OnInit } from '@angular/core';

import { NgcCookieConsentService, NgcCookieConsentConfig, NgcCookiePosition, NgcCookieTheme, NgcCookieCompliance } from 'ngx-cookieconsent';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-cookies',
  templateUrl: './cookies.component.html',
  styleUrls: ['./cookies.component.scss']
})
export class CookiesComponent implements OnInit {
  options!: NgcCookieConsentConfig | any;
  minOptions!: NgcCookieConsentConfig;
  optionsBackup!: NgcCookieConsentConfig;
  areOptionsCopied = false;

  positions = [
    { value: 'top', text: 'Banner top' },
    { value: 'bottom', text: 'Banner bottom' },
    { value: 'top-left', text: 'Banner top left' },
    { value: 'top-right', text: 'Banner top right' },
    { value: 'bottom-left', text: 'Banner bottom left' },
    { value: 'bottom-right', text: 'Banner bottom right' }
  ];

  themes = [
    { value: 'block', text: 'Block' },
    { value: 'classic', text: 'Classic' },
    { value: 'edgeless', text: 'Edgeless' }
  ];

  compliances = [
    { value: 'info', text: 'Just tell users that we use cookies' },
    { value: 'opt-out', text: 'Let users opt out of cookies (Advanced)' },
    { value: 'opt-in', text: 'Ask users to opt into cookies (Advanced)' }
  ];
  
  constructor(private ccService: NgcCookieConsentService) { 
  }

  ngOnInit(): void {
    this.minOptions = {
      cookie: {
        domain: environment.cookieDomain
      }
    };

    this.options = {
      cookie: {
        domain: environment.cookieDomain
      },
      position: 'bottom',
      theme: 'classic',
      palette: {
        popup: {
          background: '#000000',
          text: '#ffffff'
        },
        button: {
          background: '#f1d600',
          text: '#000000'
        }
      },
      type: 'info',
      content: {
        message: 'This website uses cookies to ensure you get the best experience on our website.',
        dismiss: 'Got it!',
        deny: 'Refuse cookies',
        link: 'Learn more',
        href: 'https://cookiesandyou.com',
        policy: 'Cookie Policy',

      }
    };

    this.optionsBackup = Object.assign(this.minOptions, this.options);
  }

  selectPosition(position: NgcCookiePosition | any): void {
    this.options.position = position;
  }

  selectTheme(theme: NgcCookieTheme | any) {
    this.options.theme = theme;
  }

  selectCompliance(compliance: NgcCookieCompliance | any): void {
    this.options.type = compliance;
  }

  updateConfig(): void {
    this.ccService.clearStatus();
    this.ccService.destroy();
    this.ccService.init(this.options);
    this.areOptionsCopied = false;
  }
}
