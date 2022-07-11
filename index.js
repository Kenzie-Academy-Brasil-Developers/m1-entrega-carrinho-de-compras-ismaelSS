let cMain = document.createElement('main')
let cH1 = document.createElement('h1')
let cDiv= document.createElement('div')
cDiv.setAttribute('id', 'divTop')

let productList = document.createElement('ul')


let cButton =document.createElement('button')


const renderizar = (function() {
    cH1.innerText='Virtual Market'
    document.body.appendChild(cH1)

    let item = document.createElement('span')
    item.innerText='item'
    let valor = document.createElement('span')
    valor.innerText='valor'

    cDiv.append(item, valor)
    cMain.appendChild(cDiv)

    criarListaItens()
    CriarProductDetais()

    let cbotão= document.createElement('button')
    cbotão.innerText='Finalizar compra'
    cMain.appendChild(cbotão)

    productList.classList.add('productList')

    document.body.appendChild(cMain)
    
})();

function criarListaItens(){
    for(let i=0; i<productsCart.length;i++){
        let cLi = document.createElement('li')
        let cNomeItem = document.createElement('span')
        let cPrecoItem = document.createElement('span')

        cNomeItem.setAttribute('id','nomeProduto')
        cNomeItem.innerText = productsCart[i].name
        cLi.appendChild(cNomeItem)

        cPrecoItem.innerText = `R$ ${productsCart[i].price}`
        cLi.appendChild(cPrecoItem)

        cLi.classList.add('ProductItem')
        productList.appendChild(cLi)
        cMain.appendChild(productList)
    }
}

function soma(){
    let valor = 0
    for(let i=0; i<productsCart.length;i++){
        valor+=productsCart[i].price
    }
    return valor
}


function CriarProductDetais(){
    
    let productDetais = document.createElement('ul')
    let ProductSome = document.createElement('li')
    let total = document.createElement('span')
    let valor = document.createElement('span')
    
    valor.setAttribute('id', 'total')

    productDetais.setAttribute('id','productDetais')
    
    total.innerText='Total'
    valor.innerText = `R$${soma()}`.replace('.',',')
    
    ProductSome.append(total, valor)
    productDetais.append(ProductSome)
    cMain.append(productDetais)
}