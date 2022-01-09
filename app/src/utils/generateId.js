export const generateId = (length = 12) => {
  let id = "";
  let characters = "abcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < length; i++) {
    id += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return id;
};
