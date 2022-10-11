let cont = 0;
let input = document.getElementById('campo');
let btnAdd = document.getElementById('btnAdd');
let main = document.getElementById('areaLista');
btnAdd.addEventListener('click', add);

function add(){
    //pegar valor digitado
    let valor = input.value;

    //se não tiver campo vazio, nulo ou indefinido
    if((valor !=="") && (valor !==null) && (valor !==undefined)){
        ++cont;
        let novoItem = ` <div id="${cont}" class="item">
            <div onclick="marcar(${cont})" class="item-icone">
                <i id="icone_${cont}" class="mdi mdi-circle-outline"></i>
            </div>
            <div onclick="marcar(${cont})" class="item-nome">
                ${valor}
            </div>
            <div class="item-botao">
                <button onclick="deletar(${cont})" class="delete"><i class="mdi mdi-delete"></i></i>  Deletar</button>
            </div>
        </div>`;

        //Adiconar nova tarefa na area
        main.innerHTML += novoItem;

        //zerar campo ao adicionar
        input.value = "";
        input.focus();
    }

}

function deletar(id){
    var tarefa = document.getElementById(id);
    tarefa.remove();
}

function marcar(id){
    var item = document.getElementById(id);
    var classe = item.getAttribute('class');

    if(classe =="item"){
        item.classList.add('clicado');
        var icone = document.getElementById('icone_'+id);
        icone.classList.remove('mdi-circle-outline');
        icone.classList.add('mdi-check-circle');
        //adicionar item selecionado para final
        item.parentNode.appendChild(item);
    }else{
        item.classList.remove('clicado');
        var icone = document.getElementById('icone_'+id);
        icone.classList.remove('mdi-check-circle');
        icone.classList.add('mdi-circle-outline');
    }
}

input.addEventListener("keyup", function(event){
    //Se clicou enter
    if(event.keyCode === 13){
        event.preventDefault();
        btnAdd.click();
    }
});


