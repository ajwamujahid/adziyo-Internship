const URL = "https://catfact.ninja/facts?limit=5";
const factpara = document.querySelector('#fact');
const btn = document.querySelector("#btn");

let facts = [];     
let index = 0;      

const getFacts = async () => {
  const response = await fetch(URL, {
    method: "GET",
    headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
  });
  const result = await response.json();
  facts = result.data.map(obj => obj.fact); 
  index = 0;
  factpara.innerText = facts[index]; 
};


btn.addEventListener("click", () => {
  if (facts.length === 0) return; 
  index = (index + 1) % facts.length; 
  factpara.innerText = facts[index];
});

getFacts(); 
