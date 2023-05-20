import { Component, OnInit } from '@angular/core';
import {TaskModel} from '../Models/taskModel';
import { NgForm } from '@angular/forms';
import { taskservices } from './Service/TaskService';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit{
 
  usersList:TaskModel[]=[];
  isEdit:boolean=false;
constructor(private tservice:taskservices){} 
   
 task: TaskModel=new TaskModel();
 
 onSubmit(form:NgForm)
 {
  if(!this.isEdit){
     //console.log(form.value);
     this.tservice.AddTask(this.task).subscribe(res=>{
      console.log(res);
      form.resetForm();
      this.getAll();
    })
  }
  else{
       this.tservice.UpdateTask(form.value).subscribe(res=>{
      console.log(res);
      form.resetForm();
      this.isEdit=false;
      this.getAll();
    })
  }
 }

  getAll(){
    this.tservice.GetAll().subscribe(res=>{
      console.log(res);
      this.usersList=res;
    })
  }
  ngOnInit(){
    this.getAll();
  }
  edit(data:TaskModel)
  {
   this.isEdit=true;
   this.task=data;
  }
  delete(model:TaskModel){
    const confirm=window.confirm("Are you sure want to delete?")
    if(confirm)
    {
     this.tservice.DeleteTask(model.id).subscribe(res=>{
      this.getAll();
    })
    }

    
  }
}
