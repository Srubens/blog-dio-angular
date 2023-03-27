import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-title',
  templateUrl: './menu-title.component.html',
  styleUrls: ['./menu-title.component.css']
})
export class MenuTitleComponent implements OnInit{
  constructor(){}
  ngOnInit(): void {}

  @Input()
  title:string=""
}
