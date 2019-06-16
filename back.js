const htmlToPdf = require('html-to-pdf');
htmlToPdf.setInputEncoding('UTF-8');
htmlToPdf.setOutputEncoding('UTF-8');
const bporrao = "<p>Corpo do Porrão</p>"
const bporra = "<p>Corpo do Porra</p>"
const bporrinha = "<p>Corpo do Porrinha</p>"
const html = 
	`
		<!DOCTYPE html>
			<html>
				<body>
					<h1>Porrão</h1>
						${bporrao}
					<h2>Porra</h2>
						${bporra}
					<h5>Porrinha</h5>
						${bporrinha}
				</body>
			</html>
	`

htmlToPdf.convertHTMLString(html, "C:\\Users\\Jairo\\Desktop\\document.pdf",
    function (error, success) {
        if (error) {
            console.log('Oh noes! Errorz!');
            console.log(error);
        } else {
            console.log('Woot! Success!');
            console.log(success);
        }
    }
);