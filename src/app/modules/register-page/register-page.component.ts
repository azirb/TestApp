import {
  Component,
  OnInit
} from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators
} from "@angular/forms";
import { Router } from '@angular/router';
import {
  regexpNumbers,
  regexppassword
} from "../../common/constants/regex.constants";

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  public static passwordMatch(controlName: string, matchingName: string ): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const sourceCtrl = control.get(controlName);
      const targetCtrl = control.get(matchingName);

      return sourceCtrl && targetCtrl && sourceCtrl.value !== targetCtrl.value
        ? { notMatch: true }
        : null;
    }
  }

  public registerForm: FormGroup= new FormGroup('');
  public numberInput: FormControl = new FormControl('', [Validators.required, Validators.pattern(regexpNumbers)])
  public switchToCode: boolean = true;
  public displayEmail: string | null = '';
  public wrongNumber: boolean = false;

  constructor(private router : Router) {
  }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.required, Validators.pattern(regexppassword)]),
      secondPassword: new FormControl('', [Validators.required])
    }, { validators: RegisterPageComponent.passwordMatch('password', 'secondPassword') })
  }

  public submitForm(): void {
    if (this.registerForm.valid) {
      this.switchToCode = false;
      this.displayEmail = this.registerForm.controls['email'].value;
    } else {
      this.registerForm.markAllAsTouched();
    }
  }

  public numberChange(event: any): void {
    if (event.target.value >= 10) {
      event.target.value = 9;
    }
  }

  public submitCode(): void {
      this.router.navigate(['/userpage'])
  }

}
