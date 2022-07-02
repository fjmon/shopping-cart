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

const adProdCar = () => {
  const prod = document.querySelector('.items');
  const pai = document.querySelector('.cart__items');
  prod.addEventListener('click', async (event) => {
    if (event.target.classList.contains('item__add')) {
      const id = getSkuFromProductItem(event.target.parentElement);
      const item = await fetchItem(id);
      const objeto = { sku: item.id, name: item.title, salePrice: item.price };
      pai.appendChild(createCartItemElement(objeto));
    }
  });
};
adProdCar();

 window.onload = () => { produto(); };
