# 🎉 FeelAI - Análise de Sentimentos
FeelAI é uma aplicação web que utiliza inteligência artificial para realizar a análise de sentimentos em textos inseridos pelo usuário. A aplicação é baseada na API de inferência da Hugging Face, especificamente usando o modelo `nlptown/bert-base-multilingual-uncased-sentiment`. Através deste modelo, o FeelAI é capaz de identificar e classificar os sentimentos contidos em um texto, categorizando-os em uma escala de 1 a 5 estrelas, que variam de "Muito Negativo" a "Positivo".

## ✨ Funcionalidades
- 🔍 Análise de sentimentos de textos em tempo real.
- 📊 Visualização dos resultados em forma de porcentagens para cada categoria de sentimento.
- 🖥️ Interface intuitiva e amigável.

## 🛠️ Tecnologias Utilizadas
- **Front-end**: HTML, CSS, JavaScript
- **API da IA**: Hugging Face Inference API

## 📋 Pré-requisitos
- Uma chave de API (access token) válida da Hugging Face, necessária para autenticação e uso do modelo de análise de sentimentos.

## 🔑 Como Obter um Access Token da Hugging Face
1. Acesse o site da <a href="https://huggingface.co/" target="_blank">**Hugging Face**</a>.
2. Crie uma conta ou faça login.
3. Navegue até as configurações da conta e gere um novo token de acesso.
4. Copie o token gerado para usar na aplicação FeelAI.

## 🚀 Instalação e Uso Localmente
**1. Clone o repositório:**

````bash
git clone https://github.com/ozielrsdev/AI-Project-1.git
````
**2. Navegue até o diretório do projeto:**

````bash
cd AI-Project-1
````

**3.Configurar a API Key:**

- Coloque o **ACCESS TOKEN** da **Hugging Face API** no arquivo **main.js**:
````javascript
const APIKEY = 'seu_access_token_aqui';
````
- Substitua **'seu_access_token_aqui'** pelo token de acesso que você obteve da Hugging Face.

**4. Executar a aplicação:**

- Abra o arquivo **index.html** diretamente no seu navegador, ou
Utilize um servidor HTTP local para rodar a aplicação, como o **<a href="https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer" target="_blank">Live Server</a>** do Visual Studio Code.

## 📝 Uso
1. Abra a aplicação no navegador.
2. Insira o texto que deseja analisar na área de texto.
3. Clique no botão "Analisar Sentimento".
4. Veja os resultados, incluindo a porcentagem de cada sentimento identificado.
## 🤝 Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e enviar pull requests. Antes de contribuir, por favor, certifique-se de ler as diretrizes de contribuição do projeto.
