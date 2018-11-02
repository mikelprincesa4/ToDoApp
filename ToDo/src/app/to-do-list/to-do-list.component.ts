import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
  title = "Tasks";
  tasks = [{
    taskId: 1,
    taskName: "Meet with Patrice",
    taskDate: "November 5, 2018",
    taskLocation: "Slack" },
    {
      taskId: 2,
      taskName: "Call Mom",
      taskDate: "November 6, 2018",
      taskLocation: "Cellphone" },
    {
    taskId: 3,
    taskName: "Buy Pineapples",
    taskDate: "November 8, 2018",
    taskLocation: "WalMart" },
    {
    taskId: 4,
    taskName: "Get 8 hours of sleep",
    taskDate: "November 10, 2018",
    taskLocation: "Home" },
  ];
  constructor() { }

  ngOnInit() {
  }

}
