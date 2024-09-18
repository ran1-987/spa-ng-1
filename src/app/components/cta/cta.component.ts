import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-cta',
  templateUrl: 'cta.component.html',
  styleUrls: ['cta.component.css'],
})
export class CTA {
  @Input()
  heading1: string = 'Medium length heading goes here'
  @Input()
  content1: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.'
  @Input()
  action1: string = 'Main Action'
  constructor() {}
}
