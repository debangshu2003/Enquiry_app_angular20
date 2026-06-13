import { Component, OnInit, inject } from '@angular/core'; 
import { MasterService } from '../../services/master-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-submit-enquiry',
  imports: [FormsModule],
  templateUrl: './submit-enquiry.html',
  styleUrl: './submit-enquiry.css',
})
export class SubmitEnquiry implements OnInit {

  masterService = inject(MasterService); 

  statusList: any[] = [];
  categoryList: any[] = [];

  newEnquiryObj: any = {
    enquiryId: 0,
    customerName: "",
    customerEmail: "",
    customerPhone: "",
    message: "",
    categoryId: 0,
    statusId: 0,
    enquiryType: "",
    isConverted: false,
    enquiryDate: new Date().toISOString().slice(0, 16),
    followUpDate: new Date().toISOString().slice(0, 16),
    feedback: ""
  };

  ngOnInit(): void {
    this.getStatus();
    this.getCategory(); 
  }

  getStatus() {
    this.masterService.getAllStatuses().subscribe({
      next: (result: any) => {
        this.statusList = result.data;
      }
    });
  }

  getCategory() {
    this.masterService.getAllCategories().subscribe({
      next: (result: any) => {
        this.categoryList = result.data;
      }
    });
  }

  saveEnquiry() {
    this.masterService.saveNewEnquiry(this.newEnquiryObj).subscribe({
      next: (result: any) => {
        alert("Enquiry Submitted successfully!");
      },
      error:(error: any) => {
        alert("Error From Api")
      }
    })
  }
}