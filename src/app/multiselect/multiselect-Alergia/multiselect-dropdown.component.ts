import { AlergiasService } from './../../../services/alergias.service';
import { Alergia } from 'src/models/alergia.model';

import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-multiselect-alergia',
  templateUrl: './multiselect-dropdown.component.html',
  styleUrls: ['./multiselect-dropdown.component.css']
})
export class MultiselectDropdownComponent implements OnInit {


  constructor(public alergiasService: AlergiasService) { }

  @Output() alergiaOutput = new EventEmitter();

  alergia : Alergia [];
  
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  
  ngOnInit(){

 //TABELA
  
      this.alergiasService.alergiasBuscarTodos()
      .subscribe(reponse => {
        this.alergia = reponse;
        this.dropdownList = this.alergia;
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
  
      this.alergiaOutput.emit(this.selectedItems);
  
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
