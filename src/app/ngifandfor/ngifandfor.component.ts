import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngifandfor',
  templateUrl: './ngifandfor.component.html',
  styleUrls: ['./ngifandfor.component.css']
})
export class NgifandforComponent implements OnInit {
  isHidden=true;
  myArray:string[] = ["isimler", "hayvanlar", "akpliler","mhpliler"];


  showHide(){
    this.isHidden=!this.isHidden;
  };
  arrayFunctionu(isim:string){
    console.log(isim)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
