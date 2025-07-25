function calcularPreco() {
	ml = prompt("Escreva o litro da bebida (mL)")
	precobase = prompt("Escreva o quanto a bebida custou")
	lucrodesejado = prompt("Escreva a porcentagem (%) de lucro a mais que você quer tirar")

	precoporml = precobase/ml
	lucro = precoporml * (1 + lucrodesejado / 100)

	formatedprecoporml = precoporml.toFixed(2);
	formatedlucro = lucro.toFixed(2);

	msg_precoporml = "O preço base por mL é: R$ " + formatedprecoporml;
	msg_seulucro = "Para ter " + lucrodesejado + "% de lucro, você precisa vender cada mL por: R$ " + formatedlucro;

	document.querySelector('#header').innerHTML = msg_precoporml
	document.querySelector('#header2').innerHTML = msg_seulucro
}