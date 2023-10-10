import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {

  img: string = 'https://w0.peakpx.com/wallpaper/571/466/HD-wallpaper-angular-programming-computer.jpg'
  text: string = `Mussum Ipsum, cacilds vidis litro abertis. Leite de capivaris, leite de mula manquis sem cabeça. Manduma
                pindureta quium dia nois paga. Nullam volutpat risus nec leo commodo, ut interdum diam laoreet.`

  constructor() { }

  ngOnInit(): void {
  }

}
