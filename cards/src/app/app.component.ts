import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{


  posts=[
   
         {
          title:'Vona',
          username:'@Basenol34',
          imageUrl:'assets/vona.jpeg',
          content:"Vona'da güzel bir gün"
          },
          {
            title:'Timsah Adası',
            username:'@Basenol34',
            imageUrl:'assets/vona2.jpeg',
            content:"Harika bir manzara"
            },
            {
              title:'Hoynat',
              username:'@Basenol34',
              imageUrl:'assets/vona3.jpeg',
              content:"Başka bir güzellik"
              }
   
  ]
  constructor(){

  }
  ngOnInit(): void {
    
  }
}
