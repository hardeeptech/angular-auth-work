import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserdataService } from 'src/app/shared/userdata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  })

  constructor(private userdata: UserdataService, private router: Router) { }

  ngOnInit(): void {
    if(this.userdata.getData() != null){
      this.router.navigateByUrl('layout/dashboard')
    }
  }

  public onClick(){
    console.log(this.loginForm.value)
    console.log(this.loginForm.get('username').value)

    if (this.loginForm.get('username').value == 'happy') {
      this.userdata.setData(this.loginForm.value)
      this.router.navigateByUrl('layout/dashboard')
    } else {
      alert('Wrong username')
    }
  }

}
