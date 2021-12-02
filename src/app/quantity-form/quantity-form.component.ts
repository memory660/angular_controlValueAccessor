import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-quantity-form',
  templateUrl: './quantity-form.component.html',
  styleUrls: ['./quantity-form.component.scss'],
})
export class QuantityFormComponent implements OnInit {
  form = this.fb.group({
    quantity: [
      60,
      [Validators.required, Validators.max(100), Validators.min(0)],
    ],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  submit() {
    if (!this.form.valid) {
      console.log('form not valid');
    } else {
      console.log('form valid');
    }
  }
}
