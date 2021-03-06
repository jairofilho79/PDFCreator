module.exports = function model(doc, { dia, mes, ano, curso, discente }) {
    // const doc = new PDFDocument

    doc.addPage({
        layout: 'landscape'
    })

    doc
        .polygon([10, 10], [780, 10], [780, 600], [10, 600])
        .lineWidth(3)
        .stroke()
    // Header
    doc.image('./img/logoRepublica.jpg', 150, 30, {
        align: 'left',
        valign: 'top'
    })
    doc.fontSize(12).text(
        `
    UNIVERSIDADE FEDERAL DO PARÁ
    INSTITUTO DE CIÊNCIAS EXATAS E NATURAIS
    FACULDADE DE COMPUTAÇÃO
    `,
        60,
        40,
        {
            align: 'center'
        }
    )

    doc.image('./img/logoUFPA.png', 580, 35, {
        align: 'right',
        valign: 'top'
    })
    // End of Header

    doc
        .font('Times-Bold')
        .fontSize(18)
        .text(
            `C E R T I F I C A D O  D E  C O N C L U S Ã O  D E  C U R S O`,
            130,
            170,
            { underline: true }
        )
    discente = 'Prof. Dr. Josivaldo de Souza Araújo'
    dia = 10
    mes = 'fevereiro'
    ano = 2019
    doc
        .fontSize(14)
        .text(`CERTIFICAMOS que o(a) discente `, 50, 300, {
            align: 'justify',
            continued: true,
            indent: 72,
            lineGap: 10
        })
        .fillColor('red')
        .text(`${discente}`, { continued: true, underline: true })
        .fillColor('black')
        .font('Times-Roman')
        .text(`, concluiu o Curso de ${curso}, nesta `, {
            continued: true,
            underline: false
        })
        .font('Times-Bold')
        .text(`UNIVERSIDADE FEDERAL DO PARÁ`, { continued: true })
        .font('Times-Roman')
        .text(`, tendo colado grau no dia `, { continued: true })
        .fillColor('red')
        .text(`${dia} de ${mes} de ${ano}`, { continued: true })
        .fillColor('black')
        .text(', recebendo o grau de ', { continued: true })
        .font('Times-Bold')
        .text('Bacharel em ', { continued: true })
        .fillColor('red')
        .text(`${curso}`, { continued: true })
        .fillColor('black')
        .font('Times-Roman')
        .text(
            `, estando seu diploma em fase de elaboração pelo órgão competente desta Universidade.`
        )

    doc
        .fillColor('red')
        .font('Times-Roman')
        .fontSize(12)
        .text(`Belém - PA, ${dia} de ${mes} de ${ano}.`, -120, 400, {
            align: 'right'
        })

    doc
        .fontSize(10)
        .fillColor('black')
        .text(`____________________________________`, 50, 470)

    doc
        .fontSize(10)
        .fillColor('red')
        .text(`${discente}`, 60, 490)
        .fillColor('black')
        .text('FORMANDO', -480, 500, { align: 'center' })

    doc.fontSize(10).text(`____________________________________`, 290, 470)

    doc
        .fontSize(10)
        .fillColor('red')
        .text(`${discente}`, 300, 490)
        .fillColor('black')
        .text('DIRETOR(A) DO ICEN', 30, 500, { align: 'center' })

    doc.fontSize(10).text(`____________________________________`, 540, 470)

    doc
        .fontSize(10)
        .fillColor('red')
        .text(`${discente}`, 550, 490)
        .fillColor('black')
        .text('DIRETOR(A) DA FACOMP', 530, 500, { align: 'center' })

    return doc
}
