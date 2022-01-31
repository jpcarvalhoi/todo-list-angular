import { Component, DoCheck, OnInit } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit, DoCheck {

   public setEmitTaskList(s : string) {
      
      this.taskList.push({task : s, checked : false});
   }
    
   public taskList : Array<TaskList> = [

   ];

  constructor() { }

  ngOnInit(): void {
  }

  ngDoCheck(): void {
      this.taskList.sort((first, last) => Number(first.checked) - Number(last.checked))
  }

  public validationInput(task : string, index : number){
    if (!task.length) {
      const confirm = window.confirm("Deseja excluir o item?");
      if (confirm) {
        this.deleteItemTaskList(index);
      }
    }
  }

  public deleteItemTaskList(index : number) {
    this.taskList.splice(index,1);
  }

  public deleteAll() {
    if (window.confirm("Deseja realmente apagar tudo")){
      this.taskList = [];
    }
  }

}
