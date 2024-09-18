import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-footer',
  templateUrl: 'footer.component.html',
  styleUrls: ['footer.component.css'],
})
export class Footer {
  @Input()
  column2Title: string = 'Column Two'
  @Input()
  link7: string = 'Home'
  @Input()
  link5: string = 'About'
  @Input()
  link8: string = 'Project'
  @Input()
  action1: string = 'Contact'
  @Input()
  content3: string = '© 2024 Processes'
  @Input()
  link4: string = 'Payment'
  @Input()
       logoSrc: string =
    'assets/Processes-2.gif'
  // logoSrc: string =
  //   'https://presentation-website-assets.teleporthq.io/logos/logo.png'
  @Input()
  cookiesLink: string = 'Cookies Settings'
  @Input()
  content2: string =
    'By subscribing you agree to with our Privacy Policy and provide consent to receive updates from our company.'
  @Input()
  link9: string = 'Contacts'
  @Input()
  link6: string = 'Features'
  @Input()
  logoAlt: string = 'logo'
  @Input()
  link1: string = 'Creatures'
  @Input()
  privacyLink: string = 'Privacy Policy'
  @Input()
  link10: string = 'Stand Alone'
  @Input()
  column1Title: string = 'Column One'
  @Input()
  termsLink: string = 'Terms of Service'
  @Input()
  link3: string = 'Section'
  @Input()
  link2: string = 'All'
  @Input()
  socialLinkTitleCategory: string = 'Follow Us'
  constructor() {}
}
