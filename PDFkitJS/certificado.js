const PDFDocument = require('pdfkit');
const fs = require('fs')

const 
   trecho1 = "",
   tituloTCC = "",
   trecho2 = "",
   trecho3 = "",
   diaDefesa = "",
   mesDefesa = "",
   anoDefesa = "",
   tituloOrientador = "",
   orientador = "",
   tituloCoOrientador = "",
   coOrientador = "",
   tituloAvaliador1 = "",
   avaliador1 = "",
   tituloAvaliador2 = "",
   avaliador2 = "",
   tituloAvaliador3 = "",
   avaliador3 = "",
   dia = "",
   mes = "",
   ano = "",
   diretor = "Josivaldo Pereira dos Santos";
  
// Create a document
const doc = new PDFDocument;
// Pipe its output somewhere, like to a file or HTTP response
// See below for browser usage
doc.pipe(fs.createWriteStream('certificado.pdf'));

// Add an image, constrain it to a given size, and center it vertically and horizontally
doc.image('../img/logoFacomp.png', 100, 30, {
   align: 'left',
   valign: 'top'
});

//Header
doc.fontSize(12)
   .text(
      'UNIVERSIDADE FEDERAL DO PARÁ\n'+
      'INSTITUTO DE CIÊNCIAS EXATAS E NATURAIS\n'+
      'FACULDADE DE COMPUTAÇÃO'
      ,80, 50,{
         align: 'center'
      });

doc.image('../img/logoUFPA.png', 435, 35, {
   align: 'right',
   valign: 'top'
});
//End of Header

//pessoa = Pessoa que vai estar na condição de orientador, co-orientador ou avaliador.
/*
   Avaliadores:
   trecho1 = `${tituloPessoa} ${pessoa} participou na condição de ${condicao} da Banca de`
   trecho2 = `, apresentado pelo discente ${discente}`
   trecho3 = '.'
   
   Discente:
   trecho1 = `discente realizou a`
   trecho2 = ''
   trecho3 = `, sendo o trabalho ${aprovado} com conceito ${conceito}.`
*/

doc.font('Times-Bold')
   .fontSize(20)
   .text(`C E R T I F I C A D O`
      ,80, 200,{
         align: 'center',
      });

doc.fontSize(12)
   .text(`Certificamos para os devidos fins que o(a) ${trecho1} Defesa Pública do Trabalho de Conclusão de Curso intitulado '${tituloTCC}'${trecho2}, no dia ${diaDefesa} de ${mesDefesa} de ${anoDefesa}${trecho3}`
      ,20, 350,{
         align: 'justify',
      });

doc.font('Times-BoldItalic')
.fontSize(12)
   .text(`Banca:`
      ,100, 450,{
         align: 'left',
      });

doc.fontSize(12)
   .text(
      '${tituloOrientador} ${orientador} (Orientador(a))\n'+
      '${tituloCoOrientador} ${coOrientador} (Co-Orientador(a))\n'+
      '${tituloAvaliador1} ${avaliador1} (Avaliador(a))\n'+
      '${tituloAvaliador1} ${avaliador1} (Avaliador(a))\n'+
      '${tituloAvaliador3} ${avaliador3} (Avaliador(a))'
      ,150, 480,{
         align: 'left'
      });


doc.fontSize(12)
   .text(`Belém, ${dia} de ${mes} de ${ano}.`
      ,100, 550,{
         align: 'right',
      });

doc.fontSize(12)
   .text(`____________________________________`
      ,100, 640,{
         align: 'center',
      });

doc.fontSize(12)
   .text(`${diretor}\n
      Diretor(a) da Faculdade de Computação`
      ,80, 670,{
         align: 'center',
      });

// Finalize PDF file
doc.end();