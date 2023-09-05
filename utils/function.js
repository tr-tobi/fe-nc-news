export const dateTimeSeperator = (created_at) => {
  return created_at.replace("T", " At ").split(".")[0];
};
