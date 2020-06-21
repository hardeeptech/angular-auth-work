import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../shared/userdata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topbar-page',
  templateUrl: './topbar-page.component.html',
  styleUrls: ['./topbar-page.component.css']
})
export class TopbarPageComponent implements OnInit {

  name = ''
  constructor(private userdata: UserdataService, private router: Router) { }

  ngOnInit(): void {
    this.name = this.userdata.getData()
  }

  public logout(){
    this.userdata.removeData()
    this.router.navigateByUrl('user/login')
  }

}
