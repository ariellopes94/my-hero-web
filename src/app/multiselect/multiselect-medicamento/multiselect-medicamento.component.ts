import { MedicamentosService } from './../../../services/medicamentos.service';
import { Component, OnInit, EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Medicamento } from '../../../models/medicamento.model';

@Component({
  selector: 'app-multiselect-medicamento',
  templateUrl: './multiselect-medicamento.component.html',
  styleUrls: ['./multiselect-medicamento.component.css']
})
export class MultiselectMedicamentoComponent implements OnInit {


  constructor(public medicamentosService: MedicamentosService) { }

  @Output() medicamentoOutput = new EventEmitter();

  medicamento : Medicamento [];
  
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  
  ngOnInit(){

 //TABELA
  
      this.medicamentosService.medicamentosBuscarTodos()
      .subscribe(reponse => {
        this.medicamento = reponse;
        this.dropdownList = this.medicamento;
      },
      error => {
         console.log(error);
      });

      this.selectedItems = [
                             
                          ];
      this.dropdownSettings = { 
                                singleSelection: false, 
                                text:"Select Countries",
                                selectAllText:'Selecionar todos',
                                unSelectAllText:'UnSelect All',
                                enableSearchFilter: true,
                                labelKey: "nome",
                                enableCheckAll:false,
                                filterSelectAllText: "selecionar todos",
                                filterUnSelectAllText : "Desmarcar todos",
                                searchPlaceholderText:'Procurar',
                                classes:"myclass custom-class"
                              };            
  }

  
  onItemSelect(item:any){
  
      this.medicamentoOutput.emit(this.selectedItems);
  
  }

  //AQUI Q ELE RETGORNA
  OnItemDeSelect(item:any){
      console.log("OnItemDeSelect " + item);
      console.log(this.selectedItems);

      
    
  }
  onSelectAll(items: any){
      console.log("onSelectAll " + items);


   
  }
  onDeSelectAll(items: any){
      console.log("onDeSelectAll " + items);


   
  }

}

