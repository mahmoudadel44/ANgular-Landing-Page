import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  firstCategories: any = [
    {
      categoryImg: '../../../../assets/car (1).png',
      CategoryName: 'Vehicles',
      categoryNum: '(598)',
    },
    {
      categoryImg: '../../../../assets/Phone.png',
      CategoryName: 'Mobiles',
      categoryNum: '(354)',
    },
    {
      categoryImg: '../../../../assets/television (1).png',
      CategoryName: 'Electronics',
      categoryNum: '(687)',
    },
    {
      categoryImg: '../../../../assets/furniture.png',
      CategoryName: 'Furniture',
      categoryNum: '(923)',
    },
    {
      categoryImg: '../../../../assets/suitcase.png',
      CategoryName: 'Jobs',
      categoryNum: '(456)',
    },
    {
      categoryImg: '../../../../assets/Real Estate.png',
      CategoryName: 'Real Estate',
      categoryNum: '178',
    },
    {
      categoryImg: '../../../../assets/customer-support.png',
      CategoryName: 'Services',
      categoryNum: '(134)',
    },
    {
      categoryImg: '../../../../assets/education.png',
      CategoryName: 'Education',
      categoryNum: '(546)',
    },
    {
      categoryImg: '../../../../assets/pets.png',
      CategoryName: 'Pets',
      categoryNum: '(123)',
    },
    {
      categoryImg: '../../../../assets/high-heel.png',
      CategoryName: 'Fashion',
      categoryNum: '(852)',
    },
    {
      categoryImg: '../../../../assets/baby.png',
      CategoryName: 'Baby Products',
      categoryNum: '(147)',
    },
    {
      categoryImg: '../../../../assets/sports.png',
      CategoryName: 'Sports',
      categoryNum: '(198)',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
