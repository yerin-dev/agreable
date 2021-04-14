export const reduceTotalCount = data => {
  const result = data.map(item => {
    return item.count;
  });

  return result.reduce((a, b) => {
    return a + b;
  }, 0);
};

export const addCommaPrice = target => {
  return Number(target).toLocaleString("en");
};

export const timestamp = () => {
  return `${new Date().getTime()}_${Math.random() * 1000}`;
};
