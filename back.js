const htmlToPdf = require('html-to-pdf');
htmlToPdf.setInputEncoding('UTF-8');
htmlToPdf.setOutputEncoding('UTF-8');
const html = 
	`
		<!DOCTYPE html>
			<html>
				<body>
					<h1>Porrão</h1>
						<p>Corpo do Porrão</p>
					<h2>Porra</h2>
						<p>Corpo da Porra</p>
					<h5>Porrinha</h5>
						<p>Corpo da porrinha</p>
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