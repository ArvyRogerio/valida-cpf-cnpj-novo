function ValidaCNPJ(cnpj) {

 cnpj=cnpj.replace(/[^A-Z0-9]/gi,'').toUpperCase();

 if (cnpj.length!=14) return false;
 if (/^(.)\1{13}$/.test(cnpj)) return false;

 function Valor(c) {
  if (/[0-9]/.test(c)) return parseInt(c);
  return c.charCodeAt(0)-48;
 }

 var pesos1=[5,4,3,2,9,8,7,6,5,4,3,2];
 var pesos2=[6,5,4,3,2,9,8,7,6,5,4,3,2];
 var soma=0;

 for (var i=0;i<12;i++) soma+=Valor(cnpj[i])*pesos1[i];

 var resto=soma%11;
 var digito1=resto<2?0:11-resto;

 if (digito1!=parseInt(cnpj[12])) return false;

 soma=0;

 for (var i=0;i<13;i++) soma+=Valor(cnpj[i])*pesos2[i];

 resto=soma%11;
 var digito2=resto<2?0:11-resto;

 if (digito2!=parseInt(cnpj[13])) return false;

 return true;

}

function ValidaCPF(cpf) {

 cpf=cpf.replace(/\D/g,'');

 if (cpf.length!=11) return false;
 if (/^(\d)\1{10}$/.test(cpf)) return false;

 var soma=0;

 for (var i=0;i<9;i++) soma+=parseInt(cpf[i])*(10-i);

 var resto=soma%11;
 var digito1=resto<2?0:11-resto;

 if (digito1!=parseInt(cpf[9])) return false;

 soma=0;

 for (var i=0;i<10;i++) soma+=parseInt(cpf[i])*(11-i);

 resto=soma%11;
 var digito2=resto<2?0:11-resto;

 if (digito2!=parseInt(cpf[10])) return false;

 return true;

}
