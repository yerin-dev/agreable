// 아이템 localStorage에 추가하기
export const addCart = (e, item) => {
  const targetId = e.currentTarget.id;
  const data = handleLocalStorage("parse", "cart");
  let target = data.find(d => d.id === targetId);

  if (!target) {
    target = Object.assign(item, { count: 0 });
    data.push(target);
  }
  target.count++;

  handleLocalStorage("setItem", "cart", data);
  alert("해당 상품이 장바구니에 추가되었습니다.");

  return [data];
};

// 장바구니 item 총 갯수 구하기
export const totalCount = (data, target) => {
  const result = data.map(item => {
    return item[target];
  });

  return result.reduce((a, b) => {
    return a + b;
  }, 0);
};

//localStorage 가져오기, 꺼내오기
export const handleLocalStorage = (method, target, data) => {
  if (method === "parse") {
    return JSON.parse(localStorage.getItem(target)) || [];
  } else if (method === "setItem") {
    return localStorage.setItem(target, JSON.stringify(data));
  } else {
    return null;
  }
};

//금액에 콤마 붙이기
export const addCommaPrice = target => {
  return Number(target).toLocaleString("en");
};
