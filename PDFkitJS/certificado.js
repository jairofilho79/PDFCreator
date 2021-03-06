module.exports = function model(doc, {
  tituloTCC,
  diaDefesa,
  mesDefesa,
  anoDefesa,
  tituloOrientador,
  orientador,
  tituloCoOrientador,
  coOrientador,
  tituloAvaliador1,
  avaliador1,
  tituloAvaliador2,
  avaliador2,
  tituloAvaliador3,
  avaliador3,
  dia,
  mes,
  ano,
  diretor,
  pessoa, // orientador, co-orientador ou avaliador
  tituloPessoa,
  condicao, // pessoa
  discente
}) {
  // const doc = new PDFDocument
  
//Header
doc.image('./img/logoFacomp.png', 50, 30, {
   align: 'left',
   valign: 'top'
});
doc.fontSize(12)
   .text(
      `
      UNIVERSIDADE FEDERAL DO PARÁ
      INSTITUTO DE CIÊNCIAS EXATAS E NATURAIS
      FACULDADE DE COMPUTAÇÃO
      `
      ,60, 40,{
         align: 'center'
      });

doc.image('./img/logoUFPA.png', 500, 35, {
   align: 'right',
   valign: 'top'
});
//End of Header
  
  //pessoa = Pessoa que vai estar na condição de orientador, co-orientador ou avaliador.
  /*
     Avaliadores e Orientador e Coorientador:
  */

  // QUANDO UTILIZAR QUAL TRECHO? R: Utilizar o abaixo quando for gerar para Avaliador, Orientador e Coorientador e o outro para Certificar o Discente.
  const trecho1 = `${tituloPessoa}(a) ${pessoa} participou na condição de ${condicao} da Banca de`
  const trecho2 = `, apresentado pelo(a) discente ${discente}`
  const trecho3 = '.'
  /* 
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
        })
  
  doc.fontSize(12)
     .text(`Certificamos para os devidos fins que o(a) ${trecho1} Defesa Pública do Trabalho de Conclusão de Curso intitulado '${tituloTCC}'${trecho2}, no dia ${diaDefesa} de ${mesDefesa} de ${anoDefesa}${trecho3}`
        ,20, 350,{
           align: 'justify',
        })
  
  doc.font('Times-BoldItalic')
  .fontSize(12)
     .text(`Banca:`
        ,100, 450,{
           align: 'left',
        })
  
  doc.fontSize(12)
     .text(
        `${tituloOrientador}(a) ${orientador} (Orientador(a))
${coOrientador ? `${tituloCoOrientador}(a) ${coOrientador} (Co-Orientador(a))`: ``}
${tituloAvaliador1}(a) ${avaliador1} (Avaliador(a))
${tituloAvaliador2}(a) ${avaliador2} (Avaliador(a))
${avaliador3 ? `${tituloAvaliador3}(a) ${avaliador3} (Avaliador(a))`: ``}`
        ,150, 480,{
           align: 'left'
        })
  
  
  doc.fontSize(12)
     .text(`Belém, ${dia} de ${mes} de ${ano}.`
        ,100, 560,{
           align: 'right',
        })
  
  doc.fontSize(12)
     .text(`____________________________________`
        ,100, 640,{
           align: 'center',
        })
  
  doc.fontSize(12)
     .text(`${diretor}\n
      Diretor(a) da Faculdade de Computação`
        ,80, 670,{
           align: 'center',
        })
  
  return doc
}