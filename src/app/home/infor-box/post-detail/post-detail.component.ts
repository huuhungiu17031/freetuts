import { Component, OnInit, Input } from '@angular/core';
import { TransferDataService } from '../../../services/transfer-data.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {
  @Input() item: any;
  leftContent: any
  rightContent: any
  constructor(
    private transferDataService: TransferDataService
  ) { }

  ngOnInit(): void {
    let copyContent = [...this.item]
    this.leftContent = copyContent.shift();
    console.log("Left content", this.leftContent)
    this.rightContent = copyContent;
    console.log("Right content", this.rightContent)
  }


  navigate(id_post: string, id_sub: string) {
    let URL = `sub/${id_sub}/post`
    this.transferDataService.sendDataToStoragePost(null)
    this.transferDataService.navigate(URL, id_post)
  }
}
