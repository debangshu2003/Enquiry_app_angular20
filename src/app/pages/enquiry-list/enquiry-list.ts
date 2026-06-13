import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../services/master-service';

@Component({
  selector: 'app-enquiry-list',
  imports: [],
  templateUrl: './enquiry-list.html',
  styleUrl: './enquiry-list.css',
})
export class EnquiryList implements OnInit {

  masterSr = inject(MasterService);
  enquiryList: any[] = [];

  ngOnInit(): void {
this.getAllEnquiry();
  }

  getAllEnquiry() {
    this.masterSr.getAllEnquiry().subscribe({
      next: (result: any) => {
this.enquiryList = result.data;
      }
    })
  }
}