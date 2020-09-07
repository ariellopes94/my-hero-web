import { Component, OnInit } from '@angular/core';


import { PdfMakeWrapper, Img , Canvas , Rect ,Table , QR , Columns , Txt}  from 'pdfmake-wrapper';
import pdfFonts from "pdfmake/build/vfs_fonts";

@Component({
  selector: 'app-cartao-qr-code',
  templateUrl: './cartao-qr-code.component.html',
  styleUrls: ['./cartao-qr-code.component.css']
})
export class CartaoQrCodeComponent implements OnInit {

  private red: string = '#f80303';
  private blue: string = '#00abb7';
  private black: string = '#000800';
  private brown: string = '#5b2300';
  private skin: string = '#ffb971';

  private codigoDoPaciente : string = "0544ddwd-fdsd";

  constructor() { }

  ngOnInit(): void {
  }

    
  async gerarPDF(){

    
    const pdf = new PdfMakeWrapper();

    

/// CAMINHO  = assets/qr.png
    

/*
pdf.add( await new Img('assets/herder.jpg').build() );


//IMAGREM BASE 64
//pdf.add( await new Img(this.imageBase64).build() );

pdf.add( await new Img('assets/qr.png').build() );

pdf.add( await new Img('assets/folder.jpg').build() );
*/
//
pdf.pageSize('A4');

PdfMakeWrapper.setFonts(pdfFonts);

pdf.add( await new Img('assets/cartaoFrente.png').alignment('center').build() );




pdf.add( await new Img('assets/header.png').alignment('center').build() );

pdf.add(
  pdf.ln(1)
);

pdf.add(
  new QR(`http://myhero.com.br/${this.codigoDoPaciente}`).fit(100).alignment('center').end
)

pdf.add(
  pdf.ln(1)
);

pdf.add(
  new Columns([ 'Ariel L. De S. M. S. So. D. S' ]).columnGap(10).alignment('center').fontSize(12)
                .bold().color(this.red).end
  );
  pdf.add(
    new Columns([ 'Masculino' ]).columnGap(10).alignment('center').fontSize(10).bold().end
    );



pdf.add( await new Img('assets/baixoCartao.png').alignment('center').build() );


//pdf.add(
  //new Columns([ 'Masculino' ]).columnGap(10).alignment('center').fontSize(10).bold().background(this.blue).end
 // );
/*
pdf.add( 
  new Txt('Hello world!').alignment('center').color(this.blue).end
);
*/



/* PULAR LINHAA
pdf.add(
  pdf.ln(100)
);
*/

//pdf.userPassword('123'); SENHA PARA ABRIR O PDF

pdf.create().download();
pdf.create().open();

  
   // pdf.create().download(); BAIXAR DIRETO
    
  }
  
}
