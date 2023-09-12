// Função para adicionar um item à lista
function addItem() {
    const itemText = document.getElementById('item').value.trim();
    if (itemText === '') return;

    const shoppingList = document.getElementById('shopping-list');
    const listItem = document.createElement('li');
    listItem.textContent = itemText;
    listItem.onclick = function () {
        listItem.classList.toggle('completed');
    };

    shoppingList.appendChild(listItem);
    document.getElementById('item').value = '';
}

// Função para limpar a lista
function clearList() {
    const shoppingList = document.getElementById('shopping-list');
    shoppingList.innerHTML = '';
}
