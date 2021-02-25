import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { TransferDataService } from 'src/app/services/transfer-data.service';
import { SweetAlertService } from '../../services/sweet-alert.service';
@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.scss']
})
export class ListPostComponent implements OnInit {
  tableData
  defaultPage: number = 1
  datePipeString: string;
  flag: boolean = false;
  constructor(
    private postService: PostsService,
    private transferDataService: TransferDataService,
    private sweetAlertService: SweetAlertService,
  ) { }

  ngOnInit(): void {
    this.getPost(this.defaultPage)
    this.postService.currentListPost.subscribe(data => this.tableData = data);
  }

  fliter(event) {
    let { value } = event.target;

    this.tableData = this.postService.filterPost(value)
    console.log(value);
  }

  getPost(pageNum?: Number) {
    this.postService.getAllPost(`list/?page=${pageNum}`).subscribe(res => {
      this.postService.sendDataToListPost(res['data'])
    })
  }
  checkBoxValue(event) {
    this.flag = event.target.checked;
    if (this.flag) {
      this.postService.getAllPostNoPagination().subscribe(res => {
        this.postService.sendDataToListPost(res['data'])
      })
    } else {
      this.getPost(this.defaultPage)
    }
  }
  delete(id: String) {
    this.postService.deletePostMongodb(id).subscribe(
      (res) => {
        this.sweetAlertService.successBox(`DELETED SUCCESSFULLY`)
        this.postService.deletePostUI(id)
      },
      (err) => {
        this.sweetAlertService.error(err.message)
      }
    )
  }
  paginationEvent(pageNum: number) {
    this.getPost(pageNum)
  }

  updateAndNavigate(post) {
    //send post to the update component and save to local storage
    this.postService.tranferPost(post)
    //navigate
    this.transferDataService.navigate('updatePost', post._id)
  }
}
