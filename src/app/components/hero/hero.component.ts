import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-hero',
  templateUrl: 'hero.component.html',
  styleUrls: ['hero.component.css'],
})
export class Hero {
  @Input()
  image3Src: string =
    'https://images.unsplash.com/photo-1499946981954-e7f4b234d7fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNjMwMjQzNHw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  image8Alt: string = 'Hero Image'
  @Input()
  image2Src: string =
    'https://images.unsplash.com/photo-1502139214982-d0ad755818d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNjMwMjQzNXw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  image6Alt: string = 'Hero Image'
  @Input()
  image11Src: string =
    'https://images.unsplash.com/photo-1459499362902-55a20553e082?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNjMwMjQzNnw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  image5Alt: string = 'Hero Image'
  @Input()
  image1Alt: string = 'Hero Image'
  @Input()
  image7Src: string =
    'https://images.unsplash.com/photo-1505455184862-554165e5f6ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNjMwMjQzN3w&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  image7Alt: string = 'Hero Image'
  @Input()
  image12Alt: string = 'Hero Image'
  @Input()
  image2Alt: string = 'Hero Image'
  @Input()
  image6Src: string =
    'https://images.unsplash.com/photo-1546387903-6d82d96ccca6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNjMwMjQzOHw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  image12Src: string =
    'https://images.unsplash.com/photo-1552674131-57a8ca2881df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNjMwMjQzOHw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  image3Alt: string = 'Hero Image'
  @Input()
  image9Src: string =
    'https://images.unsplash.com/photo-1505329927822-d21ffa647f49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNjMwMjQzOXw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  image11Alt: string = 'Hero Image'
  @Input()
  action2: string = 'Secondary action'
  @Input()
  action1: string = 'Main action'
  @Input()
  image8Src: string =
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNjMwMjQzOXw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  image5Src: string =
    'https://images.unsplash.com/photo-1547581950-a133f130d85f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNjMwMjQzOXw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  image4Src: string =
    'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNjMwMjQ0MHw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  image10Alt: string = 'Hero Image'
  @Input()
  image4Alt: string = 'Hero Image'
  @Input()
  heading1: string = 'Medium length hero headline goes here'
  @Input()
  content1: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.'
  @Input()
  image10Src: string =
    'https://images.unsplash.com/photo-1556761175-4b46a572b786?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNjMwMjQ0MHw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  image9Alt: string = 'Hero Image'
  @Input()
  image1Src: string =
    'https://images.unsplash.com/photo-1453738773917-9c3eff1db985?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNjMwMjQ0MHw&ixlib=rb-4.0.3&q=80&w=1080'
  constructor() {}
}
