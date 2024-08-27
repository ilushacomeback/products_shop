type Obj = Record<string, number>;

export const syncBaskets = (obj1: Obj, obj2: Obj | null): Obj => {
  if (!obj2) return obj1
  return Object.entries(obj1).reduce(
    (acc, [id, quantity]) => {
      if (id in acc) {
        acc[id] += quantity;
      } else {
        acc[id] = quantity;
      }
      return acc;
    },
    { ...obj2 }
  );
};

// const keys = [...Object.keys(obj1), ...Object.keys(obj2)];
// const acc: Obj = {};

// const newObj = keys.reduce((acc, key: string) => {
//   if (Object.hasOwn(obj1, key) && Object.hasOwn(obj2, key)) {
//     acc[key] = obj1[key] + obj2[key];
//   } else if (Object.hasOwn(obj1, key)) {
//     acc[key] = obj1[key];
//   } else {
//     acc[key] = obj2[key];
//   }
//   return acc;
// }, acc);
// return newObj;
