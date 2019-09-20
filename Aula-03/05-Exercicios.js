// Escreva a expressão em que atribui o
// valor `1` a `x` se `x` maior do que `y`.
//Agora reescreva a expressão anterior
//atribuindo 0 a `x` caso ele seja menor ou igual a y

let x = 3
let y = 2

if (x >= y) {
	x = 1
	console.log("x vai ser igual a 1")
} else {
	x = 0
}


// Você foi contratada para desenvolver um jogo,
// a cada vez que o usuário acerta, ele ganha 5 pontos.
// Quando se atinge a pontuação 100 ele entra na faixa
// bônus e sua pontuação é duplicada até ele atingir 
// 250 pontos,quando retorna a pontuação normal. Crie
// o código para implementar a lógica que calcula esse 
// score
let score = 0
let pontuacao = 5

function jogar(acertou) {
	acertou = Boolean(Math.floor(Math.random() * 2))
	acertou ? console.log("Você acertou!") : console.log('Você errou! :(')
	if (acertou) {
		if (score <= 100 || score > 250) {
			score = score + pontuacao
			console.log('O score corrigido é (+5)', score)
		} else if (score > 100 && score <= 250) {
			score = score + pontuacao * 2
			console.log('O score corrigido é (+10)', score)
		}
	}
}

// Reescreva a seguinte condicional
// sem usar o operador `!`:
// item = ! ( i < 10 || v >= 50 )

i = 11, v = 51
item = !(i < 10 || v >= 50)

// refs: 
// - http://www.math.toronto.edu/preparing-for-calculus/3_logic/we_3_negation.html
// - https://centraldefavoritos.com.br/2017/01/02/negacao-de-proposicoes/ (ver: "Negação de uma Proposição Disjuntiva")


// Escreva um código que receba um valor 
// digitado pelo usuário e mostre `par`
// se o número for par e `impar`
// se for impar.

let num = (prompt("Digite um número"))

if (num % 2 == 0) {

	console.log("Seu número é par.")
}
else {
	console.log("Seu número é ímpar.")
}

// Escreva a expressão que retorna `positivo` 
// se dois números forem positivos
// e `negativo` se dois números 
// forem negativos.

let randomNum = Math.ceil(Math.random() * 2) - 10

switch (Math.sign(randomNum)) {
	case 1:
		console.log('positivo')
		break;
	case -1:
		console.log('negativo')
		break;
	default:
		console.log("é igual a zero")
		break;
}


// Escreva a expressão em que retorna `true` se
// dois números tiverem os mesmos
// sinais (+ / -) e `false` 
// se tiverem sinais
// diferentes.

let numeroUm = parseInt(prompt("Digite o primeiro numero"))
let numeroDois = parseInt(prompt("Digite o segundo numero"))
if (numeroUm >= 0 && numeroDois >= 0 || numeroUm < 0 && numeroDois < 0) {
	true
}
else {
	false
}
//ou 

function positivoNegativo(a, b) {
	if (numeroUm >= 0 && numeroDois >= 0 || numeroUm < 0 && numeroDois < 0) {
		true
	}
	else {
		false
	}
	// Duas condicionais são equivalentes
	// quando, dado um mesmo input, devolvem
	// o mesmo output. Qual das próximas
	// condicionais são equivalentes? Porque?

	// Gera um numero randomico entre -10 e 10.
	const rand = Math.floor(Math.random() * 21) - 10

	// A
	if (rand > 0) {
		console.log(`O valor é positivo: ${rand}!`)
	} else {
		if (rand < 0) {
			console.log(`O valor é negativo: ${rand}!`)
		} else {
			console.log(`O valor é zero!`)
		}
	}

	// B
	if (rand > 0) {
		console.log(`O valor é positivo: ${rand}!`)
	}
	if (rand < 0) {
		console.log(`O valor é negativo: ${rand}!`)
	} else {
		console.log(`O valor é zero!`)
	}

	// C
	if (rand > 0) {
		console.log(`O valor é positivo: ${rand}!`)
	}
	if (rand < 0) {
		console.log(`O valor é negativo: ${rand}!`)
	}
	if (rand === 0) {
		console.log(`O valor é zero!`)
	}

	// Reescreva a próxima expressão usando
	// um if / else.
	// switch (day) {
	// 	case 0: 
	// 		console.log("Segunda")
	// 		break
	// 	case 1:
	// 		console.log("Terça")
	// 		break
	// 	case 2:
	// 		console.log("Quarta")
	// 		break
	// 	case 3:
	// 		console.log("Quinta")
	// 		break
	// 	case 4:
	// 		console.log("Sexta")
	// 		break
	// 	case 5:
	// 		console.log("Sábado")
	// 		break
	// 	case 6:
	// 		console.log("Domingo")
	// 		break
	// 	default:
	// 		throw "Dia inválido!"
	// }

	if (day == 0) {
		console.log("Segunda")
	}
	else if (day == 1) {
		console.log("Terça")
	}
	else if (day == 2) {
		console.log("Quarta")
	}
	else if (day == 3) {
		console.log("Quinta")
	}
	else if (day == 4) {
		console.log("Sexta")
	}
	else if (day == 5) {
		console.log("Sábado")
	}
	else if (day == 6) {
		console.log("Domingo")
	}
	else {
		throw "Dia inválido!"
	}
}


// Reescreva a próxima expressão usando
// o operador ternário
// let rand
// if (Math.random() > 0.5) {
// 	rand = true
// } else {
// 	rand = false
// }

let rand = (Math.random() > 0.5) ? true : false

// Reescreva a próxima expressão usando
// o operador ternário
// let color
// if (r > g && r > b) {
// 	color = "Vermelho"
// } else if (g > b && g > r) {
// 	color = "Verde"
// } else if (b > r && b > g) {
// 	color = "Azul"
// }

let r = 2
let g = 5
let b = 7

let color = (r > g && r > b) ? "vermelho" ? (g > b && g > r) : "Verde" ? (b > r && b > g) : "Azul" : color = "cinza"


// Lembra do exercício de par ou ímpar, vamos incrementar?
// Crie um jogo de par ou ímpar contra o compudador. 
// A ideia é você gerar um número aleatório para o 
// computador e comparar com o número informado pelo usuário e 
// mostrar quem venceu a partida. Divirta-se
// Dicas: 
//  - Use a função Math.random() para gerar um número inteiro aleatório
//  - Use o prompt() para coletar o número informado pelo usuário

let opcaoUsurario = "par"
let numUsuario = 1

let numComp = Math.floor(Math.random() * 2)
let resultadoPar = (numUsuario + numComp) % 2 == 0

if (opcaoUsurario == "par" && resultadoPar == true) {

	console.log("Você ganhou!")

}
else if (opcaoUsurario == "impar" && resultadoPar == false) {

	console.log("Você ganhou!")
}
else {
	console.log("Você perdeu!")
}

// Construa a logica do menu de clientes de um site
// caso o cliente seja perfil clássico, apresente uma ul
// contendo nos li os itens terno, blazer, camisa,calça. Caso
// o cliente seja do perfil esportivo mostre os itens: camisetas,
// short, bermudas, moleton. Caso o cliente não informe o perfil, 
//mostre todas as opções

<ul>
	<li>"Terno"</li>
	<li>"Blazer"</li>
	<li>"Camisa"</li>
	<li>"Calça"</li>
</ul>

<ul>
	<li>"Camisetas"</li>
	<li>"Short"</li>
	<li>"Bermudas"</li>
	<li>"Moleton"</li>
</ul>
