import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-contact',
  templateUrl: 'contact.component.html',
  styleUrls: ['contact.component.css'],
})
export class Contact {
  @Input()
  content2: string = 'Get in touch with us today!'
  @Input()
  email1: string = 'hello@Processes.io'
  @Input()
  address1: string = '456 Test Ave, Processes'
  @Input()
  content3: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.'
  @Input()
  content1: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
  @Input()
  content4: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.'
  @Input()
  heading1: string = 'Contact us'
  @Input()
  content5: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.'
  @Input()
  phone1: string = '+1 (999) 000-0000'
  constructor() {}
}
