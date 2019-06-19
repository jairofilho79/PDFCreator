module.exports = function model({
  CURSO,
  DISCENTE,
  tituloTCC,
  tituloOrientador,
  orientador,
  tituloCoOrientador,
  coOrientador,
  tituloAvaliador1,
  avaliador1,
  tituloAvaliador2,
  avaliador2,
  diaTCC,
  mesTCC,
  anoTCC,
  horarioTCC,
  salaTCC,
  resumo
}) {
  return `<!DOCTYPE html>
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
                        font-size: 120%;
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
                  DEFESA PÚBLICA DO TRABALHO DE CONCLUSÃO DO CURSO DE ${CURSO}
            </p>

            &nbsp;<p align="left"><strong><em>Discente:</em></strong>
            </p>
            <p align="center">${DISCENTE}</p>

            &nbsp;<p align="left"><strong><em>Título:</em></strong></p>
            <p align="center"><strong>${tituloTCC}</strong></p>

            &nbsp;<p align="left"><strong><em>Banca:</em></strong></p>
            <p align="center">${tituloOrientador} ${orientador} (Orientador(a))</p>
            <p align="center">${tituloCoOrientador} ${coOrientador} (Co-Orientador(a))</p>
            <p align="center">${tituloAvaliador1} ${avaliador1} (Avaliador(a))</p>
            <p align="center">${tituloAvaliador2} ${avaliador2} (Avaliador(a))</p>

            &nbsp;<p align="left"><strong><em>Data e Local:</em></strong></p>
            <p align="center">${diaTCC} de ${mesTCC} de ${anoTCC} às ${horarioTCC} h - ${salaTCC}</p>
            <p align="center"><strong>RESUMO</strong></p>
            <div class="outer">
                  <p>${resumo}</p> 
            </div>
            
            <br>
            <br>
	</body>
</html>`
}