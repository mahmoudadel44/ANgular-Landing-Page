import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AddmemberService } from 'src/app/services/addmember.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  membername: string = '';
  members: any = [];
  // emailinputError: string = 'error';
  // passwordinputError: string = 'error';
  // members: any = [];
  registerForm: FormGroup;
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$';
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private memberOperations: AddmemberService
  ) {
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(10)]],
      age: ['', [Validators.required]],
      email: [
        '',
        [
          Validators.email,
          Validators.required,
          Validators.pattern(this.emailPattern),
        ],
      ],
      // opinion: ['', [Validators.required]],
      // address: this.formBuilder.group({
      //   state: ['', [Validators.required]],
      //   country: ['', [Validators.required]],
      // }),
    });
  }
  onSubmit() {
    console.log(this.registerForm.value);
    if (this.registerForm.valid) {
      this.router.navigate(['/about']);
    }
    // this.registerForm.reset();
  }
  ngOnInit(): void {}
  addMember(member: any) {
    this.members.push(member);
  }
  removeMember() {
    this.members.pop();
  }
}
