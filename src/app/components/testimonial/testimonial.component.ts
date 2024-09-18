import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-testimonial',
  templateUrl: 'testimonial.component.html',
  styleUrls: ['testimonial.component.css'],
})
export class Testimonial {
  @Input()
  author2Position: string = 'Position, Company name'
  @Input()
  author1Position: string = 'Position, Company name'
  @Input()
  author3Alt: string = 'image'
  @Input()
  author1Name: string = 'Author Name'
  @Input()
  author1Src: string =
    'https://images.unsplash.com/photo-1517630800677-932d836ab680?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNjMwMjQzNHw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  author3Name: string = 'Author Name'
  @Input()
  review2: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.'
  @Input()
  author2Name: string = 'Author Name'
  @Input()
  author4Position: string = 'Position, Company name'
  @Input()
  author4Name: string = 'Author Name'
  @Input()
  author4Src: string =
    'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNjMwMjQzNHw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  author1Alt: string = 'image'
  @Input()
  author2Src: string =
    'https://images.unsplash.com/photo-1613667821723-35e4e3e04671?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNjMwMjQzNXw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  author3Src: string =
    'https://images.unsplash.com/photo-1542384701-c0e46e0eda04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNjMwMjQzNXw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  author2Alt: string = 'image'
  @Input()
  author4Alt: string = 'image'
  @Input()
  content1: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.'
  @Input()
  author3Position: string = 'Position, Company name'
  @Input()
  review1: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.'
  @Input()
  heading1: string = 'Testimonials'
  @Input()
  review3: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.'
  @Input()
  review4: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.'
  constructor() {}
}
