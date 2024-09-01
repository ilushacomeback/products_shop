export const normalizeData = (data: unknown): Record<string, number> => {
  if (typeof data === 'string') {
    return JSON.parse(data);
  } else if (typeof data === 'object' && !Array.isArray(data) && data !== null) {
    return data as Record<string, number>;
  }
  throw new Error('invalid data');
};
