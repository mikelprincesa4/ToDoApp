import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TasksService } from '../tasks.service';
import { FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  id: number;
  private sub: any;
  tasks = [];
  taskForm : FormGroup;
  newName: string;

  constructor(private route: ActivatedRoute, private taskService: TasksService) { }

  ngOnInit() {
    this.tasks = this.taskService.getTasks();
    this.sub = this.route.params.subscribe(params => {
         this.id = +params['id']; // (+) converts string 'id' to a number
    });
    this.taskForm = new FormGroup ({
      name: new FormControl('');
      info: new FormControl('');
      date: new FormControl('');
      location: new FormControl('');
    });
  }

  onSubmit(): void {
    this.taskService.updateName(this.taskForm.value.name, this.id);
    this.taskService.updateInfo(this.taskForm.value.info, this.id);
    this.taskService.updateDate(this.taskForm.value.date, this.id);
    this.taskService.updateLocation(this.taskForm.value.location, this.id);
  }
}
