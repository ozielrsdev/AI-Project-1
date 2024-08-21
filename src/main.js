import {APIKEY} from "./api_key.js"
const textInput = document.getElementById("textInput");
const btnInput = document.getElementsByClassName("btn")[0];


btnInput.addEventListener("click", ()=>{
  console.log(textInput.value)
})

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
  return result
}

query({ inputs: "Gosto de carros" }).then((response) => {
  console.log(JSON.stringify(response));
});
