import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent {

  //class binding with separate properties
public myText="TextColor";
public myText1="TextSize";
public myText2="TextStyle";

// class binding
public required=true;
//class binding using multiple properties
public group={
  "TextColor" :!this.required,
  "TextStyle" :this.required,
  "TextSize" :this.required
}

public myColor="pink";


  public name="Sucessfully";
  public Id="A153S2L";
  public isDisabled="true";

  public eventexample="";
onClick(){
  //console.log("welcome to my world")
this.eventexample="welcome to my world";
}

message(message:string){
  console.log(message);
}
}
