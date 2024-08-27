export const normalizeData = (data) => {
  if (typeof data === 'string') {
    return JSON.parse(data);
  } else if (typeof data === 'object' && !Array.isArray(data)) {
    return data;
  }
  throw new Error('invalid data');
};
