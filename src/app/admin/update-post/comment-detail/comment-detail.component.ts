import { Component, OnInit } from '@angular/core';
import { CommentService } from '../../../services/comment.service';
import { PostsService } from '../../../services/posts.service';

@Component({
  selector: 'app-comment-detail',
  templateUrl: './comment-detail.component.html',
  styleUrls: ['./comment-detail.component.scss']
})
export class CommentDetailComponent implements OnInit {
  panelOpenState = false;
  comment
  constructor(
    private commentService: CommentService,
    private postService: PostsService,


  ) { }

  ngOnInit(): void {
    this.commentFromPost()

  }
  commentFromPost() {
    let id = this.postService.currentUserValue._id
    this.commentService.getCommentFromPost(id).subscribe(res => {
      this.comment = res['data']
      
    })
  }
  show(id) {
    console.log(id)
  }
  delete(id) {
    console.log(id)

  }
  hide(id) {
    console.log(id)
  }
}
