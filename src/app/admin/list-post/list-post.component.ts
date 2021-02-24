import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { TransferDataService } from 'src/app/services/transfer-data.service';
@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.scss']
})
export class ListPostComponent implements OnInit {
  tableData
  defaultPage: number = 1
  datePipeString: string;

  constructor(
    private postService: PostsService,
    private transferDataService: TransferDataService,
  ) { }

  ngOnInit(): void {
    this.getPost(this.defaultPage)
    this.postService.currentListPost.subscribe(data => this.tableData = data);
  }

  getPost(pageNum: Number) {
    this.postService.getAllPost(`list/?page=${pageNum}`).subscribe(res => {
      this.postService.sendDataToListPost(res['data'])
    })
  }

  delete(id: String) {
    this.postService.delete(id)
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
