import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthserviceService } from 'src/app/shared/services/authservice.service';
import { UserInterface } from '../../../shared/models/user.interface';

@Component({
  selector: 'app-loguin',
  templateUrl: './loguin.component.html',
  styleUrls: ['./loguin.component.sass']
})
export class LoguinComponent implements OnInit {

  public loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  constructor(private authSvc: AuthserviceService, private route: Router) { }

  ngOnInit(): void {
  }

  onLogin(form: UserInterface) {
       let { email, password } = form; 
      this.authSvc.loguinByEmail(email, password)
      
      
  }

}
