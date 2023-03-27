import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {

  @Input()
  Id:string="0"
  @Input()
  photo:string =""
  @Input()
  title:string =""
  @Input()
  paragraph:string =""
  constructor(){}
  ngOnInit(): void {}
}
