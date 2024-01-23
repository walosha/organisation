export const appendData = (data) => {
  const formData = new FormData();
  for (let [key, value] of Object.entries(data)) {
    if (Array.isArray(value)) {
      value = JSON.stringify(value);
    }
    formData.append(`${key}`, value);
  }
  return formData;
};
export const renderRepeatedSkeletons = (element, count) => {
  let skeletons = [];
  for (let i = 0; i < count; i++) {
    skeletons.push(element);
  }
  return skeletons;
};

export const formatDate = (dateString) => {
  var dateObject = new Date(dateString);

  // Convert to the desired format "May 18, 2023"
  let formattedDate = dateObject.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return formattedDate;
};
