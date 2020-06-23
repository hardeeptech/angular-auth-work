import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserdataService } from 'src/app/shared/userdata.service';
import { Router } from '@angular/router';
import { UserserviceService } from 'src/app/shared/user/userservice.service';
import { ToastrService } from 'ngx-toastr';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    badgeId: new FormControl(''),
    password: new FormControl('')
  })

  constructor(private userdata: UserdataService, private router: Router,
     private userservice: UserserviceService,
     private toast: ToastrService,
     private ngxService: NgxUiLoaderService) { }

  ngOnInit(): void {
    if(this.userdata.getData() != null){
      this.router.navigateByUrl('layout/dashboard')
    }
  }

  public onClick(){
    this.ngxService.start();
    console.log(this.loginForm.value)
    // console.log(this.loginForm.get('username').value)

    this.userservice.login(this.loginForm.value).subscribe(
      (res: any) => {
        this.ngxService.stop()
        this.toast.success('Login Successfully','Success')
        this.userdata.setData(res)
        this.router.navigateByUrl('layout/dashboard')
      },
      err => {
        this.ngxService.stop()
        this.toast.error('Wrong username and password','Error')
        console.log(err)
      }
    )

    // if (this.loginForm.get('username').value == 'happy') {
    //   this.userdata.setData(this.loginForm.value)
    //   this.router.navigateByUrl('layout/dashboard')
    // } else {
    //   alert('Wrong username')
    // }
    
  }

}
