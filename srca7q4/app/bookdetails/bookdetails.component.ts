import { Component, OnInit } from '@angular/core';
export interface element{
  name: string;
  author:string;
  price: number;
}
const books:element[]=[{name:"C",author:"Ajay Mittal",price:340},
  {name:"C++",author:"Michael Kerrisk",price:500},
  {name:"java",author:"Dr Nageswara Rao",price:540}];
@Component({
  selector: 'app-bookdetails',
  templateUrl: './bookdetails.component.html',
  styleUrls: ['./bookdetails.component.css']
})

export class BookdetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  displayedColumns: string[] = ['name', 'author', 'price'];
  dataSource = books;
  

}
