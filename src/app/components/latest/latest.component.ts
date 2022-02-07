import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-latest',
  templateUrl: './latest.component.html',
  styleUrls: ['./latest.component.css'],
})
export class LatestComponent implements OnInit {
  latestAds: any = [
    {
      title: 'spiderman homecoming 2017 wallpaper',
      city: 'China',
      time: '2:49 pm',
      salary: '$206.90',
      latestimg:
        '../../../assets/spiderman_homecoming_2017-wallpaper-480x320.jpg',
    },
    {
      title: 'forest Creek / 2 Good wallpaper',
      city: 'Colombia',
      time: '3:10 pm',
      salary: '$110.80',
      latestimg: '../../../assets/forest_creek_2-wallpaper-480x320.jpg',
    },
    {
      title: 'Mother Elephant and baby love wallpaper',
      city: 'Comoros',
      time: '5:03 pm',
      salary: '$305.70',
      latestimg:
        '../../../assets/mother_elephant_and_baby_love-wallpaper-480x320.jpg',
    },
    {
      title: 'space / eye / Good / wallpaper',
      city: 'Cuba',
      time: '7:30 pm',
      salary: '$402.30',
      latestimg: '../../../assets/space_eye-wallpaper-480x320.jpg',
    },
    {
      title: 'New laptop-wallpaper for all good users',
      city: 'Angola',
      time: '3:49 pm',
      salary: '$320.10',
      latestimg: '../../../assets/laptop-wallpaper-480x320.jpg',
    },
    {
      title: 'road green trees orest- Good wallpaper',
      city: 'Argentina',
      time: '2:10 pm',
      salary: '$210.50',
      latestimg:
        '../../../assets/road_green_trees_forest-wallpaper-480x320.jpg',
    },
    {
      title: 'strawberry For ice cream dessert wallpaper',
      city: 'Bahrain',
      time: '4:03 pm',
      salary: '$825.60',
      latestimg:
        '../../../assets/strawberry_ice_cream_dessert-wallpaper-480x320.jpg',
    },
    {
      title: 'beast Wallpaper stay in the forest',
      city: 'Brazil',
      time: '4:20 pm',
      salary: '$602.80',
      latestimg: '../../../assets/beast_2-wallpaper-480x320.jpg',
    },
    {
      title: 'running wallpaper of Horse In the forst',
      city: 'Bulgaria',
      time: '12:50 pm',
      salary: '$200.20',
      latestimg: '.././../assets/running_5-wallpaper-480x320.jpg',
    },
    {
      title: 'city reflection / night Good wallpaper',
      city: 'Cameroon',
      time: '1:11 pm',
      salary: '$880.70',
      latestimg: '../../../assets/city_reflection_night-wallpaper-480x320.jpg',
    },
    {
      title: 'fresh Good Apples leaves Wooden / wallpaper',
      city: 'Canada',
      time: '1:23 pm',
      salary: '$705.40',
      latestimg:
        '../../../assets/fresh_apples_leaves_wooden-wallpaper-480x320.jpg',
    },
    {
      title: 'unravel / puzzle video game wallpaper',
      city: 'Chad',
      time: '9:50 pm',
      salary: '$602.20',
      latestimg:
        '../../../assets/unravel_puzzle_video_game-wallpaper-480x320.jpg',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
