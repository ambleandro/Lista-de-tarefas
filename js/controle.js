let contador = 0
let input = document.getElementById("inputTarefa");
let btnAdd = document.getElementById("btn-add");
let main = document.getElementById("areaLista")

function addTarefa() {
  // PEGAR O VALOR DIGITADO NO INPUT
  let valorInput = input.value;

  // SE NÃO FOR VAZIO, NEM NULO, NEM INDEFINIDO
  if ((valorInput!=="") && (valorInput !== null) && (valorInput !== undefined)) {
    
    ++contador;
    
    let novoItem = `<div id="${contador}" class="item">
      <div onclick="marcarTarefa(${contador})" class="item-icone">
        <span id="icone_${contador}" class="material-symbols-outlined mdi-circle-outline">radio_button_unchecked</span>
      </div>
      <div onclick="marcarTarefa(${contador})" class="item-nome">
        ${valorInput}
      </div>
      <div class="item-botao">
        <button onclick="deletar(${contador})" class="delete"><span class="material-symbols-outlined">delete</span></button>
      </div>
    </div>`;

    // ADICIONAR NOVO ITEM NO MAIN
    main.innerHTML += novoItem;

    // ZERAR OS CAMPINHOS
    input.value = "";
    input.focus()
  }
}

function deletar(id) {
  var tarefa = document.getElementById(id);
  tarefa.remove();
}

function marcarTarefa(id) {
  var item = document.getElementById(id);
  var classe = item.getAttribute("class");
  console.log(classe);

  if (classe === "item") {
      // Adiciona a classe 'clicado' e altera o ícone
      item.classList.add('clicado');
      var icone = document.getElementById('icone_' + id);
      icone.textContent = 'check_circle';

      // Move o item para o final da lista
      item.parentNode.appendChild(item);
  } else {
      // Remove a classe 'clicado' e altera o ícone
      item.classList.remove('clicado');
      var icone = document.getElementById('icone_' + id);
      icone.textContent = 'radio_button_unchecked';

      // Move o item para o início da lista
      var lista = item.parentNode;
      lista.insertBefore(item, lista.firstChild);
  }
}


input.addEventListener("keyup", function(event) {
  // SE TECLOU ENTER (13)
  if(event.keyCode === 13) {
    event.preventDefault();
    btnAdd.click();
  }
})