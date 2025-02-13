// // import React from "react";
// import { useState } from "react";
// import { FaHeart, FaEye } from "react-icons/fa";
// const Card = () => {
//   const [liked, setLiked] = useState(false);

//   return (
//     <div className="container">
//       <div className="row row-cols-1 row-cols-md-4 g-4">
//         <div className="col">
//           <div
//             className="card shadow-lg border-0 rounded"
//             style={{ width: "100%" }}
//           >
//             <img
//               src="/img1.webp"
//               className="card-img-top mx-auto d-block"
//               alt="Card 1"
//               style={{ width: "100%", height: "" }}
//             />

//             <div className="card-footer bg-light d-flex justify-content-between align-items-center w-100 p-2">
//               {/* Last updated and Icons */}
//               <div className="d-flex justify-content-between w-100">
//                 <div className="text-muted">Ramotion</div>

//                 <div className="d-flex gap-2">
//                   {/* Like Button */}
//                   <FaHeart
//                     className={`cursor-pointer ${
//                       liked ? "text-danger" : "text-secondary"
//                     }`}
//                     onClick={() => setLiked(!liked)}
//                     size={20}
//                   />

//                   {/* View Icon */}
//                   <FaEye className="text-primary" size={20} />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Card 2 */}
//         <div className="col">
//           <div
//             className="card shadow-lg border-0 rounded"
//             style={{ width: "100%" }}
//           >
//             <img
//               src="/img3.webp"
//               className="card-img-top mx-auto d-block"
//               alt="Card 2"
//               style={{ width: "100%", height: "" }}
//             />

//             <div className="card-footer bg-light d-flex justify-content-between align-items-center w-100 p-2">
//               {/* Last updated and Icons */}
//               <div className="d-flex justify-content-between w-100">
//                 <div className="text-muted">Emote</div>

//                 <div className="d-flex gap-2">
//                   {/* Like Button */}
//                   <FaHeart
//                     className={`cursor-pointer ${
//                       liked ? "text-danger" : "text-secondary"
//                     }`}
//                     onClick={() => setLiked(!liked)}
//                     size={20}
//                   />

//                   {/* View Icon */}
//                   <FaEye className="text-primary" size={20} />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* Card 3 */}

//         <div className="col">
//           <div
//             className="card shadow-lg border-0 rounded"
//             style={{ width: "100%" }}
//           >
//             <img
//               src="/img2.webp"
//               className="card-img-top mx-auto d-block"
//               alt="Card 3"
//               style={{ width: "100%", height: "" }}
//             />

//             <div className="card-footer bg-light d-flex justify-content-between align-items-center w-100 p-2">
//               {/* Last updated and Icons */}
//               <div className="d-flex justify-content-between w-100">
//                 <div className="text-muted">One Week Work</div>

//                 <div className="d-flex gap-2">
//                   {/* Like Button */}
//                   <FaHeart
//                     className={`cursor-pointer ${
//                       liked ? "text-danger" : "text-secondary"
//                     }`}
//                     onClick={() => setLiked(!liked)}
//                     size={20}
//                   />

//                   {/* View Icon */}
//                   <FaEye className="text-primary" size={20} />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* Card 4 */}
//         <div className="col">
//           <div
//             className="card shadow-lg border-0 rounded"
//             style={{ width: "100%" }}
//           >
//             <img
//               src="/img4.webp"
//               className="card-img-top mx-auto d-block"
//               alt="Card 4"
//               style={{ width: "100%", height: "" }}
//             />

//             <div className="card-footer bg-light d-flex justify-content-between align-items-center w-100 p-2">
//               {/* Last updated and Icons */}
//               <div className="d-flex justify-content-between w-100">
//                 <div className="text-muted">Last updated 3 mins ago</div>

//                 <div className="d-flex gap-2">
//                   {/* Like Button */}
//                   <FaHeart
//                     className={`cursor-pointer ${
//                       liked ? "text-danger" : "text-secondary"
//                     }`}
//                     onClick={() => setLiked(!liked)}
//                     size={20}
//                   />

//                   {/* View Icon */}
//                   <FaEye className="text-primary" size={20} />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* Card 5 */}
//         <div className="col">
//           <div
//             className="card shadow-lg border-0 rounded"
//             style={{ width: "100%" }}
//           >
//             <img
//               src="/img5.webp"
//               className="card-img-top mx-auto d-block"
//               alt="Card 5"
//               style={{ width: "100%", height: "" }}
//             />

//             <div className="card-footer bg-light d-flex justify-content-between align-items-center w-100 p-2">
//               {/* Last updated and Icons */}
//               <div className="d-flex justify-content-between w-100">
//                 <div className="text-muted">Last updated 3 mins ago</div>

//                 <div className="d-flex gap-2">
//                   {/* Like Button */}
//                   <FaHeart
//                     className={`cursor-pointer ${
//                       liked ? "text-danger" : "text-secondary"
//                     }`}
//                     onClick={() => setLiked(!liked)}
//                     size={20}
//                   />

//                   {/* View Icon */}
//                   <FaEye className="text-primary" size={20} />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* Card 6 */}
//         <div className="col">
//           <div
//             className="card shadow-lg border-0 rounded"
//             style={{ width: "100%" }}
//           >
//             <img
//               src="/img6.webp"
//               className="card-img-top mx-auto d-block"
//               alt="Card 6"
//               style={{ width: "100%", height: "" }}
//             />

//             <div className="card-footer bg-light d-flex justify-content-between align-items-center w-100 p-2">
//               {/* Last updated and Icons */}
//               <div className="d-flex justify-content-between w-100">
//                 <div className="text-muted">Last updated 3 mins ago</div>

//                 <div className="d-flex gap-2">
//                   {/* Like Button */}
//                   <FaHeart
//                     className={`cursor-pointer ${
//                       liked ? "text-danger" : "text-secondary"
//                     }`}
//                     onClick={() => setLiked(!liked)}
//                     size={20}
//                   />

//                   {/* View Icon */}
//                   <FaEye className="text-primary" size={20} />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* Card 7 */}
//         <div className="col">
//           <div
//             className="card shadow-lg border-0 rounded"
//             style={{ width: "100%" }}
//           >
//             <img
//               src="/img7.webp"
//               className="card-img-top mx-auto d-block"
//               alt="Card 7"
//               style={{ width: "100%", height: "" }}
//             />

//             <div className="card-footer bg-light d-flex justify-content-between align-items-center w-100 p-2">
//               {/* Last updated and Icons */}
//               <div className="d-flex justify-content-between w-100">
//                 <div className="text-muted">Last updated 3 mins ago</div>

//                 <div className="d-flex gap-2">
//                   {/* Like Button */}
//                   <FaHeart
//                     className={`cursor-pointer ${
//                       liked ? "text-danger" : "text-secondary"
//                     }`}
//                     onClick={() => setLiked(!liked)}
//                     size={20}
//                   />

//                   {/* View Icon */}
//                   <FaEye className="text-primary" size={20} />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* Card 8 */}
//         <div className="col">
//           <div
//             className="card shadow-lg border-0 rounded"
//             style={{ width: "100%" }}
//           >
//             <img
//               src="/img8.webp"
//               className="card-img-top mx-auto d-block"
//               alt="Card 8"
//               style={{ width: "100%", height: "" }}
//             />

//             <div className="card-footer bg-light d-flex justify-content-between align-items-center w-100 p-2">
//               {/* Last updated and Icons */}
//               <div className="d-flex justify-content-between w-100">
//                 <div className="text-muted">Last updated 3 mins ago</div>

//                 <div className="d-flex gap-2">
//                   {/* Like Button */}
//                   <FaHeart
//                     className={`cursor-pointer ${
//                       liked ? "text-danger" : "text-secondary"
//                     }`}
//                     onClick={() => setLiked(!liked)}
//                     size={20}
//                   />

//                   {/* View Icon */}
//                   <FaEye className="text-primary" size={20} />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* Card 9 */}
//         <div className="col">
//           <div
//             className="card shadow-lg border-0 rounded"
//             style={{ width: "100%" }}
//           >
//             <img
//               src="/img9.webp"
//               className="card-img-top mx-auto d-block"
//               alt="Card 9"
//               style={{ width: "100%", height: "" }}
//             />

//             <div className="card-footer bg-light d-flex justify-content-between align-items-center w-100 p-2">
//               {/* Last updated and Icons */}
//               <div className="d-flex justify-content-between w-100">
//                 <div className="text-muted">Last updated 3 mins ago</div>

//                 <div className="d-flex gap-2">
//                   {/* Like Button */}
//                   <FaHeart
//                     className={`cursor-pointer ${
//                       liked ? "text-danger" : "text-secondary"
//                     }`}
//                     onClick={() => setLiked(!liked)}
//                     size={20}
//                   />

//                   {/* View Icon */}
//                   <FaEye className="text-primary" size={20} />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* Card 10 */}
//         <div className="col">
//           <div
//             className="card shadow-lg border-0 rounded"
//             style={{ width: "100%" }}
//           >
//             <img
//               src="/img10.webp"
//               className="card-img-top mx-auto d-block"
//               alt="Card 10"
//               style={{ width: "100%", height: "" }}
//             />

//             <div className="card-footer bg-light d-flex justify-content-between align-items-center w-100 p-2">
//               {/* Last updated and Icons */}
//               <div className="d-flex justify-content-between w-100">
//                 <div className="text-muted">Plainthing Studio
//                 </div>

//                 <div className="d-flex gap-2">
//                   {/* Like Button */}
//                   <FaHeart
//                     className={`cursor-pointer ${
//                       liked ? "text-danger" : "text-secondary"
//                     }`}
//                     onClick={() => setLiked(!liked)}
//                     size={20}
//                   />

//                   {/* View Icon */}
//                   <FaEye className="text-primary" size={20} />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* Card 11 */}
//         <div className="col">
//           <div
//             className="card shadow-lg border-0 rounded"
//             style={{ width: "100%" }}
//           >
//             <img
//               src="/img11.webp"
//               className="card-img-top mx-auto d-block"
//               alt="Card 11"
//               style={{ width: "100%", height: "" }}
//             />

//             <div className="card-footer bg-light">
//               <div className="text-muted">Last updated 3 mins ago</div>
//             </div>
//           </div>
//         </div>
//         {/* Card 12*/}
//         <div className="col">
//           <div
//             className="card shadow-lg border-0 rounded"
//             style={{ width: "100%" }}
//           >
//             <img
//               src="/img12.webp"
//               className="card-img-top mx-auto d-block"
//               alt="Card 12"
//               style={{ width: "100%", height: "" }}
//             />

//             <div className="card-footer bg-light d-flex justify-content-between align-items-center w-100 p-2">
//               {/* Last updated and Icons */}
//               <div className="d-flex justify-content-between w-100">
//                 <div className="text-muted">Last updated 3 mins ago</div>

//                 <div className="d-flex gap-2">
//                   {/* Like Button */}
//                   <FaHeart
//                     className={`cursor-pointer ${
//                       liked ? "text-danger" : "text-secondary"
//                     }`}
//                     onClick={() => setLiked(!liked)}
//                     size={20}
//                   />

//                   {/* View Icon */}
//                   <FaEye className="text-primary" size={20} />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* Card 13 */}
//         <div className="col">
//           <div
//             className="card shadow-lg border-0 rounded"
//             style={{ width: "100%" }}
//           >
//             <img
//               src="/img13.webp"
//               className="card-img-top mx-auto d-block"
//               alt="Card 13"
//               style={{ width: "100%", height: "" }}
//             />

//             <div className="card-footer bg-light d-flex justify-content-between align-items-center w-100 p-2">
//               {/* Last updated and Icons */}
//               <div className="d-flex justify-content-between w-100">
//                 <div className="text-muted">Last updated 3 mins ago</div>

//                 <div className="d-flex gap-2">
//                   {/* Like Button */}
//                   <FaHeart
//                     className={`cursor-pointer ${
//                       liked ? "text-danger" : "text-secondary"
//                     }`}
//                     onClick={() => setLiked(!liked)}
//                     size={20}
//                   />

//                   {/* View Icon */}
//                   <FaEye className="text-primary" size={20} />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* Card 14*/}
//         <div className="col">
//           <div
//             className="card shadow-lg border-0 rounded"
//             style={{ width: "100%" }}
//           >
//             <img
//               src="/img14.webp"
//               className="card-img-top mx-auto d-block"
//               alt="Card 14"
//               style={{ width: "100%", height: "" }}
//             />

//             <div className="card-footer bg-light d-flex justify-content-between align-items-center w-100 p-2">
//               {/* Last updated and Icons */}
//               <div className="d-flex justify-content-between w-100">
//                 <div className="text-muted">Last updated 3 mins ago</div>

//                 <div className="d-flex gap-2">
//                   {/* Like Button */}
//                   <FaHeart
//                     className={`cursor-pointer ${
//                       liked ? "text-danger" : "text-secondary"
//                     }`}
//                     onClick={() => setLiked(!liked)}
//                     size={20}
//                   />

//                   {/* View Icon */}
//                   <FaEye className="text-primary" size={20} />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* Card 15 */}
//         <div className="col">
//           <div
//             className="card shadow-lg border-0 rounded"
//             style={{ width: "100%" }}
//           >
//             <img
//               src="/img15.webp"
//               className="card-img-top mx-auto d-block"
//               alt="Card 15"
//               style={{ width: "100%", height: "" }}
//             />

//             <div className="card-footer bg-light d-flex justify-content-between align-items-center w-100 p-2">
//               {/* Last updated and Icons */}
//               <div className="d-flex justify-content-between w-100">
//                 <div className="text-muted">Lucian Radu
//                 </div>

//                 <div className="d-flex gap-2">
//                   {/* Like Button */}
//                   <FaHeart
//                     className={`cursor-pointer ${
//                       liked ? "text-danger" : "text-secondary"
//                     }`}
//                     onClick={() => setLiked(!liked)}
//                     size={20}
//                   />

//                   {/* View Icon */}
//                   <FaEye className="text-primary" size={20} />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* Card 16 */}
//         <div className="col">
//           <div
//             className="card shadow-lg border-0 rounded"
//             style={{ width: "100%" }}
//           >
//             <img
//               src="/img16.webp"
//               className="card-img-top mx-auto d-block"
//               alt="Card 16"
//               style={{ width: "100%", height: "" }}
//             />

//             <div className="card-footer bg-light d-flex justify-content-between align-items-center w-100 p-2">
//               {/* Last updated and Icons */}
//               <div className="d-flex justify-content-between w-100">
//                 <div className="text-muted">Last updated 3 mins ago</div>

//                 <div className="d-flex gap-2">
//                   {/* Like Button */}
//                   <FaHeart
//                     className={`cursor-pointer ${
//                       liked ? "text-danger" : "text-secondary"
//                     }`}
//                     onClick={() => setLiked(!liked)}
//                     size={20}
//                   />

//                   {/* View Icon */}
//                   <FaEye className="text-primary" size={20} />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Card;

// // import React from 'react'

import { useState } from "react";
import { FaHeart, FaEye } from "react-icons/fa";

const cardsData = [
  { id: 1, type: "image", src: "img1.webp", text: "Ramotion", views: "10.7k", likes: 127 },
  { id: 2, type: "image", src: "img2.webp", text: "Emote", views: "5.4k", likes: 89 },
  { id: 3, type: "image", src: "img3.webp", text: "Muti", views: "7.2k", likes: 112 },
  { id: 4, type: "image", src: "img4.webp", text: "Recently updated", views: "8.3k", likes: 98 },
  { id: 5, type: "image", src: "img5.webp", text: "Trending now", views: "12.1k", likes: 145 },
  { id: 6, type: "image", src: "img6.webp", text: "Creative Design", views: "15.2k", likes: 210 },
  { id: 7, type: "image", src: "img7.webp", text: "Just added", views: "6.8k", likes: 76 },
  { id: 8, type: "image", src: "img8.webp", text: "New Release", views: "9.4k", likes: 134 },
  { id: 9, type: "image", src: "img9.webp", text: "Wix Studio", views: "11.6k", likes: 198 },
  { id: 10, type: "image", src: "img10.webp", text: "Top Rated", views: "14.5k", likes: 256 },
  { id: 11, type: "image", src: "img11.webp", text: "Editor's Pick", views: "13.7k", likes: 178 },
  { id: 12, type: "image", src: "img12.webp", text: "User Favorite", views: "16.2k", likes: 312 },
  { id: 12, type: "image", src: "img13.webp", text: "User Favorite", views: "16.2k", likes: 312 },
  { id: 12, type: "image", src: "img14.webp", text: "User Favorite", views: "16.2k", likes: 312 },
  { id: 12, type: "image", src: "img15.webp", text: "User Favorite", views: "16.2k", likes: 312 },
  { id: 12, type: "image", src: "img16.webp", text: "User Favorite", views: "16.2k", likes: 312 }




];

const Card = () => {
  const [likedItems, setLikedItems] = useState({});

  const toggleLike = (id) => {
    setLikedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {cardsData.map(({ id, type, src, text, views, likes }) => (
          <div key={id} className="col">
            <div className="card w-20 h-20 shadow-lg border-0 rounded flex flex-col items-center justify-center">
              {type === "video" ? (
                <video src={src} className="w-16 h-16 object-cover rounded" controls />
              ) : (
                <img src={src} className="w-16 h-16 object-contain" alt={`Card ${id}`} />
              )}

              <div className="card-footer bg-light w-100 d-flex justify-content-between align-items-center p-2">
                <div className="text-muted">{text}</div>

                <div className="d-flex gap-2">
                  <FaHeart
                    className={`cursor-pointer ${likedItems[id] ? "text-danger" : "text-secondary"}`}
                    onClick={() => toggleLike(id)}
                    size={20}
                  />
                  {likes}
                  <FaEye className="text-primary" size={20} />
                  {views}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
