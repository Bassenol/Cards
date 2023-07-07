import { Component,OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ Input() title:string="";
  @ Input() username:string="";
  @ Input() imageUrl:string="";
  @ Input() content:string="";



  constructor(){}

  ngOnInit(): void {
    
  }

}
