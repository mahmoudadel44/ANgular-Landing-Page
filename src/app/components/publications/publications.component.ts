import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.css'],
})
export class PublicationsComponent implements OnInit {
  publications: any = [
    {
      adsTitle: 'Create a Free Acount',
      adsImg: 'fas fa-user fa-3x',
      adsDesc:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate, recusandae. Alias quasi tenetur delectus odio nemo debitis porro in repellendus? Voluptatibus ea blanditiis ex. Porro fugit libero est unde atque.',
    },
    {
      adsTitle: 'Post your Free Ad',
      adsImg: 'fab fa-black-tie fa-3x',
      adsDesc:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate, recusandae. Alias quasi tenetur delectus odio nemo debitis porro in repellendus? Voluptatibus ea blanditiis ex. Porro fugit libero est unde atque.',
    },
    {
      adsTitle: 'Sold or Buy',
      adsImg: 'fas fa-file-spreadsheet fa-3x',
      adsDesc:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate, recusandae. Alias quasi tenetur delectus odio nemo debitis porro in repellendus? Voluptatibus ea blanditiis ex. Porro fugit libero est unde atque.',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
