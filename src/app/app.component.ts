import { Component } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  visitToSave: any = {
    name: '',
    email: '',
    companyName: '',
    host: '',
  };
  
  czech = false;
  showCode = false;
  qrdata = '';
  url: SafeUrl = '';

  ngOnInit(): void {}
  onCodeChange(url: SafeUrl) {
    this.url = url;
  }
  async asignValues() {
    //const valuesArray = Object.values(this.visitToSave);
    const name = this.transferToReadable(this.visitToSave.name)
   
    const email = this.transferToReadable(this.visitToSave.email);
    const companyName = this.transferToReadable(this.visitToSave.companyName);
    const host = this.transferToReadable(this.visitToSave.host);
    const valuesArray = Object.values([name,email,companyName,host]);
    this.qrdata = JSON.stringify(valuesArray);
  }
  showCzech() {
    this.czech = !this.czech;
    
  }

  showQrCode() {
    this.showCode = true;
  }
  hideQrCode() {
    this.showCode = false;
  }
  
transferToReadable(value: string): string {
  const specialCharacters: string[] = ["ě","š","č","ř","ž","ý","á","í","é","ť","ď","ň","ů","ú","ó","Ě","Š","Č","Ř","Ž","Ý","Á","Í","É","Ť","Ď","Ň","Ů","Ú","Ó",".", "-", "&"];
  const replacementCharacters: string[] = ["e1","s1","c1","r1","z1","y2","a2","i2","e2","t1","d1","n1","u3","u2","o2","E1","S1","C1","R1","Z1","Y2","A2","I2","E2","T1","D1","N1","U3","U2","O2","4", "5", "6"];

  let characters: string[] = [];
  for (let i = 0; i < value.length; i++) {
    // Find if the current character matches any special character
    const index = specialCharacters.indexOf(value[i]);
    if (index !== -1) {
      // Replace with the corresponding replacement character
      characters.push(replacementCharacters[index]);
    } else {
      // Keep the original character
      characters.push(value[i]);
    }
  }
  const result = characters.join("");
  return result; // Return the modified string
}

transferFromReadable(value: string): string {
  const replacementCharacters: string[] = ["ě", "š", "č", "ř", "ž", "ý", "á", "í", "é", "ť", "ď", "ň", "ů", "ú", "ó", "Ě", "Š", "Č", "Ř", "Ž", "Ý", "Á", "Í", "É", "Ť", "Ď", "Ň", "Ů", "Ú", "Ó", ".","-", "&"];
  const specialCharacters: string[] = ["e1", "s1", "c1", "r1", "z1", "y2", "a2", "i2", "e2", "t1", "d1", "n1", "u3", "u2", "o2", "E1", "S1", "C1", "R1", "Z1", "Y2", "A2", "I2", "E2", "T1", "D1", "N1", "U3", "U2", "O2", "4", "5", "6"];

  let result = value;

  // Replace multi-character sequences with their corresponding replacements
  for (let i = 0; i < specialCharacters.length; i++) {
    const specialChar = specialCharacters[i];
    const replacementChar = replacementCharacters[i];
    // Use global regex to replace all occurrences
    const regex = new RegExp(specialChar, "g");
    result = result.replace(regex, replacementChar);
  }

  console.log(result);
  return result;
}









}

