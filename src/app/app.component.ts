import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "password"; // title ve password property 
  password= "Atasay";

  buttonClick(){  // Event Binding
    this.password="Can"
    console.log("Event Binding'i Öğreniyoruz");
  }

  getPassword()
  {
    return this.password;
  }
}
