import { Component, OnInit, Inject } from '@angular/core';
import { PracticeService } from 'src/app/shared/practice/practice.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-listpractice',
  templateUrl: './listpractice.component.html',
  styleUrls: ['./listpractice.component.css']
})
export class ListpracticeComponent implements OnInit {

  groupList = []
  BaseUrl = ''
  constructor(private service: PracticeService, private sanitizer: DomSanitizer, @Inject('BASE_IMAGE_URL') baseU) { 
    this.BaseUrl = baseU
  }

  ngOnInit(): void {
    this.getAllGroupList()
  }

  public getSanitizeUrl(url: string){
    return this.sanitizer.bypassSecurityTrustUrl(this.BaseUrl+url)
  }

  getAllGroupList() {
    this.service.getAllGroupList().subscribe(result => {
      this.groupList = result['data'];
    }, error => console.error(error));
  }

  public onDelete(id){

  }

}
