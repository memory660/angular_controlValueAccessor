import { Component, OnInit, Input } from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
} from '@angular/forms';

@Component({
  selector: 'app-custom-counter',
  templateUrl: './custom-counter.component.html',
  styleUrls: ['./custom-counter.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: CustomCounterComponent,
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: CustomCounterComponent,
    },
  ],
})
export class CustomCounterComponent implements ControlValueAccessor {
  counter = 0;

  @Input()
  increment = 0;

  disabled = false;
  private onTouched!: Function;
  private onChanged!: Function;

  onAdd() {
    this.markAsTouched();
    if (!this.disabled) {
      this.counter += this.increment;
      this.onChanged(this.counter);
    }
  }

  onRemove() {
    this.markAsTouched();
    if (!this.disabled) {
      this.counter -= this.increment;
      this.onChanged(this.counter);
    }
  }

  writeValue(counter: number) {
    this.counter = counter;
  }

  registerOnChange(fn: any): void {
    this.onChanged = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }

  markAsTouched() {
    if (!this.onTouched()) {
      this.onTouched();
      this.onChanged(true);
    }
  }

  /*
  La méthode validate() sera appelée avec l'instance de FormControl lorsque la valeur du contrôle change.
  Lorsqu'elle est appelée, nous vérifions la valeur du contrôle actuel par rapport à la réponse à la question.
  Si elle ne correspond pas, nous retournons un objet d'erreur, qui marquera le contrôle actuel comme invalide.
  */
  validate(control: AbstractControl): ValidationErrors | null {
    const counter = control.value;
    if (counter <= 0) {
      // envoi une erreur si <= 0
      return {
        mustBePositive: {
          counter,
        },
      };
    }
    return null;
  }
}
