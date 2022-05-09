import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  ngOnInit(): void {

  }
  constructor(config: NgbAccordionConfig, public authService:AuthService, private router:Router) {
    // customize default values of accordions used by this component tree
    config.closeOthers = true;
    config.type = 'info';
  }

  logOut(){
    console.log('ssssssssss');

    this.authService.logOut()
    window.location = '/' as any

  }

}
