import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PracticeService } from 'src/app/shared/practice/practice.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-addpractice',
  templateUrl: './addpractice.component.html',
  styleUrls: ['./addpractice.component.css']
})
export class AddpracticeComponent implements OnInit {

  formGroup = new FormGroup({
    GroupName: new FormControl('', [Validators.required]),
    Photo: new FormControl('', [Validators.required]),
    BadgeId: new FormControl('', [Validators.required]),
    Email: new FormControl('', [Validators.required]),
    Mobile: new FormControl('', [Validators.required]),
    State: new FormControl('', [Validators.required]),
    BadgeType: new FormControl('', [Validators.required]),
  })

 
  constructor(private practice: PracticeService, private toast: ToastrService) { }

  ngOnInit(): void {
  }

  get f(){
    return this.formGroup.controls
  }

  public onChange(event){
    if(event.target.files.length > 0){
      let file = event.target.files[0]
      this.formGroup.patchValue({
        Photo: file
      })
    }
  }

  public onsubmit(){
    const form = new FormData()
    form.append("Email",this.formGroup.get('Email').value)
    form.append("GroupName", this.formGroup.get('GroupName').value);
    form.append("Mobile", this.formGroup.get('Mobile').value);
    form.append("State", this.formGroup.get('State').value);
    form.append("BadgeId", this.formGroup.get('BadgeId').value);
    form.append("Photo", this.formGroup.get('Photo').value);
    form.append("BadgeType", this.formGroup.get('BadgeType').value);

    this.practice.addGroup(form).subscribe(
      (res:any) => {
        this.formGroup.reset()
        this.toast.success("Done","Message")
      },
      err => {
        this.toast.error(err,"Error")
      }
    )
  }

}
