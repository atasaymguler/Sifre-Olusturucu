import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  password:string = "";
  length: number = 0;
  includeLetters: boolean = false;
  includeNumbers: boolean = false;
  includeSymbols: boolean = false;

  modifyLength(value: string) {
    debugger;
   
    const parsedValue = parseInt(value);  
    if (!isNaN(parsedValue)) { 

      this.length = parsedValue;
      console.log(this.length);

    } else {
      alert("Error : Lüten Sayı Giriniz")
    }

  }

  modifyLetters() {

    this.includeLetters = !this.includeLetters; 


  }
  modifyNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }
  modifySymbols() {
    this.includeSymbols = !this.includeSymbols;
  }

  buttonClick() {
    const numbers = "1234567890";
    const letters = "abcçdefgğhiıjklmnoöprsştuüvyz";
    const symbols = "!@#$%^&*()";

    let validChar = "";

    if(this.includeNumbers)    
    {
      validChar += numbers
    }
    if(this.includeLetters)
    {
      validChar += letters
    }
    if(this.includeSymbols)
    {
      validChar += symbols
    }

    let generatePassword = "";
    for(let i=0; i<this.length; i++){

      const index =Math.floor(Math.random()*validChar.length)
      generatePassword += validChar[index]
    }
    
    this.password = generatePassword ;



}

}
