import { Component } from '@angular/core';


interface Photo {
  image: string,
  price: number,
  date: string
}
@Component({
  selector: 'app-afisha',
  templateUrl: './afisha.component.html',
  styleUrls: ['./afisha.component.scss']
})
export class AfishaComponent {
  photos: Array<Photo> = [
    {image: 'img1.png', price: 10000, date: '20.09.2034' },
    {image: 'img2.png', price: 1000, date: '21.03.2034' },
    {image: 'img1.png', price: 1000, date: '21.03.2034' },
    {image: 'img4.png', price: 1000, date: '21.03.2034' },
  ]
  photos2: Array<Photo> = [
    {image: 'img2.png', price: 2305, date: '20.09.2034' },
    {image: 'img4.png', price: 192, date: '23.03.2034' },
    {image: 'img1.png', price: 324, date: '31.12.2034' },
    {image: 'img4.png', price: 567, date: '21.03.2023' },
  ]
  photos3: Array<Photo> = [
    {image: 'img2.png', price: 535, date: '20.09.2034' },
    {image: 'img1.png', price: 150, date: '10.04.2003' },
    {image: 'img2.png', price: 780, date: '04.03.2034' },
    {image: 'img4.png', price: 435, date: '20.03.2034' },
  ]
}
