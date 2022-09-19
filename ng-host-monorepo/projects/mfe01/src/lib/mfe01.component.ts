import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-mfe01',
  templateUrl: './mfe01.component.html',
  styles: []
})
export class Mfe01Component implements OnInit {

  public items = [1, 2, 3, 4, 5, 6, 7];
  constructor() { }

  ngOnInit(): void {
  }

}
