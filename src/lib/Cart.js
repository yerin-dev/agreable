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

export const addCart = (id, item) => {
  const data = getCartStorage();
  let target = data.find(d => d.id === id);

  if (!target) {
    target = Object.assign(item, { count: 0 });
    data.push(target);
  }
  target.count++;

  setCartStorage(data);
  alert("해당 상품이 장바구니에 추가되었습니다.");

  return [data];
};
