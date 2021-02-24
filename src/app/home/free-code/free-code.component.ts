import { Component, OnInit, AfterViewInit } from '@angular/core';
import { SubService } from '../../services/sub.service';
import { TransferDataService } from '../../services/transfer-data.service';
import * as $ from 'jquery';
declare var $: any;

@Component({
  selector: 'app-free-code',
  templateUrl: './free-code.component.html',
  styleUrls: ['./free-code.component.scss']
})
export class FreeCodeComponent implements OnInit, AfterViewInit {
  freeCode$: any;

  constructor(
    private subService: SubService,
    private transferDataService: TransferDataService,
  ) { }

  ngOnInit(): void {
    this.handleFreeCode()
  }
  handleFreeCode() {
    const idFreeCategory = "600d7b0e1bf06860543ca81b"
    this.subService.allPostInOneSub(idFreeCategory, 'postOfSub').subscribe(res => {
      this.freeCode$ = res['data'];
      console.log("freecode", this.freeCode$)
    })
  }

  navigate(id_post: string, id_sub: string) {
    let URL = `sub/${id_sub}/post`
    this.transferDataService.sendDataToStoragePost(null)
    this.transferDataService.navigate(URL, id_post)
  }

  ngAfterViewInit() {
    setTimeout(() => {
      $('.owl-carousel').owlCarousel({
        margin: 5,
        dots: true,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 3
          },
          1000: {
            items: 3
          }
        }
      })
    }, 3000)

  }
}
