import { Medicamento } from '../Medicamento';
import { Doenca } from '../Doenca';
import { Alergia } from '../Alergia';
import { ContatosDeEmergencia } from '../ContatosDeEmergencia';
export interface FichaPacienteDTO {

    id: string;
    nome: string;
    idade: number
    doadorDeOrgao: boolean;
    telefone: string;
    peso: number;
    altura: number;
    nascimento: string;
    sexo: string;
    tipoSanguinio: number;
    estadoMoradia: number;
    observacao: string;

    alergias: Alergia[];
    contatosDeEmergencias: ContatosDeEmergencia[];
    doencas: Doenca[];
    medicamentos: Medicamento[];
}