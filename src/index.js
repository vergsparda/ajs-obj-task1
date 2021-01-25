export default function orderByProps(obj, order) {
  const ordered = [];
  const notOrdered = [];

  order.forEach((prop) => {
    if (order.includes(prop)) {
      ordered.push({ key: prop, value: obj[prop]});
    }
  });

  for (const prop in obj) {
    if (!order.includes(prop)) {
      notOrdered.push({ key: prop, value: obj[prop] });
    }
  }

  notOrdered.sort((a, b) => {
    const propA = a.key.toLowerCase();
    const propB = b.key.toLowerCase();
    let result = 0;
    if (propA < propB) {
      result = -1;
    } else {
      result = 1;
    }
    return result;
  });
  return ordered.concat(notOrdered);
}
