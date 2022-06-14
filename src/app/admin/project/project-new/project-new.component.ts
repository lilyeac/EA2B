import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-project-new',
  templateUrl: './project-new.component.html',
  styleUrls: ['./project-new.component.css']
})
export class ProjectNewComponent implements OnInit {

  constructor(
    private fb:FormBuilder
  ) { }

  projectForm = this.fb.group({
   
    nombres:['',Validators.required],
    ubicacion:['',Validators.required],
precio:['', Validators.required]
})

OnSubmit(){
if(this.projectForm.valid){
console.log(this.projectForm.value)
}else{
alert("Formulario no valido ...")
}}

ngOnInit(): void {
}
}
