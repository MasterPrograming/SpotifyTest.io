import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

mainMenu: {
  defaultOptions: Array<any>,
    accessLink: Array<any>
} = {defaultOptions: [], accessLink: [] }


customOptions: Array<any> = []


  // Se declara en el constructor la libreria router de angular router
  constructor(private router: Router) { }

  ngOnInit(): void {

    this.mainMenu.defaultOptions = [
      {
        name: 'Home',
        icon: 'uil uil-estate',
        router: ['/', 'auth']
      },
      {
        name: 'Buscar',
        icon: 'uil uil-search',
        router: ['/', 'history']
      },
      {
        name: 'Tu biblioteca',
        icon: 'uil uil-chart',
        router: ['/', 'favorites'],
        query: { hola: 'mundo' }
      }
    ]

    this.mainMenu.accessLink = [
      {
        name: 'Crear lista',
        icon: 'uil-plus-square'
      },
      {
        name: 'Canciones que te gustan',
        icon: 'uil-heart-medical'
      }
    ]

    this.customOptions = [
      {
        name: 'Mi lista º1',
        router: ['/']
      },
      {
        name: 'Mi lista º2',
        router: ['/']
      },
      {
        name: 'Mi lista º3',
        router: ['/']
      },
      {
        name: 'Mi lista º4',
        router: ['/']
      }
    ]
  }
  //  se realiza la funcion para el router con router Link
  goTo($event: any): void {
    this.router.navigate(['/', 'favorites'], {
      //query parameters
      queryParams: {
        key1: 'value1',
        key2: 'value2',
        key3: 'value1'
      }
    })
  }
}
