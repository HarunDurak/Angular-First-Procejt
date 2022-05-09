import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


@ViewChild('input') input:any;
@ViewChild('pas') pas:any;
showError = false;


emailInput:any =null

formGrup = new FormGroup({
  name: new FormControl(''),
  password: new FormControl(''),

});

login() {
  console.log(this.emailInput);
  console.log("this.emailInput");
  console.log(this.formGrup.value.name);


  this.apiService.login(this.formGrup.value).subscribe((result:any) =>{
    console.log(result);
    if(!result.success){
      this.showError=true
    }else{
      console.log('ssssssss');

    localStorage.setItem('name',result.user.name)
      this.router.navigateByUrl('/');
    }

  });
}
constructor(private apiService:ApiService, private router:Router) { }
  ngOnInit(): void {
  }

}
