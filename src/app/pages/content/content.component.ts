import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { data } from '../../data/data'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {


  @Input()
  photo:string = ""
  @Input()
  title:string=""
  @Input()
  paragraph:string =""

  private id:string | null = "0"

  constructor(
    private route:ActivatedRoute
  ){}
  ngOnInit(): void {
    this.route.paramMap.subscribe(value =>
      this.id = value.get("id")
    )
    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id:string | null){
    const result = data.filter((article) => article.id.toString() == id)[0]
    this.title = result.title
    this.photo = result.photo
    this.paragraph = result.paragraph
    this.photo = result.photo
    console.log(result)
  }

}
