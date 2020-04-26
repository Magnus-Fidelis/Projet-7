import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-private-message-list',
  templateUrl: './private-message-list.component.html',
  styleUrls: ['./private-message-list.component.sass']
})
export class PrivateMessageListComponent implements OnInit {

  messageList = [
    {
      id: 1,
      title: "Trinity Fall",
      date: new Date(),
      picture: "https://i.imgur.com/kemkKA9.jpg",
      membres: [
        {
          id: 17,
          name: "Scénariste fou"
        },
        {
          id: 19,
          name: "Trinity-Fall"
        }
      ]
    },
    {
      id: 2,
      title: "Drogue",
      date: new Date(),
      picture: "https://avatarfiles.alphacoders.com/160/thumb-160091.jpg",
      membres: [
        {
          id: 17,
         name: "Codeuse acharnée"
        }
      ]
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
