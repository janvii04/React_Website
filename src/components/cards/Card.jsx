import { useState } from "react";
import { FaHeart, FaBookmark, FaEye } from "react-icons/fa";

const cardsData = [
  {
        id: 1,
        type: "image",
        src: "img1.webp",
        text: "Ramotion",
        views: "10.7k",
        likes: 127,
      },
      {
        id: 2,
        type: "image",
        src: "img2.webp",
        text: "Emote",
        views: "5.4k",
        likes: 89,
      },
      {
        id: 3,
        type: "image",
        src: "img3.webp",
        text: "Muti",
        views: "7.2k",
        likes: 112,
      },
      {
        id: 4,
        type: "image",
        src: "img4.webp",
        text: "Recently updated",
        views: "8.3k",
        likes: 98,
      },
      {
        id: 5,
        type: "image",
        src: "img5.webp",
        text: "Trending now",
        views: "12.1k",
        likes: 145,
      },
      {
        id: 6,
        type: "image",
        src: "img6.webp",
        text: "Creative Design",
        views: "15.2k",
        likes: 210,
      },
      {
        id: 7,
        type: "image",
        src: "img7.webp",
        text: "Just added",
        views: "6.8k",
        likes: 76,
      },
      {
        id: 8,
        type: "image",
        src: "img8.webp",
        text: "New Release",
        views: "9.4k",
        likes: 134,
      },
      {
        id: 9,
        type: "image",
        src: "img9.webp",
        text: "Wix Studio",
        views: "11.6k",
        likes: 198,
      },
      {
        id: 10,
        type: "image",
        src: "img10.webp",
        text: "Top Rated",
        views: "14.5k",
        likes: 256,
      },
      {
        id: 11,
        type: "image",
        src: "img11.webp",
        text: "Editor's Pick",
        views: "13.7k",
        likes: 178,
      },
      {
        id: 12,
        type: "image",
        src: "img12.webp",
        text: "Modall",
        views: "16.2k",
        likes: 312,
      },
      {
        id: 13,
        type: "image",
        src: "img13.webp",
        text: "User Favorite",
        views: "33.2k",
        likes: 200,
      },
      {
        id: 14,
        type: "image",
        src: "img14.webp",
        text: "Roohi Khooi",
        views: "13.2k",
        likes: 300,
      },
      {
        id: 15,
        type: "image",
        src: "img15.webp",
        text: "Detail Studio",
        views: "19.2k",
        likes: 319,
      },
      {
        id: 16,
        type: "image",
        src: "img16.webp",
        text: "heatbeat",
        views: "9.2k",
        likes: 34,
      },
];

const Card = () => {
  const [likedItems, setLikedItems] = useState({});
  const [likeCounts, setLikeCounts] = useState(
    Object.fromEntries(cardsData.map(({ id, likes }) => [id, likes]))
  );
  const [hoveredCard, setHoveredCard] = useState(null);
  const [selectedCard,setSelectedCard]=useState(null);

  const toggleLike = (id) => {
    setLikedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));

    setLikeCounts((prev) => ({
      ...prev,
      [id]: prev[id] + (likedItems[id] ? -1 : 1),
    }));
  };

  return (
    <div className="container">

      
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {cardsData.map((card) => (
          <div
            key={card.id}
            className="col position-relative"
            onMouseEnter={() => setHoveredCard(card.id)}
            onMouseLeave={() => setHoveredCard(null)}
            onClick={()=> setSelectedCard(card)}
          >
            <div className="card  border-0 rounded overflow-hidden">
              {/* {type === "video" ? (
                <video
                  src={src}
                  className="w-100 h-100 object-cover rounded mb-50px"
                  controls
                />
              ) : ( */}
                <img
                  src={card.src}
                  className="w-100 h-100 object-contain"
                  alt={`Card ${card.id}`}
                />
              

              {/* Hover Options */}
              {hoveredCard === card.id && (
                <div className="hover-options">
                  <div className="option-box">
                    <FaBookmark size={22} />
                  </div>
                  <div className="option-box" onClick={(e) =>{e.stopPropagation(); toggleLike(card.id)}}
                  
                  >
                    <FaHeart
                      className={likedItems[card.id] ? "text-danger" : ""}
                      size={22}
                    />
                  </div>
                </div>
              )}

              {/* Footer */}
              <div className="card-footer bg-light w-100 d-flex justify-content-between align-items-center p-2">
                <div className="text-muted">{card.text}</div>
                <div className="d-flex gap-2 align-items-center">
                  <FaHeart
                    className={`cursor-pointer ${
                      likedItems[card.id] ? "text-danger" : "text-secondary"
                    }`}
                    onClick={() => toggleLike(card.id)}
                    size={20}
                  />
                  {likeCounts[card.id]}
                  <FaEye className="text-primary" size={20} />
                  {card.views}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedCard && (
        <div className="detail-view">
          <button className="back-btn" onClick={() => setSelectedCard(null)}>
            Close
          </button>
          <img
            src={selectedCard.src}
            alt={selectedCard.text}
            className="detail-image-small"
          />
          <h2>{selectedCard.text}</h2>
          <p>Views: {selectedCard.views}</p>
          <p>Likes: {likeCounts[selectedCard.id]}</p>
        </div>
      )}

      {/* CSS */}
      <style>
        {`
          .card {
            position: relative;
            overflow: hidden;
          }

          .hover-options {
        
        
            position: absolute;
            bottom: 30%;
            right: 10px;
            display: flex;
            gap: 8px;
            opacity: 0;
            transition: opacity 0.3s ease-in-out;
          }

          .col:hover .hover-options {
            opacity: 1;
            
          }

          .option-box {
            width: 40px;
            height: 40px;
            background-color: white;
            border-radius: 8px;
            display: flex;
            justify-content: center;
            align-items: center;
            box-shadow: 0 2px 10px #f8f9fa;
            cursor: pointer;
            // transition: background-color 0.3s ease-in-out;

          
          }

          .option-box:hover {
            background-color: #f8f9fa;
          }

          .icon {
            transition: color 0.3s ease-in-out;
          }

          .icon:hover {
            color: #ea4c89;
          }
        `}
      </style>
      {<style>
        {`
          .cursor-pointer { cursor: pointer; }
          .detail-view {
            position: fixed; top: 0; left: 0; width: 100%; height: 100vh;
            background: white; display: flex; flex-direction: column;
            justify-content: center; align-items: center; z-index: 1000;
          }
          .detail-image-small {
            max-width: 70%;
            height: 70%;
          }
          .back-btn {
            position: absolute; top: 20px; left: 20px; background: black;
            color: white; border: none; padding: 10px 15px; cursor: pointer;
            border-radius: 5px;
          }
        `}
      </style>}
    </div>
  );
};

export default Card;
//535592155408-n67s0akko7j171pkgc1gp4v8tihdrc88.apps.googleusercontent.com----client-id
//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---client secret