const pai = document.querySelector('.cart__items');
const itens = document.querySelector('.items');

const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

// req 10 - Limpe o carrinho de compras
const cartItemClickListener = (event) => {
  event.target.remove();
  saveCartItems(pai.innerHTML);
};

const carItens = () => {  
  pai.innerHTML = getSavedCartItems();
  pai.addEventListener('click', cartItemClickListener);
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  pai.appendChild(li);
  saveCartItems(pai.innerHTML);  
};

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

// fazer uma nova função que abarque sku em lista e salvar e subir ao ls
// req 4 - Adicione o produto ao carrinho de compras

const adCar = (section) => {
  section.addEventListener('click', async (event) => {    
    const itemSel = getSkuFromProductItem(event.target.parentNode);
    const item = await fetchItem(itemSel);
    const dados = {
      sku: item.id,
      name: item.title,
      salePrice: item.price,
    };
    createCartItemElement(dados);
  });
};

const createProductItemElement = ({ sku, name, image }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));
  document.querySelector('.items').appendChild(section);
  adCar(section);
};

// req 2 - Crie uma listagem de produtos
const produto = async () => {
  const pedido = await fetchProducts('computador');
  pedido.results.forEach((item) => {
    const produtos = {
      sku: item.id,
      name: item.title,
      image: item.thumbnail,
    };
    return createProductItemElement(produtos);
  });
};

// req 5 - Remova o item do carrinho de compras ao clicar nele
const limpaCar = () => {
  const carroLimpo = document.querySelector('.empty-cart');
  carroLimpo.addEventListener('click', () => {
    localStorage.clear();
    pai.innerHTML = '';
  });
};
limpaCar();

// req 11 - Adicione um texto de carregando durante uma requisição à API
const load = async () => {
  const elemP = document.createElement('p');
  elemP.className = 'loading';
  elemP.innerText = 'carregando...';
  itens.appendChild(elemP);  
  await fetchProducts('computador');
  document.querySelector('.loading').remove();
  };
  load(); 
  
  window.onload = () => { 
    produto(); 
    carItens();
  };