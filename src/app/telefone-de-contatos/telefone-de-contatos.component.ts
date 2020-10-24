ng simport { ContatoDeEmergencia } from './../../models/contatoDeEmergencia.model';
import { Component, EventEmitter, OnInit, Output, Testability } from '@angular/core';
import { SimpleModalService } from 'ngx-simple-modal';
import { ConfirmModalComponent } from '../confirm-modal/confirm-modal.component';
import { EditarContatoEmergenciaModalComponent } from '../editar-contato-emergencia-modal/editar-contato-emergencia-modal.component';

@Component({
  selector: 'app-telefone-de-contatos',
  templateUrl: './telefone-de-contatos.component.html',
  styleUrls: ['./telefone-de-contatos.component.css']
})
export class TelefoneDeContatosComponent implements OnInit {
  confirmResult = null;

  idLinhaParaEdita: number;

@Output() contatosDeEmergenciasOutput  = new EventEmitter<ContatoDeEmergencia[]>();

  contatosDeEmergencias = [
  /*  { id: '1', nome: 'Ariel', paretesco: 2, numero: "67991557455" },
    { id: '2', nome: 'Pedro', paretesco: 3, numero: "67991557455" },
    { id: '3', nome: 'Daniel', paretesco: 3, numero: "67991557455" } */
  ];

  constructor(private simpleModalService: SimpleModalService) { }

  ngOnInit() {

  }

  model: any = {};
  model2: any = {};

  addContato() {
    this.contatosDeEmergencias.push(this.model);
    this.contatosDeEmergenciasOutput.emit(this.contatosDeEmergencias);

    this.model = {};
  }

  myValue;

  editarContatos(editContatoId) {

    this.idLinhaParaEdita = editContatoId;
    this.simpleModalService
      .addModal(EditarContatoEmergenciaModalComponent, {

        id: this.model2.id = this.contatosDeEmergencias[editContatoId].id,
        nome: this.model2.nome = this.contatosDeEmergencias[editContatoId].nome,
        paretesco: this.model2.paretesco = this.contatosDeEmergencias[editContatoId].paretesco,
        numero: this.model2.numero = this.contatosDeEmergencias[editContatoId].numero,
      })


      .subscribe(isConfirmed => {
        this.model2.id = isConfirmed.id;
        this.model2.nome = isConfirmed.nome;
        this.model2.paretesco = isConfirmed.paretesco;
        this.model2.numero = isConfirmed.numero;

        let editEmployeeInfo = this.idLinhaParaEdita;

        for (let i = 0; i < this.contatosDeEmergencias.length; i++) {
          if (i == editEmployeeInfo) {
            this.contatosDeEmergencias[i] = this.model2;
            
            this.model2 = {};
          }
        }
      });
  }


  deletarConfirmar(id) {
    this.simpleModalService
      .addModal(ConfirmModalComponent, {
        title: "Confirmation",
        message: this.contatosDeEmergencias[id].nome
      })
      .subscribe(isConfirmed => {
        this.confirmResult = isConfirmed;
        if (this.confirmResult == true) {
          this.contatosDeEmergencias.splice(id, 1);

          this.contatosDeEmergenciasOutput.emit(this.contatosDeEmergencias);

         // this.contatosDeEmergenciasOutput.pu =  this.contatosDeEmergencias     //
        }
      });
  }
}