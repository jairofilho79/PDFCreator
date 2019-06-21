const fs = require('fs')
const Cd = require('./PDFkitJS/cd')
const Certificado = require('./PDFkitJS/certificado')
const Credenciamento = require('./PDFkitJS/credenciamento')
const Divulgacao = require('./PDFkitJS/divulgacao')

const dados = {
  curso: 'curso',
  tituloTCC: 'titulotcc',
  nomeDosAlunos: 'nome dos alunos',
  tituloOrientador: 'tituloorientador',
  orientador: 'orientador',
  tituloCoOrientador: 'titulocoorientador',
  coOrientador: 'coorientador',
  ano: 'ano',
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

const cdStream = Cd(dados)
const certStream = Certificado(dados)
const credStream = Credenciamento(dados)
const divuStream = Divulgacao(dados)
cdStream.pipe(fs.createWriteStream('cd.pdf'))
certStream.pipe(fs.createWriteStream('cert.pdf'))
credStream.pipe(fs.createWriteStream('cred.pdf'))
divuStream.pipe(fs.createWriteStream('divu.pdf'))
