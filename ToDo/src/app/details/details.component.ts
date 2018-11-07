import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  id: number;
  private sub: any;
  tasks = [];

  constructor(private route: ActivatedRoute, private taskService: TasksService) { }

  ngOnInit() {
    this.tasks = this.taskService.getTasks();
    this.sub = this.route.params.subscribe(params => {
         this.id = +params['id']; // (+) converts string 'id' to a number
    });
  }
}
