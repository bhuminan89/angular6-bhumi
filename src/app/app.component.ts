import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  joke:string;
  punchLine:string;
  name = 'Mr.Nandan !';

constructor(){
  this.setup();
}

setup(){
this.joke ="What cheese says in front of mirror ?";
this.punchLine="Hellomui (hello Me)";
}

}

