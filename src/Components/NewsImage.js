import React, { useEffect, useState } from "react";
import axios from "../Fetch/axios";

async function fetchImage(id) {
  try {
    const image = await axios.get(`/get-image?id=${id}`, {
      responseType: "arraybuffer",
    });
    const base64string = btoa(
      String.fromCharCode(...new Uint8Array(image.data))
    );
    const contentType = image.headers["content-type"];
    const imgSrc = "data:" + contentType + ";base64," + base64string;
    return imgSrc;
  } catch (error) {
    return error.message;
  }
}
export default function NewsImage(props) {
  const [image, setImage] = useState();
  useEffect(() => {
    async function getResponse() {
      const imgSrc = await fetchImage(props?.imageId);
      setImage(imgSrc);
    }
    getResponse();
  }, [props]);
  return (
    <>
      <img src={image} alt="news-img" />
    </>
  );
}
