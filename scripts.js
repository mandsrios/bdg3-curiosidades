let prevButton = document.getElementById('prev')
let nextButton = document.getElementById('next')
let conatiner = document.querySelector('.container')
let items = conatiner.querySelectorAll('.list .item')
let indicator = document.querySelector('.indicators')
let dots = indicator.querySelectorAll('ul li')

let active = 0
let firstPosition = 0
let lastPosition = items.length - 1


const modal = document.getElementById('subrace-modal')
const closeModalBtn = document.querySelector('.close-modal')
const subraceList = document.getElementById('subrace-list')
const modalTitle = document.getElementById('modal-title')

const subraceData = {
    'Humano': [
        {
            name: 'Humano Padrão',
            description: 'Humanos padrão não possuem sub-raças específicas, mas são incrivelmente versáteis e adaptáveis.',
            icon: './img/humanos-icon.png'
        }
    ],
    'Elfo': [
        {
            name: 'Elfo Alto',
            description: 'Herdeiros do místico Plano das Fadas, os altos elfos valorizam a magia em todas as suas formas, e mesmo aqueles que não estudam feitiçaria podem manipular a Trama.',
            icon: './img/elfo-alto-icon.png'
        },
        {
            name: 'Elfo da Floresta',
            description: 'Esses elfos passam suas vidas reclusas nas florestas de Faerûn. Décadas de treinamento em arco e flecha e camuflagem são aprimoradas por uma agilidade sobrenatural.',
            icon: './img/elfo-floresta-icon.png'
        }
    ],
    'Drow': [
        {
            name: 'Drow jurado a Lolth',
            description: 'Criados pelo culto de Lolth na cidade de Menzoberranzan, esses drows personificam as virtudes de sua deusa corrupta e impiedosa. Lolth marca seus seguidores com olhos vermelhos brilhantes para que aqueles no Subterrâneo aprendam a temê-los à primeira vista.',
            icon: './img/drows-lolth-icon.png'
        },
        {
            name: 'Drow Seldarine',
            description: 'Os drows de Seldarine podem ser encontrados em busca de aliados por toda Faerûn, com o objetivo de resolver seu conflito com Lolth - e entre si - por quaisquer meios necessários.',
            icon: './img/drows-seldarine-icon.png'
        }
    ],
    'Meio-Elfo': [
        {
            name: 'Meio-Elfo Alto',
            description: 'Um toque do Plano das Fadas permanece nos meio-elfos com essa linhagem, e mesmo aqueles sem treinamento em magia possuem um traço de poder selvagem.',
            icon: './img/meio-elfo-alto-icon.png'
        },
        {
            name: 'Meio-Elfo Floresta',
            description: 'Assim como seus ancestrais elfos da floresta, esses meio-elfos possuem passos rápidos e um olhar apurado para a furtividade. Contudo, muitos se afastam do isolamento nas florestas de Faerûn para explorar o resto dos Reinos.',
            icon: './img/meio-elfo-floresta-icon.png'
        },
        {
            name: 'Meio-Elfo Drow',
            description: 'Meio-elfos não possuem sub-raças específicas, mas herdam traços de seus ancestrais élficos e humanos.',
            icon: './img/meio-elfo-drow-icon.png'
        }
    ],
    'Meio-Orc': [
        {
            name: 'Meio-Orc Padrão',
            description: 'Meio-orcs não possuem sub-raças específicas, mas combinam força orc com adaptabilidade humana.',
            icon: './img/meioOrcs-icon.png'
        }
    ],
    'Halfling': [
        {
            name: 'Pés Leves',
            description: 'Furtivos, mas sociáveis, esses halflings viajam por toda Faerûn para fazerem seus nomes.',
            icon: './img/halfling-pes-leves-icon.png'
        },
        {
            name: 'Pequenino do Coração Forte',
            description: 'Diz a lenda que o sangue anão conferia aos Corações Fortes sua resistência. Resistentes a venenos e com uma força inesgotável, esses halflings se defendem com facilidade.',
            icon: './img/halfling-coracao-forte-icon.png'
        }
    ],
    'Anão': [
        {
            name: 'Anão Dourado',
            description: 'Esses anões são conhecidos por sua confiança e intuição aguçada. A cultura de seu Reino Profundo valoriza a família, os rituais e o artesanato refinado.',
            icon: './img/anoes-dourado-icon.png'
        },
        {
            name: 'Anão do Escudo',
            description: 'Grandes perdas em guerras antigas contra goblins e orcs levaram esses anões a adotar uma mentalidade cínica, mas eles suportarão qualquer coisa para restaurar suas terras ancestrais.',
            icon: './img/anoes-escudo-icon.png'
        },
        {
            name: 'Duergar (Anão Cinzento)',
            description: 'Outrora escravizados pelos devoradores de mentes arcanos, os duergar adaptaram-se à liberdade com uma praticidade implacável. Seu comportamento frio e sua habilidade para o sigilo são bem conhecidos em toda a Infraescuridão.',
            icon: './img/anoes-cinzento-icon.png'
        }
    ],
    'Gnomo': [
        {
            name: 'Gnomo da Floresta',
            description: 'Ainda menores que seus primos e duas vezes mais reclusos, os gnomos da floresta são uma visão rara em Faerûn. Eles dominam a magia e o artesanato em seus bosques distantes e idílicos.',
            icon: './img/gnomo-floresta-icon.png'
        },
        {
            name: 'Gnomo das Profundezas',
            description: 'Mais reservados que seus primos da superfície, os gnomos das profundezas sobrevivem no Subterrâneo com visão no escuro e furtividade habilidosa.',
            icon: './img/gnomo-profundezas-icon.png'
        },
        {
            name: 'Gnomo das Rochas',
            description: 'Os gnomos das rochas, os mais comuns na superfície de Faerûn, receberam esse nome por sua resistência e afinidade com o metal.',
            icon: './img/gnomo-rochas-icon.png'
        }
    ],
    'Tiefling': [
        {
            name: 'Tiefling Asmodeus',
            description: 'Ligados a Nessus, a camada mais profunda dos Infernos, esses tieflings herdaram a habilidade de manipular fogo e trevas da linhagem infernal do arquidemônio Asmodeus.',
            icon: './img/tiefling-asmodeus-icon.png'
        },
        {
            name: 'Tiefling Mefistófeles ',
            description: 'Tieflings possuem aparência demoníaca herdada de seus ancestrais infernais.',
            icon: './img/tiefling-mefistofeles-icon.png'
        },
        {
            name: 'Tiefling Zariel',
            description: 'Os tieflings da linhagem de Zariel são dotados de força marcial e podem canalizar chamas escaldantes para punir seus inimigos.',
            icon: './img/tiefling-zariel-icon.png'
        }
    ],
    'Githyanki': [
        {
            name: 'Githyanki Padrão',
            description: 'Guerreiros implacáveis do Plano Astral, especializados em combate psíquico e montaria de dragões.',
            icon: './img/githyanki-icon.png'
        }
    ],
    'Draconato': [
        {
            name: 'Draconato de Dragão Negro',
            description: 'Apesar de não possuírem laços ancestrais com essas criaturas poderosas, esses dracônicos compartilham a coloração carvão e o hálito crepitante e acre dos dragões negros.',
            icon: './img/draconato-negro-icon.png'
        },
        {
            name: 'Draconato de Dragão Azul',
            description: 'Apesar de não possuírem laços ancestrais com essas criaturas poderosas, esses dragonborn compartilham as escamas azul-safira profundas e o hálito crepitante e carregado dos dragões azuis.',
            icon: './img/draconato-azul-icon.png'
        },
        {
            name: 'Draconato de Dragão Verde',
            description: 'Apesar de não possuírem laços ancestrais com essas criaturas poderosas, esses dragonborn compartilham o aspecto verde-esmeralda brilhante e o hálito fétido e pútrido dos dragões verdes.',
            icon: './img/draconato-verde-icon.png'
        },
        {
            name: 'Draconato de Dragão Vermelho',
            description: 'Apesar de não possuírem laços ancestrais com essas criaturas poderosas, esses dracônicos compartilham a aparência escarlate brilhante e o hálito ardente e turbulento dos dragões vermelhos.',
            icon: './img/draconato-vermelho-icon.png'
        },
        {
            name: 'Draconato de Dragão Branco',
            description: 'Apesar de não possuírem laços ancestrais com essas criaturas poderosas, esses dragonborn compartilham o aspecto nevado e o hálito gélido dos dragões brancos.',
            icon: './img/draconato-branco-icon.png'
        },
        {
            name: 'Draconato de Dragão Prateado',
            description: 'Apesar de não possuírem laços ancestrais com essas criaturas poderosas, esses dracônicos compartilham o brilho reluzente e o hálito gélido e escaldante dos dragões prateados.',
            icon: './img/draconato-prateado-icon.png'
        },
        {
            name: 'Draconato de Dragão Dourado',
            description: 'Apesar de não possuírem laços ancestrais com essas criaturas poderosas, esses draconianos compartilham o brilho resplandecente e o hálito turbilhonante e flamejante dos dragões dourados.',
            icon: './img/draconato-dourado-icon.png'
        },
        {
            name: 'Draconato de Dragão Cobre',
            description: 'Apesar de não possuírem laços ancestrais com essas criaturas poderosas, esses dragonborn compartilham a coloração rosa-dourada e o hálito corrosivo dos dragões de cobre.',
            icon: './img/draconato-cobre-icon.png'
        },
         {
            name: 'Draconato de Dragão Bronze',
            description: 'Apesar de não possuírem laços ancestrais com essas criaturas poderosas, esses dragonborn compartilham as escamas brilhantes em tom sépia e o hálito cintilante dos dragões de bronze.',
            icon: './img/draconato-bronze-icon.png'
        }
    ]
}

function showSubraceModal(raceName) {
    const subraces = subraceData[raceName] || []

    subraceList.innerHTML = ''

    modalTitle.textContent = `Sub-raças de ${raceName}`

    subraces.forEach(subrace => {
        const subraceItem = document.createElement('div')
        subraceItem.className = 'subrace-item'

        subraceItem.innerHTML = `
            <div class="subrace-icon">
                <img src="${subrace.icon}" alt="Ícone ${subrace.name}">
            </div>
            <div class="subrace-info">
                <h3>${subrace.name}</h3>
                <p>${subrace.description}</p>
            </div>
        `

        subraceList.appendChild(subraceItem)
    })

    modal.classList.add('show')
}

function hideSubraceModal() {
    modal.classList.remove('show')
}

function addSubraceButtonListeners() {
    const subraceButtons = document.querySelectorAll('.subraca')

    subraceButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            const activeItem = document.querySelector('.item.active')
            const raceName = activeItem.querySelector('h2').textContent.trim()
            showSubraceModal(raceName)
        })
    })
}

closeModalBtn.addEventListener('click', hideSubraceModal)

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        hideSubraceModal()
    }
})

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('show')) {
        hideSubraceModal()
    }
})

nextButton.onclick = () => {
    let itemOld = conatiner.querySelector('.list .item.active')
    itemOld.classList.remove('active')

    active = active + 1 > lastPosition ? 0 : active + 1
    items[active].classList.add('active')

    let dotsOld = indicator.querySelector('ul li.active')
    dotsOld.classList.remove('active')
    dots[active].classList.add('active')
}

prevButton.onclick = () => {
    let itemOld = conatiner.querySelector('.list .item.active')
    itemOld.classList.remove('active')

    active = active - 1 < firstPosition ? lastPosition : active - 1
    items[active].classList.add('active')

    let dotsOld = indicator.querySelector('ul li.active')
    dotsOld.classList.remove('active')
    dots[active].classList.add('active')
}

addSubraceButtonListeners()
