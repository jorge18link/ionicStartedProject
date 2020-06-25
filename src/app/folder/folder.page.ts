import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;

  slider: IonSlides;

  slideOptions = {
    initialSlide: 0,
    speed: 200,
  };

  banners: any = ['../assets/img/banner1.jpg', '../assets/img/banner2.jpg', '../assets/img/banner3.jpg'];

  productos: any = [
    {
      sourceIMG: '../assets/img/pro1.png',
      descripcion: 'Laptop Lenovo Ryzen 3, 8gb, 1tb, 15 pulg, W10, Bt',
      precio: '$629.00',
      idx: 0
    },
    {
      sourceIMG: '../assets/img/pro2.png',
      descripcion: 'All In One Core I3 8va, 24 Pulg TOUCH, 256gb, 4gb,...',
      precio: '$650.00',
      idx: 1
    },
    {
      sourceIMG: '../assets/img/pro3.png',
      descripcion: 'Laptop hp core i5 8va, 8gb, 256gb, Intel UHD 620, BT, FHD',
      precio: '$730.00',
      idx: 2
    }
  ];

  categorias: any = [
    {
      categ1: 'Laptops',
      categ2: 'Celulares',
      categ3: 'Smart tvs',
      idx: 0
    },
    {
      categ1: 'Accesorios',
      categ2: 'AirPods',
      categ3: 'Ver más...',
      idx: 1
    },
  ];

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

  slidesDidLoad1(slides: IonSlides) {
    slides.startAutoplay();
  }

  slidesDidLoad2(slides: IonSlides) {
    this.slider = slides;
  }

  next() {
    this.slider.slideNext();
  }

  prev() {
    this.slider.slidePrev();
  }

}
