import { AuthenticationService } from './../../providers/authentication.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    data : Date = new Date();
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    error = '';
    constructor(private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService) {
            if (this.authenticationService.currentUserValue) {
                this.router.navigate(['/']);
              }
         }

    ngOnInit() {
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('full-screen');
        body.classList.add('login');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
        if (navbar.classList.contains('nav-up')) {
            navbar.classList.remove('nav-up');
        }
        this.loginForm = new FormGroup({
            email: new FormControl(''),
            password: new FormControl(''),
          });
      
          // get return url from route parameters or default to '/'
          this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }
    get f() { return this.loginForm.controls; }

    ngOnDestroy(){
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('full-screen');
        body.classList.remove('login');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
    }
    onSubmit() {
        this.submitted = true;
    
        // stop here if form is invalid
        if (this.loginForm.invalid) {
          return;
        }
        this.loading = true;
        console.log(this.f);
        this.authenticationService.login(this.f.email.value, this.f.password.value)
          .pipe(first())
          .subscribe(
            data => {
              console.log(data);
              this.router.navigate([this.returnUrl]);
            },
            error => {
              this.error = error;
              this.loading = false;
            });
      }

}
