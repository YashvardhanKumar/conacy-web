export const handleUploadImage = async (file: File) => {
  const formdata = new FormData();
  formdata.append("file", file, file.name);

  return fetch(`/api/upload`, {
    method: "POST",
    body: formdata,
    redirect: "follow",
  })
    .then((response) => response.json())
    .then((result) => result)
    .catch((error) => console.error(error));
};
