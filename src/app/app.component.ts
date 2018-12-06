import { Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
myForm: FormGroup;
constructor(fb: FormBuilder) {

  this.myForm = fb.group({'nom': new FormControl(), 'age': new FormControl(), 'ville': new FormControl()});

}


  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  afficherForm() {
      alert(this.myForm);
  }

}
