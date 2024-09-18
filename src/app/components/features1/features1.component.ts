import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-features1',
  templateUrl: 'features1.component.html',
  styleUrls: ['features1.component.css'],
})
export class Features1 {
  @Input()
  feature1ImgAlt: string = 'feature 1'
  @Input()
  feature3Description: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.'
  @Input()
  feature3Title: string = 'Feature #3'
  @Input()
  feature3ImgSrc: string =
    'https://images.unsplash.com/photo-1551046234-fce2faca7234?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNjMwMjQzNHw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  feature1ImgSrc: string =
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNjMwMjQzNnw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  feature2Description: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.'
  @Input()
  feature1Title: string = 'Feature #1'
  @Input()
  feature3ImgAlt: string = 'image'
  @Input()
  feature1Description: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.'
  @Input()
  feature2ImgSrc: string =
    'https://images.unsplash.com/photo-1476900164809-ff19b8ae5968?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNjMwMjQzN3w&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  feature2ImgAlt: string = 'image'
  @Input()
  feature2Title: string = 'Feature #2'
  activeTab: number = 0
  constructor() {}
}
