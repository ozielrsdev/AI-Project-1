import {APIKEY} from "./api_key.js"
const textInput = document.getElementById("textInput");
const btnInput = document.getElementsByClassName("btn")[0];
const resultText = document.getElementById("resultText");

const query = async (data)=>{
  const response = await fetch("https://api-inference.huggingface.co/models/nlptown/bert-base-multilingual-uncased-sentiment", 
    {
      headers: {
        Authorization: `Bearer ${APIKEY}`
      },
      method: "POST",
      body: JSON.stringify(data),
    }
  );
  const result = await response.json()
  return result[0]
}

const convertLabelToString = (label)=>{
  switch (label) {
    case "5 stars":
      return "Muito Positivo"
    case "4 stars":
      return "Positivo"
    case "3 stars":
      return "Neutro"
    case "2 stars":
      return "Negativo"
    case "1 star":
      return "Muito Negativo"
    default:
      return "Não foi possivel detectar o sentimento!"
  }
}

btnInput.addEventListener("click", ()=>{
  if (textInput.value.trim() === "") {
    return alert("Digite algum texto!")
  }
  query({ inputs: `${textInput.value}` }).then((response) => {
 
    const resultStrings = response.map(item => {
    const sentimentText = convertLabelToString(item.label) 
    const percentage = (item.score * 100).toFixed(2)
    return `${percentage} % ${sentimentText}`
    })

    resultText.innerHTML = `O Sentimento dessa frase é <span style="font-weight: bold;"><br>${resultStrings.join("<br>")}</span>`;  
});
})


