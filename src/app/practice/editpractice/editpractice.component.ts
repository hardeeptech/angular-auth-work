import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PracticeService } from 'src/app/shared/practice/practice.service';

@Component({
  selector: 'app-editpractice',
  templateUrl: './editpractice.component.html',
  styleUrls: ['./editpractice.component.css']
})
export class EditpracticeComponent implements OnInit {

  formModel = {
    GroupName: '',
    Photo: '',
    BadgeId: '',
    Email: '',
    Mobile: '',
    State: '',
    BadgeType: '',
  }

  constructor(private router: ActivatedRoute, private practice: PracticeService) { }

  id = ''
  ngOnInit(): void {
    this.id = this.router.snapshot.paramMap.get("id")
    this.getGroupList(this.id)
  }

  getGroupList(id) {
    
    this.practice.getGroupById(id).subscribe(result => {
      var data = result['data'];
      console.log(data)

      this.formModel.State = data['State'];
      this.formModel.GroupName = data['GroupName'];
      this.formModel.BadgeId = data['BadgeId'];
      this.formModel.Email = data['Email'];
      this.formModel.Mobile = data['Mobile'];
      this.formModel.BadgeType = data['BadgeType'];

    }, error => console.error(error));
  }

  public onsubmit(){
    
  }
}
