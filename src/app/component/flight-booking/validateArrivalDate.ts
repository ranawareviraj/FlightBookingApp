import { AbstractControl } from "@angular/forms";

export function validateArrivalDate(control: AbstractControl): { [key: string]: boolean } | null {
  if (control.value) {
    let today = new Date();
    let arrivalDate = new Date(control.value);
    if (arrivalDate < today) {
      return { 'arrivalDate': true };
    }
  }
  return null;
}
