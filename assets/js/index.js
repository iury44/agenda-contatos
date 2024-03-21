let name = document.getElementById("nameComplet")
let telephone = document.getElementById("tel")
let email = document.getElementById("email")
let form = document.querySelector('form')
let tbody = document.querySelector("table tbody")
let btnRemove = document.getElementById("btn-remove")

form.addEventListener('submit',(event)=>{
    event.preventDefault()

   updateDisplay()
  remove()
    
})

function updateDisplay(){
   
  if(!validatedName()){   
    createRow()
    inputClear()  
  }else{
      alert("Insira nome Completo")
  }
    
}

function inputClear(){
  name.value =''
  telephone.value =''
  email.value = ''
}

function createRow() {
  const tr = document.createElement('tr');

  tr.innerHTML = `
      <td>${name.value}</td>
      <td>${mask(telephone)}</td>
      <td>${email.value}</td>
      <td><button id="btn-remove" type="button">X</button></td>
  `;

  tbody.appendChild(tr);

  // Adicionar evento de clique ao botão de remoção
  const btnRemove = tr.querySelector('#btn-remove');
  btnRemove.addEventListener('click', () => {
      remove(tr); // Chama a função remove para remover a linha
  });
}

function remove(row) {
  if(row && row.parentNode)
   // O parentNode è uma Propriedade Js que representa o 
  //nó pai de um elemento , garantindo nesse contexto que 
  // a linha que eu quero remover tem de fato um pai, 
  // garantindo que esteja de fato dentro de um elemento da DOM
 
  {
    row.parentNode.removeChild(row) // Remove a linha da tabela

  }
}


function validatedName() {
  let validatedName = name.value.trim(); // Remove espaços em branco do início e do fim

  let arr = validatedName.split(' '); // Divide a string em um array de palavras

  if (arr.length < 2) return true;

  return false; // Retorna false se houver pelo menos 2 palavras
}

function mask(tel){
  // função retorna a mascara do campo Telefone
  return `(${ String(tel.value).substring(0,2)})
               ${String(tel.value).substring(2,3)} -
                ${String(tel.value).substring(3,7)}-${String(tel.value).substring(7,11)}
               ` 
}
