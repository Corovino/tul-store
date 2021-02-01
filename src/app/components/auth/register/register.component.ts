import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthserviceService } from 'src/app/shared/services/authservice.service';
import { UserInterface } from '../../../shared/models/user.interface';
import { MustMatch } from '../../../shared/utils/must-match.validator';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {

  public registerForm : FormGroup;

  constructor(private auth : AuthserviceService, 
              private route :Router,
              private formBuilder: FormBuilder) { }
  ngOnInit(): void {
      this.registerForm = this.formBuilder.group({
        first_name: ['', [Validators.required]],
        last_name: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        password_confirmation: ['', Validators.required],
      },
      {
         validator: MustMatch('password', 'password_confirmation')
      })
  }

  onRegister( form :UserInterface) : void {
    let { email, password } = form;   
    this.auth.registerByEmail(email, password)
 }

}
