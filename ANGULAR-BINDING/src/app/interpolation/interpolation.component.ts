import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {
  name:string= "mohit";
  age:number = 21;
  address:string="indore";

  myId = "first-heading";
  secondId = "second-heading";
  status  = false;

  firstHeading="first-heading";
  secondHeading="second-heading";
  thirdHeading = {
     'first-heading': true,
     'text-style': true
  }


  user = " ";
  pass = " ";
  greet ="";
    constructor() { }
    public registerUser(username:string, passwordValue:string){
      this.user = username;
      this.pass = passwordValue;
   
     }
     public sayHello(){
       this.greet = "Say Hello";
     }


  ngOnInit(): void {
  }

}
