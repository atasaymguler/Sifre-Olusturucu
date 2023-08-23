import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  password:string = "";
  length: number = 0; //Başlangı. değeri ataması yaptık
  includeLetters: boolean = false;
  includeNumbers: boolean = false;
  includeSymbols: boolean = false;

  modifyLength(value: string) {
    debugger;
    //console.log(value); girilen değerin geli gelmediğini kontrol ederiz
    const parsedValue = parseInt(value);  // Burada ise gelen string değeri int'e çevirdik
    if (!isNaN(parsedValue)) {  //Burada ise girilen değer (!isNan) bir not a number(sayı değilse) yani sayı değilsenin değili yani sayı ise bu değeri length'e aktardık.


      this.length = parsedValue;
      console.log(this.length);

    } else {
      alert("Error : Lüten Sayı Giriniz")
    }

  }

  modifyLetters() {

    this.includeLetters = !this.includeLetters;  // Ben burada true dersem ticki geri aldığım da bunun false olması lazım o yüzden değiline eşitledik 


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

    if(this.includeNumbers)    //Eğer checkboxlar tiklenmişse valide o alanda ki tüm değerler aktarılıyor
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


    //Seçilmiş olan checkboxların değerleri validChar'a aktarılıyor, döngü ile kullanıcının girdiği sayı kadar işlem yapılıyor,
    //İşlemin içeriği şu şekilde; Math.random fonks sayesin de  0 ile 1 arasında random bir değer(sayı) atanıyor(1 dahil değil) 
    //Daha sonra atanan değer ile validCharın uzunluğu çarpılıp, Math.floor fonks ile aşağı yuvarlanıyor yani hep tam sayı geliyor 
    //Bu değer index'e aktarılıyor ve validChar[index] ile karakterler arasında hangisine denk geliyorsa o string değeri generate'e aktarılyor.
    //Döngü boyunca aktarılma gerçekleşiyor ve string değer ile string değer toplanırsa yanyana yazılıyor ve yeni bir sşifre oluşuyor
    //Bu yeni şifreyi [value]="password" ile inputa yazdırıyoruz.

}

}
