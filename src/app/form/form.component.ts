import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, CommonModule],
})
export class FormComponent {

  formData = {
    firstname: '',
    lastname: '',
    address: '',
    address2: '',
    city: '',
    state: '',
    postalcode: ''
  };

  submitted: boolean = false;

  onSubmit(){
    this.submitted = true;
  }

  clear(){
    this.formData = {
    firstname: '',
    lastname: '',
    address: '',
    address2: '',
    city: '',
    state: '',
    postalcode: ''
    }; 
  }
}
