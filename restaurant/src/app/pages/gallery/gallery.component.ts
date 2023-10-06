import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  photos: Array<string> = [
    'galereyaONE.png',
    'galereyaTWO.png',
    'galereyaTHREE.png',
    'galereyaFOUR.png',
    'galereyaFIVE.png',
    'galereyaSIX.png',
    'galereyaSEVEN.png',
    'galereyaEIGHT.png',
    'galereyaELEVEN.png',
    'galereyaTEN.png',
    'galereyaELEVEN.png',
    'galereyaTWALVE.png',
  ]
}
