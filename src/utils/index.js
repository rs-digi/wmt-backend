export const isInclude = (array, obj) => {
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element.id == obj.id) {
      return true;
    }
  }
  return false;
};
