import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-addgroup',
  templateUrl: './addgroup.component.html',
  styleUrls: ['./addgroup.component.css']
})
export class AddgroupComponent implements OnInit {

  formGroup = new FormGroup({
    GroupName: new FormControl('', [Validators.required]),
    Photo: new FormControl('', [Validators.required]),
    BadgeId: new FormControl('', [Validators.required]),
    Email: new FormControl('', [Validators.required]),
    Mobile: new FormControl('', [Validators.required]),
    State: new FormControl('', [Validators.required]),
    BadgeType: new FormControl('', [Validators.required]),
  })

  constructor() { }

  ngOnInit(): void {
  }

  public onFile(evnt){
    if(evnt.target.files.length > 0)
    {
      this.formGroup.patchValue({
        Photo: evnt.target.files[0]
      })
    }
  }

  get f(){
    return this.formGroup.controls
  }

  public onsubmit(){
    const data = new FormData()
    data.append("GroupName",this.formGroup.get("GroupName").value)
    data.append("Photo",this.formGroup.get("Photo").value)
    data.append("GroupName",this.formGroup.get("GroupName").value)
  }

}
