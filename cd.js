module.exports = function model({
  CURSO,
  tituloTCC,
  nomeDosAlunos,
  orientador,
  coOrientador,
  anoAtual,
}) {
  return `<!DOCTYPE html>
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
                        <p align="center"><strong>${tituloTCC}</strong></p>
                        <br>
                        <br>
                        <p align="center"><strong>${nomeDosAlunos}</strong></p>
                        <br>
                        <br>
                        <p align="center">Orientador: ${orientador}</p>
                        <p align="center">Co-Orientador: ${coOrientador}</p>
                        <br>

                        <p align="center">Belém ${anoAtual}</p>

                  </div>
                  <!--COSTA-->
                  <div class="cd" style="float: right;">
                        <br>
                        <p align="center"><strong>${tituloTCC}</strong></p>
                        <br>
                        <br>
                        <p align="center"><strong>${nomeDosAlunos}</strong></p>
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
                        <p align="center">${orientador}</p>
                  </div>
            </div>
            <p class="aviso"><em>Deve ser entregue na secretaria da faculdade, já com a assinatura do seu Orientador.</em></p>
            <p class="aviso"><em>Em caso de rasura, ou quaisquer formas de deterioração deste papel, por favor, trocar na secretaria</em></p> 
            
	</body>
</html>`
}
