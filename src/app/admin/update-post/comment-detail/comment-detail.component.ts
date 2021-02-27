import { Component, OnInit } from '@angular/core';
import { SweetAlertService } from 'src/app/services/sweet-alert.service';
import { CommentService } from '../../../services/comment.service';
import { PostsService } from '../../../services/posts.service';
// import { default } from '../../plugins/doc';

@Component({
  selector: 'app-comment-detail',
  templateUrl: './comment-detail.component.html',
  styleUrls: ['./comment-detail.component.scss']
})
export class CommentDetailComponent implements OnInit {
  panelOpenState = false;
  comment
  defaultAvatar: String = '"https://vcdn-thethao.vnecdn.net/2021/02/23/ronaldo-1614048018-8500-1614048103.jpg"'
  constructor(
    private commentService: CommentService,
    private postService: PostsService,
    private sweetAlertService: SweetAlertService

  ) { }

  ngOnInit(): void {
    this.commentFromPost()

  }
  commentFromPost() {
    let id = this.postService.currentUserValue._id
    this.commentService.getCommentFromPost(id).subscribe(res => {
      this.commentService.sendCurrentDetailedComment(res['data'])
      this.comment = this.commentService.value_storageDetailedComment
    })
  }

  updatePostAdmin(cmt) {
    this.commentService.updateComment(cmt).subscribe(
      (res) => {
        this.sweetAlertService.successBox(res['message'])
      }
    )
  }

  show(comment) {
    comment.isActive = true;
    this.updatePostAdmin(comment)
  }

  delete(comment) {
    this.commentService.deleteComment(comment._id).subscribe(res => {
      this.commentService.deleteCommentUI(comment._id);
      this.sweetAlertService.successBox(res['message']);
      this.commentFromPost();
    })
  }

  hide(comment) {
    comment.isActive = false;
    this.updatePostAdmin(comment)
  }

}
