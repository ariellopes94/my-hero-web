import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-telefone-de-contatos',
  templateUrl: './telefone-de-contatos.component.html',
  styleUrls: ['./telefone-de-contatos.component.css']
})
export class TelefoneDeContatosComponent implements OnInit {

 
  newEmployeeClicked = false;

  employees = [
    { id: '1', nome: 'Ariel',paretesco : 2, numero : 67991557455},
    { id: '1', nome: 'Pedro',paretesco : 3, numero : 67991557455}
  ];

  color;

  constructor() { }

  ngOnInit() {

  }

  model: any = {};
  model2: any = {}; 

  addEmployee() {
    this.employees.push(this.model);
    this.model = {};
  }

  deleteEmployee(i) {
    
    this.employees.splice(i,1);
    console.log(i);
  }

  myValue;

  //{ id: '1', nome: 'Lara',paretesco : 3, numero : 67991557455}
  editEmployee(editEmployeeInfo) {
    this.model2.id = this.employees[editEmployeeInfo].id;
    this.model2.nome = this.employees[editEmployeeInfo].nome;
    this.model2.paretesco = this.employees[editEmployeeInfo].paretesco;
    this.model2.numero = this.employees[editEmployeeInfo].numero;
    this.myValue = editEmployeeInfo;
  }

  updateEmployee() {
    let editEmployeeInfo = this.myValue;
    for(let i = 0; i < this.employees.length; i++) {
      if(i == editEmployeeInfo) {
        this.employees[i] = this.model2;
        this.model2 = {};
      }
    }
  }





  addNewEmployeeBtn() {
    this.newEmployeeClicked = !this.newEmployeeClicked;
  }

   changeColorOne() {
     this.color = !this.color;
     if (this.color) {
       return '#ffffff';
     } else {
      return '#f6f6f6';
     }
  }


}