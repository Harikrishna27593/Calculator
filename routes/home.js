/**
 * http://usejsdoc.org/
 */
var ejs = require("ejs");


function homepage(req,res) {

	ejs.renderFile('./views/homepage.ejs',function(err, result) {
	   // render on success
	   if (!err) {
	            res.end(result);
	   }
	   // render or error
	   else {
	            res.end('An error occurred');
	            console.log(err);
	   }
   });
}

function calculate(req,res) {
	var res1;
    n1=req.param("number1");
    n2=req.param("number2");
	switch(req.param("optradio")){


	case 'add':
		res1=(parseFloat(req.param("number1"),10)+parseInt(req.param("number2") , 10));
		break;
		
	case 'sub':
		res1=(parseFloat(req.param("number1") ,10)-parseInt(req.param("number2") , 10));
		break;
		
	case 'div':
		res1=(parseFloat(req.param("number1") ,10)/parseInt(req.param("number2") , 10));
		break;
		
	case 'mul':
		res1=(parseFloat(req.param("number1") ,10)*parseInt(req.param("number2") , 10));
		break;
	}
	
	ejs.renderFile('./views/output.ejs', { 'number1': n1,'number2': n2,'resulthere': res1 } , function(err, result) {
        // render on success
        if (!err) {
            res.end(result);
        }
        // render or error
        else {
            res.end('An error occurred');
            console.log(err);
        }
    });
	
	
	
}
exports.homepage=homepage;
exports.calculate=calculate;
