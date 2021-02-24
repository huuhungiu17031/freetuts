import { Component, OnInit } from '@angular/core';
import { SubService } from '../../services/sub.service';
import { TransferDataService } from '../../services/transfer-data.service';
import { SubDetail } from '../../model/sub.model';
@Component({
  selector: 'app-infor-box',
  templateUrl: './infor-box.component.html',
  styleUrls: ['./infor-box.component.scss']
})
export class InforBoxComponent implements OnInit {

  subCategory$: Array<SubDetail>;
  latestContent: any;
  remainContent: any;


  constructor(
    private subService: SubService,
    private transferDataService: TransferDataService,
  ) { }

  ngOnInit(): void {
    this.getPost()
  }


  getPost() {
    this.subService.allPostInSub('list').subscribe(results => {
      this.subCategory$ = this.filter(results)
      console.log("Sub", this.subCategory$)
    })
  }
  // filter idProgrammingCategory out of the array
  filter(data: any) {
    let newData = []
    const idProgrammingCategory = "600d71151bf06860543ca7fc"
    for (let item of data) {
      if (item.category !== idProgrammingCategory && item.title !== 'Chuyên đề' && item.title !== "Mã giảm giá") {
        newData.push(item)
      }
    }
    return newData
  }

  redirectToSub(prefix, id) {
    this.transferDataService.navigate(prefix, id);
  }



}