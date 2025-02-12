// import React from "react";
import { useState } from "react";
import { FaHeart, FaEye } from "react-icons/fa";
const Card = () => {
  const [liked, setLiked] = useState(false);

  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-4 g-4">
        <div className="col">
          <div
            className="card shadow-lg border-0 rounded"
            style={{ width: "100%" }}
          >
            <img
              src="/img1.webp"
              className="card-img-top mx-auto d-block"
              alt="Card 1"
              style={{ width: "100%", height: "" }}
            />

            <div className="card-footer bg-light d-flex justify-content-between align-items-center w-100 p-2">
              {/* Last updated and Icons */}
              <div className="d-flex justify-content-between w-100">
                <div className="text-muted">Ramotion</div>

                <div className="d-flex gap-2">
                  {/* Like Button */}
                  <FaHeart
                    className={`cursor-pointer ${
                      liked ? "text-danger" : "text-secondary"
                    }`}
                    onClick={() => setLiked(!liked)}
                    size={20}
                  />

                  {/* View Icon */}
                  <FaEye className="text-primary" size={20} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col">
          <div
            className="card shadow-lg border-0 rounded"
            style={{ width: "100%" }}
          >
            <img
              src="/img3.webp"
              className="card-img-top mx-auto d-block"
              alt="Card 2"
              style={{ width: "100%", height: "" }}
            />

            <div className="card-footer bg-light d-flex justify-content-between align-items-center w-100 p-2">
              {/* Last updated and Icons */}
              <div className="d-flex justify-content-between w-100">
                <div className="text-muted">Emote</div>

                <div className="d-flex gap-2">
                  {/* Like Button */}
                  <FaHeart
                    className={`cursor-pointer ${
                      liked ? "text-danger" : "text-secondary"
                    }`}
                    onClick={() => setLiked(!liked)}
                    size={20}
                  />

                  {/* View Icon */}
                  <FaEye className="text-primary" size={20} />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Card 3 */}

        <div className="col">
          <div
            className="card shadow-lg border-0 rounded"
            style={{ width: "100%" }}
          >
            <img
              src="/img2.webp"
              className="card-img-top mx-auto d-block"
              alt="Card 3"
              style={{ width: "100%", height: "" }}
            />

            <div className="card-footer bg-light d-flex justify-content-between align-items-center w-100 p-2">
              {/* Last updated and Icons */}
              <div className="d-flex justify-content-between w-100">
                <div className="text-muted">One Week Work</div>

                <div className="d-flex gap-2">
                  {/* Like Button */}
                  <FaHeart
                    className={`cursor-pointer ${
                      liked ? "text-danger" : "text-secondary"
                    }`}
                    onClick={() => setLiked(!liked)}
                    size={20}
                  />

                  {/* View Icon */}
                  <FaEye className="text-primary" size={20} />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Card 4 */}
        <div className="col">
          <div
            className="card shadow-lg border-0 rounded"
            style={{ width: "100%" }}
          >
            <img
              src="/img4.webp"
              className="card-img-top mx-auto d-block"
              alt="Card 4"
              style={{ width: "100%", height: "" }}
            />

            <div className="card-footer bg-light d-flex justify-content-between align-items-center w-100 p-2">
              {/* Last updated and Icons */}
              <div className="d-flex justify-content-between w-100">
                <div className="text-muted">Last updated 3 mins ago</div>

                <div className="d-flex gap-2">
                  {/* Like Button */}
                  <FaHeart
                    className={`cursor-pointer ${
                      liked ? "text-danger" : "text-secondary"
                    }`}
                    onClick={() => setLiked(!liked)}
                    size={20}
                  />

                  {/* View Icon */}
                  <FaEye className="text-primary" size={20} />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Card 5 */}
        <div className="col">
          <div
            className="card shadow-lg border-0 rounded"
            style={{ width: "100%" }}
          >
            <img
              src="/img5.webp"
              className="card-img-top mx-auto d-block"
              alt="Card 5"
              style={{ width: "100%", height: "" }}
            />

            <div className="card-footer bg-light d-flex justify-content-between align-items-center w-100 p-2">
              {/* Last updated and Icons */}
              <div className="d-flex justify-content-between w-100">
                <div className="text-muted">Last updated 3 mins ago</div>

                <div className="d-flex gap-2">
                  {/* Like Button */}
                  <FaHeart
                    className={`cursor-pointer ${
                      liked ? "text-danger" : "text-secondary"
                    }`}
                    onClick={() => setLiked(!liked)}
                    size={20}
                  />

                  {/* View Icon */}
                  <FaEye className="text-primary" size={20} />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Card 6 */}
        <div className="col">
          <div
            className="card shadow-lg border-0 rounded"
            style={{ width: "100%" }}
          >
            <img
              src="/img6.webp"
              className="card-img-top mx-auto d-block"
              alt="Card 6"
              style={{ width: "100%", height: "" }}
            />

            <div className="card-footer bg-light d-flex justify-content-between align-items-center w-100 p-2">
              {/* Last updated and Icons */}
              <div className="d-flex justify-content-between w-100">
                <div className="text-muted">Last updated 3 mins ago</div>

                <div className="d-flex gap-2">
                  {/* Like Button */}
                  <FaHeart
                    className={`cursor-pointer ${
                      liked ? "text-danger" : "text-secondary"
                    }`}
                    onClick={() => setLiked(!liked)}
                    size={20}
                  />

                  {/* View Icon */}
                  <FaEye className="text-primary" size={20} />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Card 7 */}
        <div className="col">
          <div
            className="card shadow-lg border-0 rounded"
            style={{ width: "100%" }}
          >
            <img
              src="/img7.webp"
              className="card-img-top mx-auto d-block"
              alt="Card 7"
              style={{ width: "100%", height: "" }}
            />

            <div className="card-footer bg-light d-flex justify-content-between align-items-center w-100 p-2">
              {/* Last updated and Icons */}
              <div className="d-flex justify-content-between w-100">
                <div className="text-muted">Last updated 3 mins ago</div>

                <div className="d-flex gap-2">
                  {/* Like Button */}
                  <FaHeart
                    className={`cursor-pointer ${
                      liked ? "text-danger" : "text-secondary"
                    }`}
                    onClick={() => setLiked(!liked)}
                    size={20}
                  />

                  {/* View Icon */}
                  <FaEye className="text-primary" size={20} />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Card 8 */}
        <div className="col">
          <div
            className="card shadow-lg border-0 rounded"
            style={{ width: "100%" }}
          >
            <img
              src="/img8.webp"
              className="card-img-top mx-auto d-block"
              alt="Card 8"
              style={{ width: "100%", height: "" }}
            />

            <div className="card-footer bg-light d-flex justify-content-between align-items-center w-100 p-2">
              {/* Last updated and Icons */}
              <div className="d-flex justify-content-between w-100">
                <div className="text-muted">Last updated 3 mins ago</div>

                <div className="d-flex gap-2">
                  {/* Like Button */}
                  <FaHeart
                    className={`cursor-pointer ${
                      liked ? "text-danger" : "text-secondary"
                    }`}
                    onClick={() => setLiked(!liked)}
                    size={20}
                  />

                  {/* View Icon */}
                  <FaEye className="text-primary" size={20} />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Card 9 */}
        <div className="col">
          <div
            className="card shadow-lg border-0 rounded"
            style={{ width: "100%" }}
          >
            <img
              src="/img9.webp"
              className="card-img-top mx-auto d-block"
              alt="Card 9"
              style={{ width: "100%", height: "" }}
            />

            <div className="card-footer bg-light d-flex justify-content-between align-items-center w-100 p-2">
              {/* Last updated and Icons */}
              <div className="d-flex justify-content-between w-100">
                <div className="text-muted">Last updated 3 mins ago</div>

                <div className="d-flex gap-2">
                  {/* Like Button */}
                  <FaHeart
                    className={`cursor-pointer ${
                      liked ? "text-danger" : "text-secondary"
                    }`}
                    onClick={() => setLiked(!liked)}
                    size={20}
                  />

                  {/* View Icon */}
                  <FaEye className="text-primary" size={20} />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Card 10 */}
        <div className="col">
          <div
            className="card shadow-lg border-0 rounded"
            style={{ width: "100%" }}
          >
            <img
              src="/img10.webp"
              className="card-img-top mx-auto d-block"
              alt="Card 10"
              style={{ width: "100%", height: "" }}
            />

            <div className="card-footer bg-light d-flex justify-content-between align-items-center w-100 p-2">
              {/* Last updated and Icons */}
              <div className="d-flex justify-content-between w-100">
                <div className="text-muted">Plainthing Studio
                </div>

                <div className="d-flex gap-2">
                  {/* Like Button */}
                  <FaHeart
                    className={`cursor-pointer ${
                      liked ? "text-danger" : "text-secondary"
                    }`}
                    onClick={() => setLiked(!liked)}
                    size={20}
                  />

                  {/* View Icon */}
                  <FaEye className="text-primary" size={20} />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Card 11 */}
        <div className="col">
          <div
            className="card shadow-lg border-0 rounded"
            style={{ width: "100%" }}
          >
            <img
              src="/img11.webp"
              className="card-img-top mx-auto d-block"
              alt="Card 11"
              style={{ width: "100%", height: "" }}
            />

            <div className="card-footer bg-light">
              <div className="text-muted">Last updated 3 mins ago</div>
            </div>
          </div>
        </div>
        {/* Card 12*/}
        <div className="col">
          <div
            className="card shadow-lg border-0 rounded"
            style={{ width: "100%" }}
          >
            <img
              src="/img12.webp"
              className="card-img-top mx-auto d-block"
              alt="Card 12"
              style={{ width: "100%", height: "" }}
            />

            <div className="card-footer bg-light d-flex justify-content-between align-items-center w-100 p-2">
              {/* Last updated and Icons */}
              <div className="d-flex justify-content-between w-100">
                <div className="text-muted">Last updated 3 mins ago</div>

                <div className="d-flex gap-2">
                  {/* Like Button */}
                  <FaHeart
                    className={`cursor-pointer ${
                      liked ? "text-danger" : "text-secondary"
                    }`}
                    onClick={() => setLiked(!liked)}
                    size={20}
                  />

                  {/* View Icon */}
                  <FaEye className="text-primary" size={20} />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Card 13 */}
        <div className="col">
          <div
            className="card shadow-lg border-0 rounded"
            style={{ width: "100%" }}
          >
            <img
              src="/img13.webp"
              className="card-img-top mx-auto d-block"
              alt="Card 13"
              style={{ width: "100%", height: "" }}
            />

            <div className="card-footer bg-light d-flex justify-content-between align-items-center w-100 p-2">
              {/* Last updated and Icons */}
              <div className="d-flex justify-content-between w-100">
                <div className="text-muted">Last updated 3 mins ago</div>

                <div className="d-flex gap-2">
                  {/* Like Button */}
                  <FaHeart
                    className={`cursor-pointer ${
                      liked ? "text-danger" : "text-secondary"
                    }`}
                    onClick={() => setLiked(!liked)}
                    size={20}
                  />

                  {/* View Icon */}
                  <FaEye className="text-primary" size={20} />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Card 14*/}
        <div className="col">
          <div
            className="card shadow-lg border-0 rounded"
            style={{ width: "100%" }}
          >
            <img
              src="/img14.webp"
              className="card-img-top mx-auto d-block"
              alt="Card 14"
              style={{ width: "100%", height: "" }}
            />

            <div className="card-footer bg-light d-flex justify-content-between align-items-center w-100 p-2">
              {/* Last updated and Icons */}
              <div className="d-flex justify-content-between w-100">
                <div className="text-muted">Last updated 3 mins ago</div>

                <div className="d-flex gap-2">
                  {/* Like Button */}
                  <FaHeart
                    className={`cursor-pointer ${
                      liked ? "text-danger" : "text-secondary"
                    }`}
                    onClick={() => setLiked(!liked)}
                    size={20}
                  />

                  {/* View Icon */}
                  <FaEye className="text-primary" size={20} />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Card 15 */}
        <div className="col">
          <div
            className="card shadow-lg border-0 rounded"
            style={{ width: "100%" }}
          >
            <img
              src="/img15.webp"
              className="card-img-top mx-auto d-block"
              alt="Card 15"
              style={{ width: "100%", height: "" }}
            />

            <div className="card-footer bg-light d-flex justify-content-between align-items-center w-100 p-2">
              {/* Last updated and Icons */}
              <div className="d-flex justify-content-between w-100">
                <div className="text-muted">Lucian Radu
                </div>

                <div className="d-flex gap-2">
                  {/* Like Button */}
                  <FaHeart
                    className={`cursor-pointer ${
                      liked ? "text-danger" : "text-secondary"
                    }`}
                    onClick={() => setLiked(!liked)}
                    size={20}
                  />

                  {/* View Icon */}
                  <FaEye className="text-primary" size={20} />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Card 16 */}
        <div className="col">
          <div
            className="card shadow-lg border-0 rounded"
            style={{ width: "100%" }}
          >
            <img
              src="/img16.webp"
              className="card-img-top mx-auto d-block"
              alt="Card 16"
              style={{ width: "100%", height: "" }}
            />

            <div className="card-footer bg-light d-flex justify-content-between align-items-center w-100 p-2">
              {/* Last updated and Icons */}
              <div className="d-flex justify-content-between w-100">
                <div className="text-muted">Last updated 3 mins ago</div>

                <div className="d-flex gap-2">
                  {/* Like Button */}
                  <FaHeart
                    className={`cursor-pointer ${
                      liked ? "text-danger" : "text-secondary"
                    }`}
                    onClick={() => setLiked(!liked)}
                    size={20}
                  />

                  {/* View Icon */}
                  <FaEye className="text-primary" size={20} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

// <div className="col">
//           <div className="card w-20 h-20 shadow-lg border-0 rounded flex items-center justify-center">
//             <img
//               src="11th.webp"
//               className="card-img-top w-16 h-16 object-contain"
//               alt="Card 11"
//             />

//             <div className="card-footer bg-light d-flex justify-content-between align-items-center w-100 p-2">
//               <div className="text-muted">Last updated 30 mins ago</div>

//               <div className="d-flex gap-2">
//                 {/ Like Button /}
//                 <FaHeart
//                   className={`cursor-pointer ${
//                     liked ? "text-danger" : "text-secondary"
//                   }`}
//                   onClick={() => setLiked(!liked)}
//                   size={20}
//                 />

//                 {/ View Icon /}
//                 <FaEye className="text-primary" size={20} />
//               </div>
//             </div>
//           </div>
//         </div>
