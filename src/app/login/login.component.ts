import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  login = new FormControl('',
    [Validators.required]);

  password = new FormControl('',
    [Validators.required]);
  constructor(private router: Router,
    public afAuth: AngularFireAuth,) { }

  realizarLogin() {
    console.log('Login: ' + this.login.value);
    console.log('Senha  ' + this.password.value);

    this.afAuth
      .signInWithEmailAndPassword(this.login.value!, this.password.value!)
      .then((result) => {
        console.log(result.user);
        //this.router.navigate(['/layout/produto']);
      })
      .catch((error) => {
        console.log(error);
      });


    //this.router.navigate(['/layout/produto']);
  }

}
