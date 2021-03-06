
const fs = require('fs');
const pdf = require('html-pdf');
var options = { format: 'A4', "orientation": "landscape" };

const 
	CURSO = 'cagado',
	TituloDoTCC = 'sdfsd',
	NomeDosAlunos = "dsdfsdf",
	Orientador = "Filho da Puta",
	CoOrientador = "dfsdfsdf",
	AnoAtual = 'wdfsdfsdfs'


const html = 
	`
		<!DOCTYPE html>
<html>
	<body>
		<style type="text/css">
			p {
				font-size: 70%;
			}
                  .aviso {
                        font-size: 110%;
                        font-weight: 600;
                        
                  }
			.cd {
				height: 453.5px;
                        width: 453.5px;
			}
                  .recorte {
                        height: 453.5px;
                        width: 907px;
                        border: 1px dashed;
                  }
			.textBody {
				margin: 10px;
			}
		</style>
		
            <div class="recorte">
                  <!--FRENTE-->
                  <div class="cd" style="float: left">
                        <center><img align="middle" src="img/logoUFPA.png"></center>
                        <p align="center">UNIVERSIDADE FEDERAL DO PARÁ</p>
                        <p align="center">INSTITUTO DE CIÊNCIAS EXATAS E NATURAIS</p>
                        <p align="center">FACULDADE DE COMPUTAÇÃO</p>
                        <p align="center">CURSO DE BACHARELADO EM ${CURSO}</p>
                        <br>
                        <p align="center"><strong>${TituloDoTCC}</strong></p>
                        <br>
                        <br>
                        <p align="center"><strong>${NomeDosAlunos}</strong></p>
                        <br>
                        <br>
                        <p align="center">Orientador: ${Orientador}</p>
                        <p align="center">Co-Orientador: ${CoOrientador}</p>
                        <br>

                        <p align="center">Belém ${AnoAtual}</p>

                  </div>
                  <!--COSTA-->
                  <div class="cd" style="float: right;">
                        <br>
                        <p align="center"><strong>${TituloDoTCC}</strong></p>
                        <br>
                        <br>
                        <p align="center"><strong>${NomeDosAlunos}</strong></p>
                        <br>
                        <br>
                        <br>
                        <br>
                        <p class="textBody">
                              Declaro que este CD-ROM contém o trabalho de conclusão corrigido e finalizado conforme minha orientação.
                        </p>
                        <br>
                        <br>
                        <br>
                        <br>
                        <br>
                        <p align="center">
                            _______________________________________
                        </p>
                        <p align="center">${Orientador}</p>
                  </div>
            </div>
            <p class="aviso"><em>Deve ser entregue na secretaria da faculdade, já com a assinatura do seu Orientador.</em></p>
            <p class="aviso"><em>Em caso de rasura, ou quaisquer formas de deterioração deste papel, por favor, trocar na secretaria</em></p> 
            
	</body>
</html>
	`

pdf.create(html, options).toFile("C:\\Users\\Jairo\\Desktop\\document.pdf", function(err, res) {
  if (err) return console.log(err);
  console.log("Foi, mano!"); // { filename: '/app/businesscard.pdf' }
});