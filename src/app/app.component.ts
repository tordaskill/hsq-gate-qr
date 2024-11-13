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
  qrdata = '';
  url: SafeUrl = '';

  ngOnInit(): void {}
  onCodeChange(url: SafeUrl) {
    this.url = url;
  }
  asignValues() {
    const valuesArray = Object.values(this.visitToSave);
    this.qrdata = JSON.stringify(valuesArray);
  }
  showCzech() {
    this.czech = !this.czech;
    
  }


}
