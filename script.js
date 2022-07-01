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
const getProduct = async () => {
  const request = await fetchProducts('computador');
  request.results.forEach((item) => {
    const product = {
      sku: item.id,
      name: item.title,
      image: item.thumbnail,
    };
    return createProductItemElement(product);
  });
};

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const cartItemClickListener = (event) => {
  // coloque seu código aqui
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const itens = async () => {
  const resultados = await fetchProducts('computador');
  resultados.forEach(({ id, title, thumbnail }) => {
    const confItem = createProductItemElement({
      sku: id,
      name: title,
      image: thumbnail,
    });
    document.querySelector('.items').appendChild(confItem);
  });
};
window.onload = () => { getProduct(); };
