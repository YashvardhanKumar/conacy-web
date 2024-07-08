export const handleUploadImage = async (file: File) => {
    const url = process.env.NEXT_PUBLIC_CLIENT_URL;
  const formdata = new FormData();
  formdata.append("file", file, file.name);

  return fetch(`${url}/api/upload`, {
    method: "POST",
    body: formdata,
    redirect: "follow",
  })
    .then((response) => response.json())
    .then((result) => result)
    .catch((error) => console.error(error));
};
