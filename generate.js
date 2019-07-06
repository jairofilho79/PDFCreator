const PDFDocument = require('pdfkit')
const fs = require('fs')
const Cd = require('./PDFkitJS/cd')
const Ata = require('./PDFkitJS/ata')
const Certificado = require('./PDFkitJS/certificado')
const Credenciamento = require('./PDFkitJS/credenciamento')
const Divulgacao = require('./PDFkitJS/divulgacao')
const ListaFrequencia = require('./PDFkitJS/listaFrequencia')
const CertificadoConclusao = require('./PDFkitJS/certificadoConclusao')

const dados = {
  curso: 'curso',
  tituloTCC: 'titulotcc',
  nomeDosAlunos: 'nome dos alunos',
  tituloOrientador: 'tituloorientador',
  orientador: 'orientador',
  tituloCoOrientador: 'titulocoorientador',
  coOrientador: 'coorientador',
  diaDefesa: 'diadefesa',
  mesDefesa: 'mesdefesa',
  anoDefesa: 'anodefesa',
  tituloAvaliador1: 'tituloavaliador1',
  avaliador1: 'avaliador1',
  tituloAvaliador2: 'tituloavaliador2',
  avaliador2: 'avaliador2',
  tituloAvaliador3: 'tituloavaliador3',
  avaliador3: 'avaliador3',
  dia: 'dia',
  mes: 'mes',
  ano: 'ano',
  tituloDiretor: 'titulodiretor',
  diretor: 'diretor',
  matricula: 'matricula',
  membroConvidado: 'membro convidado',
  discente: 'discente',
  palavrasChave: 'palavras chave',
  horarioDefesa: 'horariodefesa',
  salaDefesa: 'saladefesa',
  resumo: 'resumo',
  pessoa: 'pessoa',
  tituloPessoa: 'titulopessoa',
  condicao: 'condicao'
}

let doc = new PDFDocument( {autoFirstPage: false} )

doc = CertificadoConclusao(doc, dados)
doc.addPage()
doc = Ata(doc, dados)
// doc.addPage()
doc = Cd(doc, dados)
doc.addPage()
doc = Certificado(doc, dados)
doc.addPage()
doc = Credenciamento(doc, dados)
doc.addPage()
doc = Divulgacao(doc, dados)
doc.addPage()
doc = ListaFrequencia(doc, dados)
doc.end()

doc.pipe(fs.createWriteStream('./PDFs/unico.pdf'))
