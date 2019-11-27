
var posit;
var posit2;
var valor;
var amostra;
var numval;
var raw;
var erraser;
var equsp = 0;
var labs;

function formatar2 (){

raw = document.getElementById('inputtxt').value;

var labs = "Labs ";

document.getElementById('inputtxt').value = "";
document.getElementById('resultado').value = "";

//data
posit = raw.search("Atendimento: ");
labs += raw.substring(posit+13, posit+19) + raw.substring(posit+21, posit+23) + ": ";

//ureia (sérica e urinária) [REVISAR URINÁRIA]
for (i=0; i<2; i++){
	posit = raw.search("UREIA");
	if(posit > 0){
		amostra = raw.substring(posit, posit+200);

		if(amostra.search("Urina") > 0){
			labs += "ureia urinária " + raw.substring(posit+55, posit+59) + " / ";
			raw = raw.substring(0, posit) + raw.substring(posit+5, raw.length);
		}
		else{
			labs += "ureia " + raw.substring(posit+28, posit+30) + " / ";
			raw = raw.substring(0, posit) + raw.substring(posit+5, raw.length);
		}
	}
}

//creatinina (sérica e urinária) [INCLUIR 24h]
for (i=0; i<2; i++){
	posit = raw.search("CREATININA");
	if(posit > 0){
		amostra = raw.substring(posit, posit+200);

		if(amostra.search("Urina") > 0 && amostra.search("Urina de 24 horas") < 0){
			numval = raw.substring(posit+55, posit+59);
			numval = numval.replace(/[^0-9,]/g, "");
			labs += "creat urina " + numval + " / ";
			raw = raw.substring(0, posit) + raw.substring(posit+10, raw.length);
		}

		if(amostra.search("Urina de 24 horas") > 0){
			numval = raw.substring(posit+51, posit+57);
			numval = numval.replace(/[^0-9,]/g, "");
			labs += "creat urina 24h: " + numval + " / ";
			raw = raw.substring(0, posit) + raw.substring(posit+10, raw.length);
		}

		if(amostra.search("Soro") > 0){
			numval = raw.substring(posit+28, posit+32);
			numval = numval.replace(/[^0-9,]/g, "");
			labs += "creat " + numval + " / ";
			raw = raw.substring(0, posit) + raw.substring(posit+10, raw.length);
		}
	}
}


//sódio (sérico e urinário) [REVISAR URINÁRIO + 24h]
for (i=0; i<2; i++){
	posit = raw.search("SÓDIO");
	if(posit > 0){
		amostra = raw.substring(posit, posit+200);

		if(amostra.search("Urina de 24 horas") > 0){
			numval = raw.substring(posit+23, posit+30);
			numval = numval.replace(/[^0-9,]/g, "");
			labs += "Na urina 24h: " + numval + " / ";
			raw = raw.substring(0, posit) + raw.substring(posit+5, raw.length);
		}

		if(amostra.search("Urina") > 0 && amostra.search("Urina de 24 horas") < 0){
			numval = raw.substring(posit+6, posit+10);
			numval = numval.replace(/[^0-9,]/g, "");
			labs += "Na urina " + numval + " / ";
			raw = raw.substring(0, posit) + raw.substring(posit+5, raw.length);
		}

		if(amostra.search("Soro") > 0){
			numval = raw.substring(posit+6, posit+10);
			numval = numval.replace(/[^0-9,]/g, "");
			labs += "Na " + numval + " / ";
			raw = raw.substring(0, posit) + raw.substring(posit+5, raw.length);
		}
	}
}

//potássio (sérico e urinário) [incluir URINÁRIO + 24h]
for (i=0; i<2; i++){
	posit = raw.search("POTÁSSIO");
	if(posit > 0){
		amostra = raw.substring(posit, posit+200);

		if(amostra.search("Urina") > 0){
			numval = raw.substring(posit+9, posit+14);
			numval = numval.replace(/[^0-9,]/g, "");
			labs += "K urina " + numval + " / ";
			raw = raw.substring(0, posit) + raw.substring(posit+8, raw.length);
		}
		else{
			numval = raw.substring(posit+9, posit+14);
			numval = numval.replace(/[^0-9,]/g, "");
			labs += "K " + numval + " / ";
			raw = raw.substring(0, posit) + raw.substring(posit+8, raw.length);
		}
	}
}

//magnésio
posit = raw.search("MAGNÉSIO");
if(posit > 0){
	numval = raw.substring(posit+36, posit+44);
	numval = numval.replace(/[^0-9,]/g, "");
	labs += "Mg " + numval + " / ";
	raw = raw.substring(0, posit) + raw.substring(posit+8, raw.length);
}

//cloro (sérico) [incluir URINÁRIO]
for (i=0; i<2; i++){
	posit = raw.search("CLORO");
	if(posit > 0){
		amostra = raw.substring(posit, posit+300);
		/*
		if(amostra.search("Urina") > 0){
			numval = raw.substring(posit+9, posit+14);
			numval = numval.replace(/[^0-9,]/g, "");
			labs += "K urina " + numval + " / ";
			raw = raw.substring(0, posit) + raw.substring(posit+8, raw.length);
		}
		*/
		if(amostra.search("Soro") > 0){
			numval = raw.substring(posit+6, posit+11);
			numval = numval.replace(/[^0-9,]/g, "");
			labs += "cloro " + numval + " / ";
			raw = raw.substring(0, posit) + raw.substring(posit+6, raw.length);
		}
	}
}

//ácido úrico
posit = raw.search("ÁCIDO ÚRICO");
if(posit > 0){
	numval = raw.substring(posit+28, posit+36);
	numval = numval.replace(/[^0-9,]/g, "");
	labs += "ác. úrico " + numval + " / ";
	raw = raw.substring(0, posit) + raw.substring(posit+11, raw.length);
}

//CO2 total
posit = raw.search("CO2 TOTAL");
if(posit > 0){
	numval = raw.substring(posit+37, posit+47);
	numval = numval.replace(/[^0-9,]/g, "");
	labs += "CO2 total " + numval + " / ";
	raw = raw.substring(0, posit) + raw.substring(posit+10, raw.length);
}

//lactato
for (i=0; i<2; i++){
	posit = raw.search("LACTATO");
	if(posit > 0){
		amostra = raw.substring(posit, posit+250);

		if(amostra.search("mmol") > 0){
			posit2 = amostra.search("mmol");
			numval = amostra.substring(posit2-6, posit2);
			numval = numval.replace(/[^0-9,]/g, "");
			labs += "lactato " + numval + " / ";
			raw = raw.substring(0, posit) + raw.substring(posit+7, raw.length);
		}
	}
}

//TGO
posit = raw.search("TGO");
if(posit > 0){
	numval = raw.substring(posit+24, posit+28);
	numval = numval.replace(/[^0-9,]/g, "");
	labs += "TGO " + numval + " / ";
	raw = raw.substring(0, posit) + raw.substring(posit+3, raw.length);
}

//TGP
posit = raw.search("TGP");
if(posit > 0){
	numval = raw.substring(posit+34, posit+38);
	numval = numval.replace(/[^0-9,]/g, "");
	labs += "TGP " + numval + " / ";
	raw = raw.substring(0, posit) + raw.substring(posit+3, raw.length);
}

//fosfatase alcalina
posit = raw.search("FOSFATASE ALCALINA");
if(posit > 0){
	numval = raw.substring(posit+19, posit+24);
	numval = numval.replace(/[^0-9,]/g, "");
	labs += "FA " + numval + " / ";
	raw = raw.substring(0, posit) + raw.substring(posit+18, raw.length);
}

//gama GT
posit = raw.search("Gama-Glutamil Transferase");
if(posit > 0){
	numval = raw.substring(posit+31, posit+36);
	numval = numval.replace(/[^0-9,]/g, "");
	labs += "GGT " + numval + " / ";
	raw = raw.substring(0, posit) + raw.substring(posit+31, raw.length);
}

//bilirrubina total
posit = raw.search("BILIRRUBINA TOTAL");
if(posit > 0){
	numval = raw.substring(posit+32, posit+39);
	numval = numval.replace(/[^0-9,]/g, "");
	labs += "bilirrub. total " + numval + " / ";
	raw = raw.substring(0, posit) + raw.substring(posit+18, raw.length);
}

//bilirrubina direta
posit = raw.search("BILIRRUBINA DIRETA");
if(posit > 0){
	numval = raw.substring(posit+29, posit+36);
	numval = numval.replace(/[^0-9,]/g, "");
	labs += "BD " + numval + " / ";
	raw = raw.substring(0, posit) + raw.substring(posit+18, raw.length);
}

//TP INR
posit = raw.search("RNI ");
if(posit > 0){
	numval = raw.substring(posit+10, posit+20);
	numval = numval.replace(/[^0-9,]/g, "");
	labs += "TP RNI " + numval + " / ";
	raw = raw.substring(0, posit) + raw.substring(posit+3, raw.length);
}

//TTPA
posit = raw.search("TEMPO DE TROMBOPLASTINA PARCIAL");
if(posit > 0){
	numval = raw.substring(posit+36, posit+42);
	numval = numval.replace(/[^0-9,]/g, "");
	labs += "TTPA " + numval + " / ";
	raw = raw.substring(0, posit) + raw.substring(posit+22, raw.length);
}

// cálcio iônico
posit = raw.search("CÁLCIO IÔNICO");
if(posit > 0){
	numval = raw.substring(posit+41, posit+49);
	numval = numval.replace(/[^0-9,]/g, "");
	labs += "Ca iônico " + numval + " / ";
	raw = raw.substring(0, posit) + raw.substring(posit+13, raw.length);
}

// cálcio (sérico e urinário 24h)
for (i=0; i<2; i++){
	posit = raw.search("CÁLCIO");
	if(posit > 0){
		amostra = raw.substring(posit, posit+500);

		if(amostra.search("Urina de 24 horas") > 0){
			numval = raw.substring(posit+7, posit+12);
			numval = numval.replace(/[^0-9,]/g, "");
			labs += "Ca urina 24h: " + numval + " / ";
			raw = raw.substring(0, posit) + raw.substring(posit+8, raw.length);
		}
		else{
			numval = raw.substring(posit+7, posit+13);
			numval = numval.replace(/[^0-9,]/g, "");
			labs += "Ca " + numval + " / ";
			raw = raw.substring(0, posit) + raw.substring(posit+8, raw.length);
		}
	}
}

//fósforo inorgânico
posit = raw.search("FÓSFORO INORGÂNICO");
if(posit > 0){
	numval = raw.substring(posit+35, posit+41);
	numval = numval.replace(/[^0-9,]/g, "");
	labs += "P inorg. " + numval + " / ";
	raw = raw.substring(0, posit) + raw.substring(posit+18, raw.length);
}

//PTH
posit = raw.search("PARATORMÔNIO");
if(posit > 0){
	numval = raw.substring(posit+36, posit+44);
	numval = numval.replace(/[^0-9,]/g, "");
	labs += "PTH " + numval + " / ";
	raw = raw.substring(0, posit) + raw.substring(posit+18, raw.length);
}

//25-OH-vitD
posit = raw.search("25 HIDROXI-VITAMINA D");
if(posit > 0){
	numval = raw.substring(posit+36, posit+44);
	numval = numval.replace(/[^0-9,]/g, "");
	labs += "25-OH-vitD " + numval + " / ";
	raw = raw.substring(0, posit) + raw.substring(posit+20, raw.length);
}

//proteína urinária [INCLUIR 24h]
posit = raw.search("PROTEÍNA URINÁRIA");
if(posit > 0){
	numval = raw.substring(posit+38, posit+43);
	numval = numval.replace(/[^0-9,]/g, "");
	labs += "prot. urina " + numval + " / ";
	raw = raw.substring(0, posit) + raw.substring(posit+17, raw.length);
}

//PCR
posit = raw.search("PROTEINA C REATIVA");
if(posit > 0){
	numval = raw.substring(posit+44, posit+50);
	numval = numval.replace(/[^0-9,]/g, "");
	labs += "PCR " + numval + " / ";
	raw = raw.substring(0, posit) + raw.substring(posit+35, raw.length);
}

//VSG
posit = raw.search("VELOCIDADE DE SEDIMENTAÇÃO GLOBULAR");
if(posit > 0){
	numval = raw.substring(posit+60, posit+68);
	numval = numval.replace(/[^0-9,]/g, "");
	labs += "VSG " + numval + " / ";
	raw = raw.substring(0, posit) + raw.substring(posit+36, raw.length);
}



//Colesterol total
posit = raw.search("COLESTEROL");
if(posit > 0){
	numval = raw.substring(posit+36, posit+46);
	numval = numval.replace(/[^0-9,]/g, "");
	labs += "colesterol total " + numval + " / ";
	raw = raw.substring(0, posit) + raw.substring(posit+10, raw.length);
}

//não-HDL
posit = raw.search("NÃO HDL COLESTEROL");
if(posit > 0){
	numval = raw.substring(posit+22, posit+28);
	numval = numval.replace(/[^0-9,]/g, "");
	labs += "não-HDL " + numval + " / ";
	raw = raw.substring(0, posit) + raw.substring(posit+18, raw.length);
}

//HDL
posit = raw.search("HDL COLESTEROL");
if(posit > 0){
	numval = raw.substring(posit+43, posit+51);
	numval = numval.replace(/[^0-9,]/g, "");
	labs += "HDL " + numval + " / ";
	raw = raw.substring(0, posit) + raw.substring(posit+14, raw.length);
}

//LDL
posit = raw.search("LDL - COLESTEROL");
if(posit > 0){
	numval = raw.substring(posit+44, posit+49);
	numval = numval.replace(/[^0-9,]/g, "");
	labs += "LDL " + numval + " / ";
	raw = raw.substring(0, posit) + raw.substring(posit+16, raw.length);
}

//Triglicerídeos
posit = raw.search("TRIGLICERÍDEOS");
if(posit > 0){
	numval = raw.substring(posit+30, posit+40);
	numval = numval.replace(/[^0-9,]/g, "");
	labs += "triglic " + numval + " / ";
	raw = raw.substring(0, posit) + raw.substring(posit+14, raw.length);
}

//glicose sérica
posit = raw.search("GLICOSE");
if(posit > 0){
	amostra = raw.substring(posit, posit+200);

	if(amostra.search("Soro") > 0){
		numval = raw.substring(posit+8, posit+14);
		numval = numval.replace(/[^0-9,]/g, "");
		labs += "glicose " + numval + " / ";
		raw = raw.substring(0, posit) + raw.substring(posit+7, raw.length);
	}
}

//HbA1c
posit = raw.search("HEMOGLOBINA GLICADA");
if(posit > 0){
	numval = raw.substring(posit+38, posit+48);
	numval = numval.replace(/[^0-9,]/g, "");
	labs += "HbA1c " + numval + "% / ";
	raw = raw.substring(0, posit) + raw.substring(posit+14, raw.length);
}

//TSH
posit = raw.search("TIREOTROFINA - TSH Ultrassensível");
if(posit > 0){
	numval = raw.substring(posit+58, posit+73);
	numval = numval.replace(/[^0-9,]/g, "");
	labs += "TSH " + numval + " / ";
	raw = raw.substring(0, posit) + raw.substring(posit+33, raw.length);
}

//T4 livre
posit = raw.search("T4 LIVRE");
if(posit > 0){
	numval = raw.substring(posit+24, posit+35);
	numval = numval.replace(/[^0-9,]/g, "");
	labs += "T4 livre " + numval + " / ";
	raw = raw.substring(0, posit) + raw.substring(posit+8, raw.length);
}

//complemento C3
posit = raw.search("COMPLEMENTO - C3");
if(posit > 0){
	numval = raw.substring(posit+34, posit+39);
	numval = numval.replace(/[^0-9,]/g, "");
	labs += "C3 " + numval + " / ";
	raw = raw.substring(0, posit) + raw.substring(posit+16, raw.length);
}

//complemento C4
posit = raw.search("COMPLEMENTO -  C4");
if(posit > 0){
	numval = raw.substring(posit+35, posit+40);
	numval = numval.replace(/[^0-9,]/g, "");

	//se 15,0 então 15 etc.
	if( parseFloat(numval.replace(',', '.')) == parseFloat(parseInt(numval)) ){
		numval = parseInt(numval);
	}

	labs += "C4 " + numval + " / ";
	raw = raw.substring(0, posit) + raw.substring(posit+17, raw.length);
}

//anti-DNA
posit = raw.search("ANTI - DNA");
if(posit > 0){
	amostra = raw.substring(posit, posit+200);
	posit2 = amostra.search("Título");

	if(posit2 > 0){
		numval = amostra.substring(posit2+8, posit2+15);
		numval = numval.replace(/[^0-9:]/g, "");
	}
	else{
		numval = "NR";
	}

	labs += "anti-DNA " + numval + " / ";
	raw = raw.substring(0, posit) + raw.substring(posit+10, raw.length);
}


//fator reumatoide
posit = raw.search("FATOR REUMATOIDE");
if(posit > 0){
	numval = raw.substring(posit+36, posit+41);
	numval = numval.replace(/[^0-9,]/g, "");
	labs += "fator reumatoide " + numval + " / ";
	raw = raw.substring(0, posit) + raw.substring(posit+15, raw.length);
}


//FAN [incluir títulos]
posit = raw.search("PESQUISA DE ANTICORPOS CONTRA ANTÍGENOS CELULARES - FAN");
if(posit > 0){
	amostra = raw.substring(posit, posit+1000);
	labs += "FAN";
	equsp = 0;

	if(amostra.search("Núcleo Não Reagente") < 0){
		labs += " nuclear R;";
		equsp = equsp + 1;
	}

	if(amostra.search("Nucléolo Não Reagente") < 0){
		labs += " nucléolo R;";
		equsp = equsp + 1;
	}

	if(amostra.search("Citoplasma Não Reagente") < 0){
		labs += " citoplasma R;";
		equsp = equsp + 1;
	}

	if(amostra.search("Aparelho Mitótico Não Reagente") < 0){
		labs += " aparelho mitótico R;";
		equsp = equsp + 1;
	}

	if(amostra.search("Placa Metafásica Cromossômica Negativa") < 0){
		labs += " placa metaf. cromoss. R;";
		equsp = equsp + 1;
	}

	if(equsp == 0){
		labs += " NR";
	}

	//remover ; final
	if (labs.charAt(labs.length-1) == ";"){
		labs = labs.slice(0, -1);
	}

	labs += " / ";
}

//ferro
posit = raw.search("FERRO ");
if(posit > 0){
	numval = raw.substring(posit+6, posit+10);
	numval = numval.replace(/[^0-9,]/g, "");
	labs += "ferro " + numval + " / ";
	raw = raw.substring(0, posit) + raw.substring(posit+5, raw.length);
}

//saturação da transferrina
posit = raw.search("SATURAÇÃO DA TRANSFERRINA");
if(posit > 0){
	numval = raw.substring(posit+28, posit+33);
	numval = numval.replace(/[^0-9,]/g, "");
	labs += "sat. transfer. " + numval + "% / ";
	raw = raw.substring(0, posit) + raw.substring(posit+23, raw.length);
}

//transferrina
posit = raw.search("TRANSFERRINA");
if(posit > 0){
	numval = raw.substring(posit+38, posit+46);
	numval = numval.replace(/[^0-9,]/g, "");
	labs += "transferrina " + numval + " / ";
	raw = raw.substring(0, posit) + raw.substring(posit+12, raw.length);
}

//capacidade ferropéxica
posit = raw.search("CAPACIDADE FERROPÉXICA");
if(posit > 0){
	numval = raw.substring(posit+33, posit+41);
	numval = numval.replace(/[^0-9,]/g, "");
	labs += "capac. ferropéx. " + numval + " / ";
	raw = raw.substring(0, posit) + raw.substring(posit+23, raw.length);
}

//ferritina
posit = raw.search("FERRITINA");
if(posit > 0){
	numval = raw.substring(posit+50, posit+58);
	numval = numval.replace(/[^0-9,]/g, "");
	labs += "ferritina " + numval + " / ";
	raw = raw.substring(0, posit) + raw.substring(posit+9, raw.length);
}

//ácido fólico
posit = raw.search("ÁCIDO FÓLICO");
if(posit > 0){
	numval = raw.substring(posit+28, posit+36);
	numval = numval.replace(/[^0-9,]/g, "");
	labs += "ác. fólico " + numval + " / ";
	raw = raw.substring(0, posit) + raw.substring(posit+12, raw.length);
}

//vitamina B12
posit = raw.search("VITAMINA B12");
if(posit > 0){
	numval = raw.substring(posit+28, posit+36);
	numval = numval.replace(/[^0-9,]/g, "");
	labs += "vit. B12 " + numval + " / ";
	raw = raw.substring(0, posit) + raw.substring(posit+12, raw.length);
}

//Hemograma
posit = raw.search("HEMOGRAMA");
if(posit > 0){
	amostra = raw.substring(posit, posit+2600);

	if(amostra.search("Hemoglobina") > 0){
		posit2 = amostra.search("Hemoglobina");
		numval = amostra.substring(posit2+13, posit2+22);
		numval = numval.replace(/[^0-9,]/g, "");
		labs += "Hb " + numval;
		raw = raw.substring(0, posit+posit2) + raw.substring(posit+posit2+11, raw.length);
	}

	if(amostra.search("Hematócrito") > 0){
		posit2 = amostra.search("Hematócrito");
		numval = amostra.substring(posit2+13, posit2+20);
		numval = numval.replace(/[^0-9,]/g, "");
		labs += "; HT " + numval;
		raw = raw.substring(0, posit+posit2) + raw.substring(posit+posit2+11, raw.length);
	}

	if(amostra.search("V.C.M.") > 0){
		posit2 = amostra.search("V.C.M.");
		numval = amostra.substring(posit2+13, posit2+18);
		numval = numval.replace(/[^0-9,]/g, "");
		labs += "; VCM " + numval;
	}

	if(amostra.search("C.H.C.M") > 0){
		posit2 = amostra.search("C.H.C.M");
		numval = amostra.substring(posit2+42, posit2+52);
		numval = numval.replace(/[^0-9,]/g, "");
		labs += "; CHCM " + numval;
	}

	if(amostra.search("R.D.W.") > 0){
		posit2 = amostra.search("R.D.W.");
		numval = amostra.substring(posit2+8, posit2+16);
		numval = numval.replace(/[^0-9,]/g, "");
		labs += "; RDW " + numval;
	}

	if(amostra.search("Leucócitos") > 0){
		posit2 = amostra.search("Leucócitos");
		numval = amostra.substring(posit2+13, posit2+24);
		numval = numval.replace(/[^0-9,]/g, "");
		labs += " / Leuco " + numval;
	}

	if(amostra.search("Neutrófilos") > 0){
		posit2 = amostra.search("Neutrófilos");
		numval = amostra.substring(posit2+25, posit2+35);
		numval = numval.replace(/[^0-9,]/g, "");
		labs += "; N:" + numval;
	}

	if(amostra.search("Linfócitos") > 0){
		posit2 = amostra.search("Linfócitos");
		numval = amostra.substring(posit2+24, posit2+33);
		numval = numval.replace(/[^0-9,]/g, "");
		labs += "; L:" + numval;
	}

	if(amostra.search("Basófilos") > 0){
		posit2 = amostra.search("Basófilos");
		numval = amostra.substring(posit2+26, posit2+31);
		numval = numval.replace(/[^0-9,]/g, "");

		if( parseFloat(numval) > 220 ){
			labs += "; B:" + numval;;
		}
	}

	if(amostra.search("Eosinófilos") > 0){
		posit2 = amostra.search("Eosinófilos");
		numval = amostra.substring(posit2+27, posit2+34);
		numval = numval.replace(/[^0-9,]/g, "");

		if( parseFloat(numval) > 500 ){
			labs += "; E:" + numval;;
		}
	}

	if(amostra.search("Monócitos") > 0){
		posit2 = amostra.search("Monócitos");
		numval = amostra.substring(posit2+22, posit2+32);
		numval = numval.replace(/[^0-9,]/g, "");

		if( parseFloat(numval) > 1000 || parseFloat(numval) < 100 ){
			labs += "; M:" + numval;;
		}
	}

	if(amostra.search("Plaquetas") > 0){
		posit2 = amostra.search("Plaquetas");
		numval = amostra.substring(posit2+35, posit2+48);
		numval = numval.replace(/[^0-9.]/g, "");
		labs += " / plaq " + numval;
	}

	labs += " / ";
	raw = raw.substring(0, posit) + raw.substring(posit+35, raw.length);
}

//hemoglobina
posit = raw.search("HEMOGLOBINA         ");
if(posit > 0){
	numval = raw.substring(posit+50, posit+58);
	numval = numval.replace(/[^0-9,]/g, "");
	labs += "Hb " + numval + " / ";
	raw = raw.substring(0, posit) + raw.substring(posit+10, raw.length);
}

//hematócrito
posit = raw.search("HEMATÓCRITO ");
if(posit > 0){
	numval = raw.substring(posit+12, posit+17);
	numval = numval.replace(/[^0-9,]/g, "");
	labs += "HT " + numval + "% / ";
	raw = raw.substring(0, posit) + raw.substring(posit+11, raw.length);
}

//EQU [verificar alterados: nitrito; glicose; cetônicos; bilirrub; céls epit; leuco; eritro]
posit = raw.search("EXAME QUALITATIVO DE URINA");
if(posit > 0){
	amostra = raw.substring(posit, posit+2600);

	labs += "EQU";
	equsp = 0;

	if(amostra.search("Densidade") > 0){
		posit2 = amostra.search("Densidade");
		numval = amostra.substring(posit2+10, posit2+16);
		numval = numval.replace(/[^0-9.]/g, "");

		if( parseFloat(numval) < 1.001 || parseFloat(numval) > 1.035 ){
			labs += " densidade " + numval + ";";
			equsp = equsp + 1;
		}
	}

	if(amostra.search("pH") > 0){
		posit2 = amostra.search("pH");
		numval = amostra.substring(posit2+3, posit2+6);
		numval = numval.replace(/[^0-9,]/g, "");

		if( parseFloat(numval.replace(',', '.')) < 4.6 || parseFloat(numval.replace(',', '.')) > 8.0 ){
			labs += " pH " + numval + ";";
			equsp = equsp + 1;
		}
	}

	if(amostra.search("Nitrito Negativo") < 0){
		labs += " nitrito+;";
		equsp = equsp + 1;
	}

	if(amostra.search("Albumina[*] Positivo") > 0){
		posit2 = amostra.search("Albumina[*] Positivo");
		numval = amostra.substring(posit2+22, posit2+24);
		labs += " albumina "+ numval + ";";
		equsp = equsp + 1;
	}

	if(amostra.search("Albumina[*] Traços") > 0){
		labs += " traços de albumina;";
		equsp = equsp + 1;
	}

	if(amostra.search("Glicose Negativo") < 0){
		labs += " glicose+;";
		equsp = equsp + 1;
	}

	if(amostra.search("C. Cetônicos Negativo") < 0){
		labs += " c. cetônicos+;";
		equsp = equsp + 1;
	}

	if(amostra.search("Urobilinogênio Excesso") > 0){
		labs += " excesso de urobilinogênio;";
		equsp = equsp + 1;
	}

	if(amostra.search("Bilirrubina Negativo") < 0){
		labs += " bilirrubina+;";
		equsp = equsp + 1;
	}

	if(amostra.search("Hemoglobina Positivo") > 0){
		posit2 = amostra.search("Hemoglobina Positivo");
		numval = amostra.substring(posit2+24, posit2+26);
		labs += " Hb " + numval + ";";
		equsp = equsp + 1;
	}

	if(amostra.search("Esterase Leucocitária Positivo") > 0){
		posit2 = amostra.search("Esterase Leucocitária Positivo");
		numval = amostra.substring(posit2+34, posit2+36);
		labs += " esterase " + numval + ";";
		equsp = equsp + 1;
	}

	if(amostra.search("Células Epiteliais Alguns") > 0){
		labs += " algumas céls. epiteliais;";
		equsp = equsp + 1;
	}

	if(amostra.search("Células Epiteliais Vários") > 0){
		labs += " várias céls. epiteliais;";
		equsp = equsp + 1;
	}

	if(amostra.search("Células Epiteliais Numeros") > 0){
		labs += " numerosas céls. epiteliais;";
		equsp = equsp + 1;
	}

	if(amostra.search("Células Epiteliais Grande Número") > 0){
		labs += " grande número de céls. epiteliais;";
		equsp = equsp + 1;
	}

	if(amostra.search("Leucócitos Alguns") > 0){
		labs += " alguns leucócitos;";
		equsp = equsp + 1;
	}

	if(amostra.search("Leucócitos Vários") > 0){
		labs += " vários leucócitos;";
		equsp = equsp + 1;
	}

	if(amostra.search("Leucócitos Numeros") > 0){
		labs += " numerosos leucócitos;";
		equsp = equsp + 1;
	}

	if(amostra.search("Leucócitos Grande Número") > 0){
		labs += " grande número de leucócitos;";
		equsp = equsp + 1;
	}

	if(amostra.search("Eritrócitos Alguns") > 0){
		labs += " alguns eritrócitos;";
		equsp = equsp + 1;
	}

	if(amostra.search("Eritrócitos Vários") > 0){
		labs += " vários eritrócitos;";
		equsp = equsp + 1;
	}

	if(amostra.search("Eritrócitos Numeros") > 0){
		labs += " numerosos eritrócitos;";
		equsp = equsp + 1;
	}

	if(amostra.search("Eritrócitos Grande Número") > 0){
		labs += " grande número de eritrócitos";
		equsp = equsp + 1;
	}

	if (equsp == 0){
		labs += " sp.";
	}

	//remover ; final
	if (labs.charAt(labs.length-1) == ";"){
		labs = labs.slice(0, -1);
	}

	labs += " / ";
	raw = raw.substring(0, posit) + raw.substring(posit+35, raw.length);
}

//microalbuminúria
posit = raw.search("MICROALBUMINÚRIA");
if(posit > 0){
	numval = raw.substring(posit+30, posit+36);
	numval = numval.replace(/[^0-9,]/g, "");
	labs += "microalbuminúria " + numval + " / ";
	raw = raw.substring(0, posit) + raw.substring(posit+18, raw.length);
}

//Urocultura [avaliar quando positiva]
posit = raw.search("UROCULTURA");
if(posit > 0){
	amostra = raw.substring(posit, posit+1000);
	labs += "urocultura ";

	if(amostra.search("Ausência de crescimento bacteriano") > 0){
		labs += "negativa";
	}

	if(amostra.search("Crescimento bacteriano misto. Sugere-se repetição") > 0){
		labs += "crescimento misto";
	}

	if(amostra.search("Germe 1") > 0){
		posit2 = amostra.search("Germe 1");
		numval = amostra.substring(posit2+9, posit2+28);
		labs += numval.trim();
	}

	if(amostra.search("Germe 2") > 0){
		posit2 = amostra.search("Germe 2");
		numval = amostra.substring(posit2+9, posit2+28);
		if (numval.trim() != ""){
			labs += "; " + numval.trim();
		}
	}

	if(amostra.search("Germe 3") > 0){
		posit2 = amostra.search("Germe 3");
		numval = amostra.substring(posit2+9, posit2+28);
		if (numval.trim() != ""){
			labs += "; " + numval.trim();
		}
	}

	labs += " / ";
}

//proteinograma sérico
posit = raw.search("PROTEINOGRAMA");
if(posit > 0){
	amostra = raw.substring(posit, posit+1800);
	if (amostra.search("Soro") > 0){

			labs += "proteinograma sérico:";

			if(amostra.search("Proteinas Totais") > 0){
				posit2 = amostra.search("Proteinas Totais");
				numval = amostra.substring(posit2+24, posit2+32);
				numval = numval.replace(/[^0-9,]/g, "");
				labs += " prot. totais " + numval + ";";

			}

			if(amostra.search("Albumina") > 0){
				posit2 = amostra.search("Albumina");
				numval = amostra.substring(posit2+16, posit2+24);
				numval = numval.replace(/[^0-9,]/g, "");
				labs += " albumina " + numval + ";";

			}

			if(amostra.search("Alfa-1 Globulina") > 0){
				posit2 = amostra.search("Alfa-1 Globulina");
				numval = amostra.substring(posit2+24, posit2+33);
				numval = numval.replace(/[^0-9,]/g, "");

				if( parseFloat(numval.replace(',', '.')) < 0.17 || parseFloat(numval.replace(',', '.')) > 0.4 ){
					labs += " alfa-1 glob. " + numval + ";";
				}
			}

			if(amostra.search("Alfa-2 Globulina") > 0){
				posit2 = amostra.search("Alfa-2 Globulina");
				numval = amostra.substring(posit2+24, posit2+33);
				numval = numval.replace(/[^0-9,]/g, "");

				if( parseFloat(numval.replace(',', '.')) < 0.4 || parseFloat(numval.replace(',', '.')) > 0.97 ){
					labs += " alfa-2 glob. " + numval + ";";
				}
			}

			if(amostra.search("Beta-1 Globulina") > 0){
				posit2 = amostra.search("Beta-1 Globulina");
				numval = amostra.substring(posit2+24, posit2+33);
				numval = numval.replace(/[^0-9,]/g, "");

				if( parseFloat(numval.replace(',', '.')) < 0.27 || parseFloat(numval.replace(',', '.')) > 0.59 ){
					labs += " beta-1 glob. " + numval + ";";
				}
			}

			if(amostra.search("Beta-2 Globulina") > 0){
				posit2 = amostra.search("Beta-2 Globulina");
				numval = amostra.substring(posit2+24, posit2+33);
				numval = numval.replace(/[^0-9,]/g, "");

				if( parseFloat(numval.replace(',', '.')) < 0.18 || parseFloat(numval.replace(',', '.')) > 0.53 ){
					labs += " beta-2 glob. " + numval + ";";
				}
			}

			if(amostra.search("Gama Globulina") > 0){
				posit2 = amostra.search("Gama Globulina");
				numval = amostra.substring(posit2+22, posit2+29);
				numval = numval.replace(/[^0-9,]/g, "");

				if( parseFloat(numval.replace(',', '.')) < 0.63 || parseFloat(numval.replace(',', '.')) > 1.54 ){
					labs += " gama glob. " + numval + ";";
				}
			}

			if(amostra.search("Relação Alb") > 0){
				posit2 = amostra.search("Relação Alb");
				numval = amostra.substring(posit2+18, posit2+26);
				numval = numval.replace(/[^0-9,]/g, "");
				labs += " rel. alb/glob. " + numval;
			}

			labs += " / ";
			raw = raw.substring(0, posit) + raw.substring(posit+13, raw.length);

	}

}

//anti-HIV
posit = raw.search("ANTI - HIV I/II");
if(posit > 0){
	amostra = raw.substring(posit, posit+150);
	labs += "anti-HIV ";

	if(amostra.search("Não Reagente") > 0){
		labs += "NR";
	}
	else{
		labs += "R";
	}

	labs += " / ";
}

//anti-HCV
posit = raw.search("ANTI - HCV");
if(posit > 0){
	amostra = raw.substring(posit, posit+40);
	labs += "anti-HCV ";

	if(amostra.search("Não Reagente") > 0){
		labs += "NR";
	}
	else{
		labs += "R";
	}

	labs += " / ";
}

//anti-HBs
posit = raw.search("ANTI - HBs");
if(posit > 0){
	amostra = raw.substring(posit, posit+35);
	labs += "anti-HBs ";

	numval = amostra.replace(/[^0-9.,]/g, "");

	if( parseFloat(numval) < 10 && amostra.search("Superior") < 0){
		labs += "< 10";
	}
	else{
		labs += "> 10";
	}

	labs += " / ";
}

//HBsAg
posit = raw.search("ANTÍGENO AUSTRÁLIA - HBsAg");
if(posit > 0){
	amostra = raw.substring(posit, posit+52);
	labs += "HBsAg ";

	if(amostra.search("Não Reagente") > 0){
		labs += "NR";
	}
	else{
		labs += "R";
	}

	labs += " / ";
}

//sífilis treponêmico
posit = raw.search("PESQUISA DE SÍFILIS");
if(posit > 0){
	amostra = raw.substring(posit, posit+200);
	labs += "sífilis treponêmico ";

	if(amostra.search("Não Reagente") > 0){
		labs += "NR";
	}
	else{
		labs += "R";
	}

	labs += " / ";
}

//CEA
posit = raw.search("ANTÍGENO CARCINO EMBRIÔNICO");
if(posit > 0){
	numval = raw.substring(posit+42, posit+50);
	numval = numval.replace(/[^0-9,]/g, "");
	labs += "CEA " + numval + " / ";
	raw = raw.substring(0, posit) + raw.substring(posit+28, raw.length);
}

//Gasometria arterial
posit = raw.search("GASOMETRIA ARTERIAL");
if(posit > 0){
	amostra = raw.substring(posit, posit+1500);
	labs += "gaso arterial: ";

	if(amostra.search("pH ") > 0){
		posit2 = amostra.search("pH ");
		numval = amostra.substring(posit2+3, posit2+9);
		numval = numval.replace(/[^0-9,]/g, "");
		labs += "pH " + numval + "; ";
	}

	if(amostra.search("pCO2 ") > 0){
		posit2 = amostra.search("pCO2 ");
		numval = amostra.substring(posit2+5, posit2+12);
		numval = numval.replace(/[^0-9,]/g, "");
		labs += "pCO2 " + numval + "; ";
	}

	if(amostra.search("pO2 ") > 0){
		posit2 = amostra.search("pO2 ");
		numval = amostra.substring(posit2+4, posit2+11);
		numval = numval.replace(/[^0-9,]/g, "");
		labs += "pO2 " + numval + "; ";
	}

	if(amostra.search("HCO3 ") > 0){
		posit2 = amostra.search("HCO3 ");
		numval = amostra.substring(posit2+5, posit2+11);
		numval = numval.replace(/[^0-9,]/g, "");
		labs += "HCO3 " + numval + "; ";
	}

	if(amostra.search("CO2 total") > 0){
		posit2 = amostra.search("CO2 total");
		numval = amostra.substring(posit2+10, posit2+16);
		numval = numval.replace(/[^0-9,]/g, "");
		labs += "CO2 tot. " + numval + "; ";
	}

	if(amostra.search("Exc. de base") > 0){
		posit2 = amostra.search("Exc. de base");
		numval = amostra.substring(posit2+24, posit2+31);
		numval = numval.replace(/[^0-9,]/g, "");
		labs += "EB " + numval + "; ";
	}

	if(amostra.search("Saturação de O2") > 0){
		posit2 = amostra.search("Saturação de O2");
		numval = amostra.substring(posit2+19, posit2+22);
		numval = numval.replace(/[^0-9,]/g, "");
		labs += "SatO2 " + numval + "%";
	}


	labs += " / ";
	raw = raw.substring(0, posit) + raw.substring(posit+35, raw.length);
}

//vancomicina sérica
posit = raw.search("VANCOMICINA SÉRICA");
if(posit > 0){
	numval = raw.substring(posit+33, posit+40);
	numval = numval.replace(/[^0-9,]/g, "");
	labs += "vanco sérica " + numval + " / ";
	raw = raw.substring(0, posit) + raw.substring(posit+18, raw.length);
}



	//remover " / " final
	if (labs.substring(labs.length-3, labs.length) == " / "){
		labs = labs.slice(0, -3);
	}

	// prints result
	document.getElementById('resultado').value = labs;

}
