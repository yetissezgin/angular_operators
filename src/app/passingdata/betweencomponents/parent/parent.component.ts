import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  degiskenvariable:string="bu bir denem yazisidir bakalim oteki taraftan alabilecek miyim?";
  
  constructor() { }

  ngOnInit(): void {
  }

}
