$(document).ready(function() {
	//alert(1);
	//consola Firebug -> copiar -> Nuevo marcador -> pegar en Dirección
	
	var sGuardar = "";
	for(var i=0; i<$("div.cuerpoRegionLeft").length; i++){
	    var oDiv = $("div.cuerpoRegionLeft").eq(i);
	    var oLI_casa = oDiv.find("UL").eq(1).find("LI");
	    var oLI_fuera = oDiv.find("UL").eq(2).find("LI");
	    for(var e=0; e<oLI_casa.length; e++){
	        var sCasa = oLI_casa.eq(e).html();
	        if(sCasa.substring(0,1) == " "){
	            sCasa = sCasa.substring(1);
	        }
			sCasa = sCasa.replace(". ", ".");
	        var sFuera = oLI_fuera.eq(e).html();
	        if(sFuera.substring(0,1) == " "){
	            sFuera = sFuera.substring(1);
	        }
			sFuera = sFuera.replace(". ", ".");
	        sGuardar += sCasa +"-"+ sFuera +"\n";
	        if(e==13){
	        	sGuardar += "\n";
	        }
	    }
	}
	if(sGuardar.length > 20){
		sGuardar = sGuardar.toUpperCase();
		//alert(sGuardar);
		$("div.pieRegion").append("<TEXTAREA id='ta' rows='18' cols='35'></TEXTAREA>");
		$("#ta").val(sGuardar);

	}
	
});