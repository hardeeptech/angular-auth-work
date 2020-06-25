import { Component, OnInit, Inject } from '@angular/core';
import { GroupService } from 'src/app/shared/group/group.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-listgroup',
  templateUrl: './listgroup.component.html',
  styleUrls: ['./listgroup.component.css']
})
export class ListgroupComponent implements OnInit {

  imageURL = ''
  constructor(private group: GroupService, private trusturl: DomSanitizer,
    @Inject('BASE_IMAGE_URL') _imageurl) {
      this.imageURL = _imageurl
     }

  data = []
  ngOnInit(): void {
    this.getGroupList()
  }

  getGroupList(){
    this.group.getGroupList().subscribe(
      (res:any) => {
        this.data = res.data
      },
      err => {
        console.log(err)
      }
    )
  }

  public getSanitizerUrl(photoname){
    return this.trusturl.bypassSecurityTrustUrl(this.imageURL + photoname)
  }

  public onDelete(id){

    this.group.deleteGroup(id).subscribe(
      (res:any) => {
        console.log(res)
        this.getGroupList()
      },
      err => {
        console.log(err)
      }
    )
  }
}
