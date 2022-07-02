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

const createProductItemElement = ({ sku, name, image }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return document.querySelector('.items').appendChild(section);
};
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

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const cartItemClickListener = (event) => {
  // coloque seu código aqui
  event.target.remove();
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const createCart = () => {
  const buttonAdd = document.getElementsByClassName('item__add');
 Array.from(buttonAdd).forEach((button) => button.addEventListener('click', async () => {
    const idItem = button.parentNode.querySelector('.item__sku').innerText;
    const { id, title, price } = await fetchItem(idItem);
    const ol = document.getElementsByClassName('cart__items')[0];
    ol.appendChild(createCartItemElement({ sku: id, name: title, salePrice: price }));
  }));
};

const createHtml = async () => {
  (await fetchProducts('computador')).results
  .map((objeto) => ({ sku: objeto.id, name: objeto.title, image: objeto.thumbnail }))
  .map(createProductItemElement)
  .forEach((objeto) => document.getElementsByClassName('items')[0].appendChild(objeto));

  createCart();
};

window.onload = () => createHtml();

// window.onload = () => { produto(); };
