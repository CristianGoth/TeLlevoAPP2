import { Component, AfterViewInit, ViewChild, ElementRef} from '@angular/core';
import { Map } from 'mapbox-gl';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-home', 
  templateUrl: 'home.page.html', 
  styleUrls: ['home.page.scss'], 
})
export class HomePage implements AfterViewInit {

  @ViewChild('mapDiv')
  mapDivElement!: ElementRef

  data: any; 
  constructor(private activeroute: ActivatedRoute, private router: Router) {
    this.activeroute.queryParams.subscribe(params => { 
      if (this.router.getCurrentNavigation()?.extras.state) { 
        this.data = this.router.getCurrentNavigation()?.extras.state?.['user']; 
        console.log(this.data) 
      } 
    });
  }  

  ngAfterViewInit(): void {

    const map = new Map({
      container: this.mapDivElement.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [-71.5519, -33.0245], // Centro del mapa en Viña del Mar, Chile [longitud, latitud]
      zoom: 14, // starting zoom
    });


  }




}



