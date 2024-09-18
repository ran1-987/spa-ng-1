import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-pricing',
  templateUrl: 'pricing.component.html',
  styleUrls: ['pricing.component.css'],
})
export class Pricing {
  @Input()
  plan3Price: string = '$49/mo'
  @Input()
  plan3Action: string = 'Get started'
  @Input()
  plan11: string = 'Basic plan'
  @Input()
  plan1Action: string = 'Get started'
  @Input()
  plan31: string = 'Enterprise plan'
  @Input()
  plan3Feature41: string = 'Feature text goes here'
  @Input()
  plan1Feature2: string = 'Feature text goes here'
  @Input()
  plan2Feature11: string = 'Feature text goes here'
  @Input()
  plan3Feature51: string = 'Feature text goes here'
  @Input()
  plan2Feature41: string = 'Feature text goes here'
  @Input()
  plan2Feature2: string = 'Feature text goes here'
  @Input()
  plan3Feature21: string = 'Feature text goes here'
  @Input()
  plan2Feature4: string = 'Feature text goes here'
  @Input()
  plan2Yearly: string = 'or $299 yearly'
  @Input()
  plan1Action1: string = 'Get started'
  @Input()
  plan2Action: string = 'Get started'
  @Input()
  plan3Feature1: string = 'Feature text goes here'
  @Input()
  plan2Feature3: string = 'Feature text goes here'
  @Input()
  plan1Price1: string = '$200/yr'
  @Input()
  plan2: string = 'Business plan'
  @Input()
  plan2Feature21: string = 'Feature text goes here'
  @Input()
  plan2Action1: string = 'Get started'
  @Input()
  plan3Feature2: string = 'Feature text goes here'
  @Input()
  content1: string = 'Choose the perfect plan for you'
  @Input()
  plan2Feature1: string = 'Feature text goes here'
  @Input()
  heading1: string = 'Pricing plan'
  @Input()
  plan3Feature31: string = 'Feature text goes here'
  @Input()
  plan1: string = 'Basic plan'
  @Input()
  plan21: string = 'Business plan'
  @Input()
  plan1Feature11: string = 'Feature text goes here'
  @Input()
  plan1Feature21: string = 'Feature text goes here'
  @Input()
  plan3Feature5: string = 'Feature text goes here'
  @Input()
  plan2Yearly1: string = 'or $29 monthly'
  @Input()
  plan2Price: string = '$29/mo'
  @Input()
  plan3Yearly1: string = 'or $49 monthly'
  @Input()
  plan2Feature31: string = 'Feature text goes here'
  @Input()
  plan3Feature11: string = 'Feature text goes here'
  @Input()
  plan1Yearly1: string = 'or $20 monthly'
  @Input()
  plan2Price1: string = '$299/yr'
  @Input()
  plan3Yearly: string = 'or $499 yearly'
  @Input()
  plan3Feature4: string = 'Feature text goes here'
  @Input()
  plan3Price1: string = '$499/yr'
  @Input()
  plan1Feature31: string = 'Feature text goes here'
  @Input()
  plan1Feature3: string = 'Feature text goes here'
  @Input()
  plan1Yearly: string = 'or $200 yearly'
  @Input()
  plan1Feature1: string = 'Feature text goes here'
  @Input()
  plan3Feature3: string = 'Feature text goes here'
  @Input()
  content2: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
  @Input()
  plan3Action1: string = 'Get started'
  @Input()
  plan1Price: string = '$20/mo'
  @Input()
  plan3: string = 'Enterprise plan'
  isMonthly: boolean = true
  constructor() {}
}
