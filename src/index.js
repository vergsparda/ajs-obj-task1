export default function orderByProps(obj, order) {
  const ordered = [];
  const notOrdered = [];

  order.forEach((prop) => {
    if (order.includes(prop)) {
      ordered.push({ key: prop, value: obj[prop] });
    }
  });

  Object.entries(obj).forEach((prop) => {
    if (!order.includes(prop[0])) {
      notOrdered.push({ key: prop[0], value: prop[1] });
    }
  });

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
