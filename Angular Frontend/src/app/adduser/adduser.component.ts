import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  contactForm!: FormGroup;
  ckDep: boolean = false;
  countrydata: any = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private service: UserserviceService
  ) {}

  ngOnInit(): void {
    this.getUsers();
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      country: ['', Validators.required],
      discussionTopic: ['', Validators.required]
    });
  }

  AddUsers() {
    if (this.contactForm.invalid) {
      this.ckDep = true;
      return;
    } else {
      console.log("register", this.contactForm.value);
      this.service.addUser(this.contactForm.value).subscribe((res: any) => {
        Swal.fire({
          icon: 'success',
          title: 'Data Added successfully!',
          text: 'Your Contact Data has been added successfully.',
          confirmButtonText: 'OK'
        });
        this.contactForm.reset();
        this.getUsers();
        console.log(res);
      });
    }
  }

  getUsers() {
    this.service.getUser().subscribe(res => {
      this.countrydata = res.data;
      console.log("Userdata", this.countrydata);
    });
  }
}
