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
    taskInfo: "Learn more about Angular development",
    taskDate: "November 5, 2018",
    taskLocation: "Slack" },
    {
      taskId: 2,
      taskName: "Call Mom",
      taskInfo: "Make sure the dog was fed",
      taskDate: "November 6, 2018",
      taskLocation: "Cellphone" },
    {
    taskId: 3,
    taskName: "Buy Pineapples",
    taskInfo: "3 Pineapples for fruit salad",
    taskDate: "November 8, 2018",
    taskLocation: "WalMart" },
    {
    taskId: 4,
    taskName: "Get 8 hours of sleep",
    taskInfo: "Get off of cell phone by 9pm",
    taskDate: "November 10, 2018",
    taskLocation: "Home" },
    {
    taskId: 5,
    taskName: "Finish Homework",
    taskInfo: "Write Biology paper, Do Math quiz",
    taskDate: "November 15, 2018",
    taskLocation: "Library" },
    {
    taskId: 6,
    taskName: "Get Car Washed",
    taskInfo: "Half-Off coupon on fridge",
    taskDate: "November 16, 2018",
    taskLocation: "Kitchen" },
    {
    taskId: 7,
    taskName: "Brew Coffee",
    taskInfo: "Creamer and Sugar in the pantry",
    taskDate: "November 17, 2018",
    taskLocation: "Break Room" },
    {
    taskId: 8,
    taskName: "Job Meeting",
    taskInfo: "Bring notes from last meeting",
    taskDate: "November 20, 2018",
    taskLocation: "Conference Room A" },
  ];
  constructor() { }

  ngOnInit() {
  }

}
