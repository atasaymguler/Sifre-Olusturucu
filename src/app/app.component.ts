import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  length: number=0; //Başlangı. değeri ataması yaptık
  includeLetters :boolean = false;
  includeNumbers :boolean = false;
  includeSymbols :boolean = false;

  modifyLength(value:string)
  {
    debugger;
    //console.log(value); girilen değerin geli gelmediğini kontrol ederiz
    const parsedValue = parseInt(value);  // Burada ise gelen string değeri int'e çevirdik
    if(!isNaN(parsedValue)){  //Burada ise girilen değer (!isNan) bir not a number(sayı değilse) yani sayı değilsenin değili yani sayı ise bu değeri length'e aktardık.

      
      this.length = parsedValue;
      console.log(this.length);
      
    }else
    {
      alert("Error : Lüten Sayı Giriniz")
    }

  }

  modifyLetters()
  {
    
    this.includeLetters = !this.includeLetters;  // Ben burada true dersem ticki geri aldığım da bunun false olması lazım o yüzden değiline eşitledik 


  }
  modifyNumbers()
  {
    this.includeNumbers = !this.includeNumbers;
  }
  modifySymbols()
  {
    this.includeSymbols = !this.includeSymbols;
  }

  buttonClick(){ 
    console.log(`Değerlerim ;
    Letters : ${this.includeLetters}
    Numbers : ${this.includeNumbers}
    Symbols : ${this.includeSymbols}

    `);  // Buttona basınca değeri görebiliriz doğrulama yapabiliriz.
    
  }

 
}
