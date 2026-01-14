# BDG3 Curiosidades

Uma página web interativa dedicada às curiosidades de Baldur's Gate 3, focada nas raças jogáveis de Dungeons & Dragons, com um design moderno e responsivo.

## 📖 Sobre o Projeto

Este projeto apresenta informações sobre as raças jogáveis disponíveis em Baldur's Gate 3. A página principal exibe um carrossel interativo com todas as raças principais, enquanto a página "Sobre" oferece uma introdução ao jogo.

O site é uma demonstração de habilidades em desenvolvimento web, utilizando tecnologias modernas para criar uma experiência de usuário envolvente e acessível.

## ✨ Características Principais

- **Carrossel de Raças**: Navegação suave entre as raças usando controles de seta ou indicadores visuais
- **Modal de Sub-raças**: Clique nos botões "Subclasses" para ver variações de cada raça em um modal elegante
- **Página Sobre BG3**: Informações detalhadas sobre Baldur's Gate 3 e sua conexão com Dungeons & Dragons
- **Design Responsivo**: Layout adaptável para desktop, tablet e mobile
- **Efeitos Visuais Modernos**:
  - Gradientes e sombras para profundidade
  - Animações de hover suaves
  - Glassmorphism no header
  - Transições fluidas
- **Navegação Intuitiva**: Menu simples com links para Raças e Sobre

## 🎯 Raças Incluídas

- Humano
- Elfo (Alto, Floresta)
- Drow
- Meio-Elfo
- Meio-Orc
- Halfling (Pés Leves, Coração Forte)
- Anão (Escudo, Cinzento, Dourado)
- Gnomo (Floresta, Rochas, Profundezas)
- Tiefling (Asmodeus, Mefistofeles, Zariel)
- Githyanki
- Draconato (Vermelho, Azul, Branco, Preto, Verde, Bronze, Cobre, Prateado, Dourado)

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica e acessível
- **CSS3**: Estilização avançada com:
  - Flexbox e Grid para layouts flexíveis
  - Media queries para responsividade
  - Transformações e animações
  - Variáveis CSS para manutenção
- **JavaScript (Vanilla)**: Funcionalidade interativa do carrossel e modais
- **Google Fonts**: Josefin Sans e Josefin Slab para tipografia elegante

## 🚀 Como Executar

1. Baixe ou clone este repositório
2. Abra o arquivo `index.html` em qualquer navegador web moderno
3. Navegue pelas raças usando as setas ou indicadores
4. Clique em "Subclasses" para ver as variações de cada raça
5. Acesse a página "Sobre BDG3" via o menu de navegação

**Requisitos**: Navegador web com suporte a CSS3 e JavaScript habilitado (Chrome, Firefox, Safari, Edge).

## 📱 Responsividade

O design se adapta automaticamente aos diferentes dispositivos:

- **Desktop (>1024px)**: Layout horizontal com imagem e texto lado a lado
- **Tablet (768px-1024px)**: Ajustes proporcionais e centralização
- **Mobile (<768px)**: Layout vertical, imagem no topo, texto centralizado

## 🎨 Paleta de Cores e Design

- **Fundo Principal**: Preto (#000) para contraste
- **Destaques**: Tons dourados (#b38d3b, #916301) para elementos interativos
- **Texto**: Branco (#fff) para legibilidade
- **Efeitos**: Sombras, bordas arredondadas e transparências

## 📁 Estrutura do Projeto

```
/
├── index.html              # Página principal com carrossel de raças
├── about.html              # Página sobre Baldur's Gate 3
├── styles.css              # Estilos CSS globais
├── scripts.js              # JavaScript para interatividade
├── img/                    # Pasta de imagens e ícones
│   ├── logo.png           # Logo do projeto
│   ├── arrows.png         # Ícones das setas de navegação
│   ├── [raça].png         # Imagens principais das raças
│   ├── [raça]-icon.png    # Ícones para indicadores
│   └── imagens com fundo/ # Versões antigas/alternativas
└── README.md              # Este arquivo de documentação
```

## 🔧 Personalização e Desenvolvimento

### Modificando Raças
Edite o arquivo `index.html` para adicionar ou alterar raças. Cada item do carrossel é uma `div` com classe `.item`.

### Estilos
Personalize cores, fontes e animações no arquivo `styles.css`. Use variáveis CSS para facilitar manutenção.

### Funcionalidades JavaScript
O arquivo `scripts.js` controla:
- Navegação do carrossel
- Indicadores ativos
- Modal de sub-raças
- Eventos de clique

### Adicionando Sub-raças
As sub-raças são definidas no JavaScript. Para adicionar novas, edite o objeto `subracesData` no `scripts.js`.

## 📈 Melhorias Futuras

- [ ] Integração com API de D&D para dados dinâmicos
- [ ] Sistema de busca e filtros
- [ ] Animações mais avançadas
- [ ] Suporte a múltiplos idiomas
- [ ] Galeria de imagens expandida

## 📄 Licença

Este projeto é desenvolvido para fins educacionais e de demonstração. As imagens e descrições são baseadas em materiais oficiais de Dungeons & Dragons e Baldur's Gate 3.

---

**Criado com ❤️ para fãs de Baldur's Gate 3 e Dungeons & Dragons**
