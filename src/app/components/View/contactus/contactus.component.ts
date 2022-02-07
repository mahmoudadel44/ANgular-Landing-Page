import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css'],
  animations: [
    trigger('myAnimate', [
      transition('void=>*', [
        style({
          color: '#FFF',
          backgroundColor: 'Green',
          transform: 'translateX(-100%)',
        }),
        animate(1000),
      ]),
    ]),
  ],
})
export class ContactusComponent implements OnInit {
  usersList: string[] = [];
  constructor(public translate: TranslateService) {}

  changeLanguage(lang: string) {
    this.translate.use(lang);
  }

  ngOnInit(): void {}

  adduser(myUser: any) {
    if (myUser.value.length) {
      this.usersList.push(myUser.value);
      myUser.value = '';
    }
  }
  deleteUser(userNum: any) {
    this.usersList.splice(userNum, 1);
  }
}
