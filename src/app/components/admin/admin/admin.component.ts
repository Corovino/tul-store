import { Component, OnInit } from '@angular/core';
import  { AuthserviceService } from '../../../shared/services/authservice.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.sass']
})
export class AdminComponent implements OnInit {

  public opened = true;
  constructor( private auth : AuthserviceService ) { }

  ngOnInit(): void {
  }

  logout() : void {
    this.auth.SignOut();
  }

}
