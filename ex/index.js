const produto = {
    nome: 'Caneta BIC preta',
    preco: 1.90,
    desconto: 0.05
}

function clone(objeto){
    return { ...objeto} // ... representam o operador spread   
}