import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  @Input() currentSearch: string;


  addTodo(buscar) {
       this.currentSearch = '';
      // return false;
   }
  constructor(private router: Router) { }

  ngOnInit() {
  }

  buscarHeroe(termino: string) {

    console.log(termino);
    this.router.navigate( ['/buscar', termino] );

  }


}
