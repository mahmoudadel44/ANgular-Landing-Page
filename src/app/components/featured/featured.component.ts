import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css'],
})
export class FeaturedComponent implements OnInit {
  Advirtesments: any = [
    {
      title: 'Mercedes benz vision avtr 2020 Electric Car',
      city: 'Cairo',
      time: '2:49 pm',
      salary: '$206.90',
      advirtisImg:
        '../../../../assets/mercedes_benz_vision_avtr_2020_electric_car-wallpaper-480x320.jpg',
    },
    {
      title: 'Types Of Samsung Glaxy New Phone',
      city: 'Paris',
      time: '3:10 pm',
      salary: '$110.80',
      advirtisImg:
        '../../../../assets/pen_agenda_smartphone-wallpaper-480x320.jpg',
    },
    {
      title: 'smart dog / wallpaper in The Office',
      city: 'Dubai',
      time: '5:03 pm',
      salary: '$305.70',
      advirtisImg: '../../../../assets/smart_dog-wallpaper-480x320.jpg',
    },
    {
      title: 'Canon SW Powershot A Great D-SLR',
      city: 'Lebanon',
      time: '7:30 pm',
      salary: '$402.30',
      advirtisImg:
        '../../../../assets/zenith_film_camera-wallpaper-480x320.jpg',
    },
  ];
  constructor() {}
  @Input() showValue: string = '';

  ngOnInit(): void {}
}
