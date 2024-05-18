async function fetchPhotos() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/photos");
    // console.log(response);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    // console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching photos:", error);
    throw error;
  }
}

// const information = await fetchPhotos();
// console.log(information);
const fetchPosts = (id) => {
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.error(err));
};
document.addEventListener("DOMContentLoaded", async () => {
  try {
    const data = await fetchPhotos();
    console.log(data);
    const slicedData = data.slice(0, 100);
    console.log(slicedData);
    // const imgg = document.createElement("img");
    // imgg.src = slicedData[0].thumbnailUrl;
    // imgg.alt = '';
    // document.body.appendChild(imgg);
    for (let i = 0; i < slicedData.length; i++) {
      const card = document.createElement("div");
      const img = document.createElement("img");
      const p = document.createElement("p");
      const a = document.createElement("a");

      card.className = "card";
      card.id = "card";
      card.onclick = () => fetchPosts(slicedData[i].id);
      img.className = "card_img";
      p.className = "card_p";
      a.className = "card_a";

      img.src = slicedData[i].thumbnailUrl;
      img.alt = slicedData[i].title;
      p.textContent = slicedData[i].title;
      a.textContent = slicedData[i].url;
      a.href = slicedData[i].url;

      card.append(img, p, a);

      document.getElementById("cardsList").appendChild(card);
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
});
