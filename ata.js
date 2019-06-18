const model = `<!DOCTYPE html>
<html>
	<body>
		<style type="text/css">
			.outer {
				display: flex;
                        flex-direction: row;
                        flex-wrap: wrap;
                        justify-content: center;
                        align-items: center;
			}
                  .certificado {
                        font-weight: 700;
                        font-size: 150%;
                  }
		</style>
            <div class="outer">
                  <div style="display: flex;">
                        <img src="img/logoFacomp.png">
                        <div>
                              <p align="center">UNIVERSIDADE FEDERAL DO PARÁ</p>
                              <p align="center">INSTITUTO DE CIÊNCIAS EXATAS E NATURAIS</p>
                              <p align="center">FACULDADE DE COMPUTAÇÃO</p>
                        </div>
                        <img src="img/logoUFPA.png">
                  </div>   
            </div>
		
            <br>
            <br>
            <p align="center" class="certificado">
                  ATA DA DEFESA PÚBLICA DO TRABALHO DE CONCLUSÃO DO CURSO DE ${CURSO} REALIZADO PELO(A) DISCENTE ${DISCENTE}.
            </p>
            <br>
            <br>
            <!--variável que está em uppercase é porque precisa ter o toUpperCase()-->
            <div class="outer">
                  <p>
                        Realizou-se na ${salaTCC}, do Campus Básico da Universidade Federal do Pará, situado no Bairro do Guamá, nesta cidade de Belém do Pará, a sessão de Defesa Pública do Trabalho de Conclusão de Curso intitulado '${tituloTCC}', apresentado pelo(a) discente ${DISCENTE}. A sessão foi instalada às ${horarioTCC} h pelo(a)${tituloOrientador} ${orientador}. A referida banca foi constituída pelos seguintes membros:${tituloOrientador} ${orientador} (ORIENTADOR(A)) ${tituloCoOrientador}${coOrientador} (COORIENTADOR(A)) ${tituloAvaliador1} ${avaliador1} (AVALIADOR(A))${tituloAvaliador2} ${avaliador2} (AVALIADOR(A)). A Banca Examinadora, após a exposição do mencionado Trabalho pelo discente, passou a arguí-lo. E nada mais havendo a tratar, o presidente deu por encerrada a Defesa do Trabalho, agradecendo a presença de todos, e para constar a legitimidade do que foi deliberado, lavrou-se a presente ata que após lida, será assinada pelos membros presentes na reunião. Belém, 13 de fevereiro de 2019.
                  </p> 
            </div>
            
            <br>
            <br>
            
            <label>Conceito: </label> &nbsp;
            <input type="checkbox" name="">INS
            <input type="checkbox" name="">REG
            <input type="checkbox" name="">BOM
            <input type="checkbox" name="">EXE

            <br>
            <br>

            <div style="display: flex; justify-content: space-between;">
                  <div>
                        <p align="center">
                            ____________________________________
                        </p>
                        <p align="center">
                            ${tituloOrientador} ${orientador}
                        </p>
                        <p align="center">
                            <em>ORIENTADOR(A)</em>
                        </p>
                  </div>
                  <div>
                        <p align="center">
                            ____________________________________
                        </p>
                        <p align="center">
                            ${tituloAvaliador1} ${avaliador1}
                        </p>
                        <p align="center">
                            <em>AVALIADOR(A)</em>
                        </p>
                  </div>
            </div>
            <div style="display: flex; justify-content: space-between;">
                  <div>
                        <p align="center">
                            ____________________________________
                        </p>
                        <p align="center">
                            ${tituloCoOrientador} ${coOrientador}
                        </p>
                        <p align="center">
                            <em>CO-ORIENTADOR(A)</em>
                        </p>
                  </div>
                  <div>
                        <p align="center">
                            ____________________________________
                        </p>
                        <p align="center">
                            ${tituloAvaliador2} ${avaliador2}
                        </p>
                        <p align="center">
                            <em>AVALIADOR(A)</em>
                        </p>
                  </div>
            </div>
	</body>
</html>`

module.exports = { model }
