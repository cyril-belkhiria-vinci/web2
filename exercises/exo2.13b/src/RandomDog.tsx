import { useEffect, useState } from "react";

const RandomDog = () => {
  const [imgUrl, setImgUrl] = useState<string>("");

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Erreur fetch Dog API");
        }
        return res.json();
      })
      .then((data) => {
        setImgUrl(data.message);
      })
      .catch((err) => console.error(err));
  }, []);

  if (!imgUrl) return <p>Chargement...</p>;

  return (
    <img
      src={imgUrl}
      alt="Random dog"
      style={{ width: "300px", height: "300px", objectFit: "cover", borderRadius: "10px" }}
    />
  );
};

export default RandomDog;
