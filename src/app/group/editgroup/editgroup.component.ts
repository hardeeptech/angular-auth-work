import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GroupService } from 'src/app/shared/group/group.service';

@Component({
  selector: 'app-editgroup',
  templateUrl: './editgroup.component.html',
  styleUrls: ['./editgroup.component.css']
})
export class EditgroupComponent implements OnInit {

  constructor(private router: ActivatedRoute, private group: GroupService) { }

  id = ''

  formModel = {
    GroupName: '',
    Photo: '',
    BadgeId: '',
    Email: '',
    Mobile: '',
    State: '',
    BadgeType: '',
  }

  ngOnInit(): void {
    this.id = this.router.snapshot.paramMap.get('id')
    this.getDataById()
  }

  data = ''
  getDataById(){
    this.group.getGroupById(this.id).subscribe(
      (res:any) => {
        console.log(res)
        this.data = res.data
        this.formModel.GroupName = this.data['GroupName']
        this.formModel.State = this.data['State']
        this.formModel.Mobile = this.data['Mobile']
        this.formModel.BadgeId = this.data['BadgeId']
        this.formModel.BadgeType = this.data['BadgeType']
        this.formModel.Email = this.data['Email']

      },
      err => {
        console.log(err) 
      }
    )
  }

  public onsubmit(){
    const data = new FormData()
    data.append("GroupName",this.formModel.GroupName)
    data.append("Photo",this.formModel.Photo)
    data.append("BadgeId",this.formModel.BadgeId)
    data.append("Email",this.formModel.Email)
    data.append("Mobile",this.formModel.Mobile)
    data.append("State",this.formModel.State)
    data.append("BadgeType",this.formModel.BadgeType)

    this.group.updateGroup(data,this.id).subscribe(
      (res:any) => {
        console.log(res)
      },
      err => {
        console.log(err)
      }
    )
  }
}
