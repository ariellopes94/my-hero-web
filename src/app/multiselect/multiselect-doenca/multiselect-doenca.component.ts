import { DoencasService } from './../../../services/doencas.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Doenca } from '../../../models/doenca.model';

@Component({
  selector: 'app-multiselect-doenca',
  templateUrl: './multiselect-doenca.component.html',
  styleUrls: ['./multiselect-doenca.component.css']
})
export class MultiselectDoencaComponent implements OnInit {

  constructor(public dencasService : DoencasService) { }

  @Output() doencaOutput = new EventEmitter();
  

  doenca : Doenca [];
 
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  
  ngOnInit(){

 //TABELA
  
      this.dencasService.doencasBuscarTodos()
      .subscribe(reponse => {
        this.doenca = reponse;
        this.dropdownList = this.doenca;
      },
      error => {
         console.log(error);
      });

      this.selectedItems = [
                             
                          ];
      this.dropdownSettings = { 
                                singleSelection: false, 
                                text:"Selecione Doencas",
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
  
      this.doencaOutput.emit(this.selectedItems);
  
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

