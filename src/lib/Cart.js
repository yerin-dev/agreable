export const getCartStorage = () => {
  return JSON.parse(localStorage.getItem("cart")) || [];
};

export const setCartStorage = data => {
  return localStorage.setItem("cart", JSON.stringify(data));
};

export const plusCartButton = (id, count) => {
  const data = getCartStorage();
  let target = data.find(d => d.id === id);

  if (count < 100) {
    target.count++;
  }

  setCartStorage(data);
};

export const minusCartButton = (id, count) => {
  const data = getCartStorage();
  let target = data.find(d => d.id === id);

  if (count > 1) {
    target.count--;
  }

  setCartStorage(data);
};

export const removeCartItem = id => {
  const data = getCartStorage();
  const itemCount = data.find(d => d.id === id).count;
  let target = data.filter(d => d.id !== id);

  setCartStorage(target);

  return itemCount;
};

export const reversedCartCheckBox = id => {
  const data = getCartStorage();
  let target = data.find(d => d.id === id);
  target.checked = !target.checked;

  setCartStorage(data);
};

export const reduceTotalPrice = data => {
  const isChecked = data.filter(item => item.checked);
  const result = isChecked.map(item => {
    return item.price * item.count;
  });

  return result.reduce((a, b) => {
    return a + b;
  }, 0);
};

export const addCart = (id, item) => {
  const data = getCartStorage();
  let target = data.find(d => d.id === id);

  if (!target) {
    target = Object.assign(item, { count: 0, checked: true });
    data.unshift(target);
  }
  target.count++;

  setCartStorage(data);
  alert("해당 상품이 장바구니에 추가되었습니다.");

  return [data];
};
