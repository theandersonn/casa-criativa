// usei o express pra criar e configurar meu servidor
const express = require("express")
const server = express()

const ideas = [
  {
    img: "https://image.flaticon.com/icons/svg/2729/2729007.svg",
    title: "Cursos de Programação",
    category: "Estudo",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem ipsum quod ut, voluptatum mollitia sequi",
    url: "https://github.com/theandersonn"
  },

  {
    img: "https://image.flaticon.com/icons/svg/2729/2729005.svg",
    title: "Exercícios",
    category: "Saúde",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem ipsum quod ut, voluptatum mollitia sequi",
    url: "https://github.com/theandersonn"
  },
  
  {
    img: "https://image.flaticon.com/icons/svg/2729/2729027.svg",
    title: "Meditação",
    category: "Mentalidade",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem ipsum quod ut, voluptatum mollitia sequi",
    url: "https://github.com/theandersonn"
  },

  {
    img: "https://image.flaticon.com/icons/svg/2729/2729032.svg",
    title: "Karaokê",
    category: "Estudo",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem ipsum quod ut, voluptatum mollitia sequi",
    url: "https://github.com/theandersonn"
  },
  
  {
    img: "https://image.flaticon.com/icons/svg/2729/2729038.svg",
    title: "Pintura",
    category: "Criatividade",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem ipsum quod ut, voluptatum mollitia sequi",
    url: "https://github.com/theandersonn"
  },

  {
    img: "https://image.flaticon.com/icons/svg/2729/2729048.svg",
    title: "Recortes",
    category: "Criatividade",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem ipsum quod ut, voluptatum mollitia sequi",
    url: "https://github.com/theandersonn"
  }   
]

// configurar arquivos estáticos (css, scripts, images)
server.use(express.static("public"))

// configuração do nunjucks
const nunjucks = require("nunjucks")
nunjucks.configure("views", {
  express: server,
  noCache: true,
})

// criei uma rota /
// e capturo o pedido do cliente para responder
server.get("/", function(req, res) {
  const reversedIdeas = [...ideas].reverse()

  let lastIdeas = []
  
  for (let idea of reversedIdeas) {
    if (lastIdeas.length < 2) {
      lastIdeas.push(idea)
    }
  }

  return res.render("index.html", { ideas: lastIdeas })
})

server.get("/ideias", function (req, res) {
  const reversedIdeas = [...ideas].reverse()
  return res.render("ideias.html", { ideas: reversedIdeas })
})

// liguei meu servidor na porta 3000
server.listen(3000)