const cliente = {

nome:"Oficina Mecânica Jaguariúna",

slogan:"Especialistas em manutenção automotiva com qualidade e confiança",

telefone:"5511999999999",

endereco:"Jaguariúna - SP",

horario:"Segunda a Sexta - 8h às 18h",

servicos:[

{
titulo:"Troca de Óleo",
img:"img/troca-oleo.jpg",
desc:"Lubrificantes de alta qualidade para proteger o motor."
},

{
titulo:"Freios",
img:"img/freios.jpg",
desc:"Manutenção completa do sistema de freios."
},

{
titulo:"Suspensão",
img:"img/suspensao.jpg",
desc:"Reparo e substituição de amortecedores e suspensão."
},

{
titulo:"Diagnóstico Eletrônico",
img:"img/diagnostico.jpg",
desc:"Scanner profissional para identificar problemas."
},

{
titulo:"Ar Condicionado",
img:"img/ar-condicionado.jpg",
desc:"Carga de gás e manutenção completa do sistema."
}

],

veiculos:[

{
nome:"Carros",
img:"img/carro.png"
},

{
nome:"Caminhonetes",
img:"img/caminhonete.png"
},

{
nome:"SUVs",
img:"img/suv.png"
},

{
nome:"Utilitários",
img:"img/utilitario.png"
}

],

passos:[

"Entre em contato pelo WhatsApp",

"Realizamos diagnóstico do veículo",

"Apresentamos orçamento para aprovação",

"Serviço executado com garantia"

],

fotos:[

"img/oficina1.jpg",
"img/oficina2.jpg",
"img/oficina3.jpg"

],

mapa:"https://www.google.com/maps?q=-22.7046106,-46.9924357&output=embed"

}



document.getElementById("tituloSite").innerText=cliente.nome

document.getElementById("nomeOficina").innerText=cliente.nome

document.getElementById("tituloHero").innerText=cliente.nome

document.getElementById("slogan").innerText=cliente.slogan

document.getElementById("telefone").innerText="Telefone: "+cliente.telefone

document.getElementById("endereco").innerText=cliente.endereco

document.getElementById("horario").innerText=cliente.horario


document.getElementById("btnHero").href="https://wa.me/"+cliente.telefone
document.getElementById("btnWhatsappTopo").href="https://wa.me/"+cliente.telefone
document.getElementById("whatsappFixo").href="https://wa.me/"+cliente.telefone



const servicos=document.getElementById("listaServicos")

cliente.servicos.forEach(s=>{

const div=document.createElement("div")

div.className="servico-card"

div.innerHTML=`
<img src="${s.img}">
<h3>${s.titulo}</h3>
<p>${s.desc}</p>
`

servicos.appendChild(div)

})



const veiculos=document.getElementById("listaVeiculos")

cliente.veiculos.forEach(v=>{

const div=document.createElement("div")

div.className="veiculo-card"

div.innerHTML=`
<img src="${v.img}">
<h3>${v.nome}</h3>
`

veiculos.appendChild(div)

})



const passos=document.getElementById("listaPassos")

cliente.passos.forEach((p,i)=>{

const div=document.createElement("div")

div.className="passo"

div.innerHTML=`
<div class="numero">${i+1}</div>
<p>${p}</p>
`

passos.appendChild(div)

})



const galeria=document.getElementById("listaFotos")

cliente.fotos.forEach(f=>{

const img=document.createElement("img")

img.src=f

galeria.appendChild(img)

})


document.getElementById("mapa").src=cliente.mapa


document.getElementById("copyright").innerText=
"© "+new Date().getFullYear()+" "+cliente.nome