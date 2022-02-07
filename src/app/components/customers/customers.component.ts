import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
})
export class CustomersComponent implements OnInit {
  customers: any = [
    {
      customerImg: '../../../assets/garry-miller.jpg',
      customerName: 'Garry Miller Jr (Tutor)',
      customerAddress: 'London,United Kingdom',
      customerDesc:
        '"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam architecto, distinctio sapiente molestiae asperiores illo quas quasi necessitatibus ducimus nihil aperiam, a cum earum ipsam soluta odit voluptatem in ad."',
    },
    {
      customerImg: '../../../assets/david-jackson.jpg',
      customerName: 'David Jackson (Student)',
      customerAddress: 'London,United Kingdom',
      customerDesc:
        '"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam architecto, distinctio sapiente molestiae asperiores illo quas quasi necessitatibus ducimus nihil aperiam, a cum earum ipsam soluta odit voluptatem in ad."',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
