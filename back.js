const Ata = require('./ata')
const Cd = require('./cd')
const Certificado = require('./certificado')
const Credenciamento = require('./credenciamento')
const Divulgacao = require('./divulgacao')
const fs = require('fs');
const pdf = require('html-pdf');

const discente = 'discente'
const data = {
  CURSO: 'cbcc'.toUpperCase(),
  DISCENTE: discente.toUpperCase(),
  salaTCC: 'salatcc',
  tituloTCC: 'titulotcc',
  nomeDosAlunos: 'nomedosalunos',
  horarioTCC: 'horariotcc',
  tituloOrientador: 'tituloorientador',
  orientador: 'orientador',
  tituloAvaliador1: 'tituloavaliador1',
  avaliador1: 'avaliador1',
  tituloCoOrientador: 'titulocoorientador',
  coOrientador: 'coorientador',
  anoAtual: 'anoatual',
  tituloAvaliador2: 'tituloavaliador2',
  avaliador2: 'avaliador2',
  tituloDiretor: 'titulodiretor',
  diretor: 'diretor',
  membroConvidado: 'membroconvidado',
  matricula: 'matricula',
  dia: 'dia',
  mes: 'mes',
  ano: 'ano',
  diaTCC: 'diatcc',
  mesTCC: 'mestcc',
  anoTCC: 'anotcc',
  resumo: 'resumo',
  tituloPessoa: 'titulopessoa',
  pessoa: 'pessoa',
  condicao: 'condicao',
  discente: discente,
  aprovado: 'aprovado',
  conceito: 'conceito',
  diaDefesa: 'diadefesa',
  mesDefesa: 'mesdefesa',
  anoDefesa: 'anodefesa',
  diretor: 'diretor'
}
function batchCreatePDF(documentModels) {
  documentModels.forEach(document => {
    const options = {
      format: 'A4',
      orientation: document.orientation
    }
    pdf.create(document.doc(data), options).toStream((err, stream) => {
      stream.pipe(fs.createWriteStream(`./${document.name}`))
    })
  })
}
const docList = [
  {
    name: 'Ata.pdf',
    doc: Ata,
    orientation: 'portrait'
  },
  {
    name: 'Cd.pdf',
    doc: Cd,
    orientation: 'landscape'
  },
  {
    name: 'Certificado.pdf',
    doc: Certificado,
    orientation: 'portrait'
  },
  {
    name: 'Credenciamento.pdf',
    doc: Credenciamento,
    orientation: 'portrait'
  },
  {
    name: 'Divulgacao.pdf',
    doc: Divulgacao,
    orientation: 'portrait'
  }
]
batchCreatePDF(docList)
