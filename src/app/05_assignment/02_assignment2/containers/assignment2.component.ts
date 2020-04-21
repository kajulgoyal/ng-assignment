import { Component, Input } from '@angular/core';
import { Todo, todos} from 'src/app/05_assignment/assignment.component';  
       //'src/app/03_pipes/models/todo.interface';
//import { AssignmentComponent } from 'src/app/05_assignment/assignment.component';

@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
  styleUrls: ['./assignment2.component.css']
})
export class Assignment2Component {

  @Input()
  selectedTodo: Todo;

  Todos : Todo[] = todos;

  onSelectTodo(todo : Todo){
    this.selectedTodo = todo;
  }

}
