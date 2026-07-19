const IMGBB_API_KEY = "8d407890459308ed613dd2a35d531e8f";
const ENDPOINT = "https://api.imgbb.com/1/upload";

export const uploadImage = async (file) => {
  const formData = new FormData();
  formData.append("image", file);

  try {
    const response = await fetch(`${ENDPOINT}?key=${IMGBB_API_KEY}`, {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (!data.success) {
      throw new Error("Error al subir la imagen");
    }

    return data.data.url;
  } catch (error) {
    console.error("ImgBB error:", error);
    throw error;
  }
};
