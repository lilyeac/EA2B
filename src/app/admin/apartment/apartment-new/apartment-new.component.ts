import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-apartment-new',
  templateUrl: './apartment-new.component.html',
  styleUrls: ['./apartment-new.component.css']
})
export class ApartmentNewComponent implements OnInit {

  constructor(
    private fb:FormBuilder)
   {}

   ApartForm = this.fb.group({
   
       tipo:['',Validators.required],
        nombre:['',Validators.required],
    area:[0, Validators.required],
    piso: ['', Validators.required]
  })

  OnSubmit(){
    if(this.ApartForm.valid){
    console.log(this.ApartForm.value)
  }else{
    alert("Formulario no valido ...")
  }}

  ngOnInit(): void {
  }
}
