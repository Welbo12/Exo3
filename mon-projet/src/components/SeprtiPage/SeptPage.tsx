// import React from 'react'
// import But from '../Petitcomposant/But'
// import { FaStar } from 'react-icons/fa'
// import amirImg from '../assets/images/amir.png'
// import salimImg from '../assets/images/salim.png'
 import './../../style/index.css'

// interface ReviewCardProps {
//   name: string
//   role: string
//   text: string
//   image: string
// }

// const ReviewCard: React.FC<ReviewCardProps> = ({ name, role, text, image }) => {
//   return (
//     <div className="review-card">
//       <div className="stars">
//         {[...Array(5)].map((_, i) => (
//           <FaStar key={i} className="star-icon" />
//         ))}
//       </div>
//       <p className="review-text">{text}</p>
//       <div className="reviewer">
//         <img src={image} alt={name} className="review-img" />
//         <div>
//           <div className="review-name">{name}</div>
//           <div className="review-role">{role}</div>
//         </div>
//       </div>
//     </div>
//   )
// }

// const Reviews: React.FC = () => {
//   const reviewText =
//     'We will also facilitate the business marketing of these products with our SEO experts so that they become a ready to use website & help sell product from company'

//   return (
//     <div className="reviews-container">
//       <But label="Reviews" />
//       <h1 className="reviews-title">
//         Our Customer Say Something <span className="highlight-green">About Us</span>
//       </h1>
//       <div className="reviews-grid">
//         <ReviewCard
//           name="Amir Uddin"
//           role="UX Designer"
//           text={reviewText}
//           image={amirImg}
//         />
//         <ReviewCard
//           name="Salim Ahmed"
//           role="UI Designer"
//           text={reviewText}
//           image={salimImg}
//         />
//       </div>
//     </div>
//   )
// }

// export default Reviews

import React from 'react'
import But from '../Petitcomposant/But'
import { FaStar } from 'react-icons/fa'
import { IconContext } from 'react-icons'
import amirImg from '../../assets/images/amir.png'
import salimImg from '../../assets/images/salim.png'


interface ReviewCardProps {
  name: string
  role: string
  text: string
  image: string
}

const ReviewCard: React.FC<ReviewCardProps> = ({ name, role, text, image }) => {
  return (
    <div className="review-card">
      <div className="stars">
        <IconContext.Provider value={{ className: 'star-icon' }}>
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} />
          ))}
        </IconContext.Provider>
      </div>
      <p className="review-text">{text}</p>
      <div className="reviewer">
        <img src={image} alt={name} className="review-img" />
        <div>
          <div className="review-name">{name}</div>
          <div className="review-role">{role}</div>
        </div>
      </div>
    </div>
  )
}

const Reviews: React.FC = () => {
  const reviewText =
    'We will also facilitate the business marketing of these products with our SEO experts so that they become a ready to use website & help sell product from company'

  return (
    <div className="reviews-container">
      <But label="Reviews" />
      <h1 className="reviews-title">
        Our Customer Say Something <span className="highlight-green">About Us</span>
      </h1>
      <div className="reviews-grid">
        <ReviewCard
          name="Amir Uddin"
          role="UX Designer"
          text={reviewText}
          image={amirImg}
        />
        <ReviewCard
          name="Salim Ahmed"
          role="UI Designer"
          text={reviewText}
          image={salimImg}
        />
      </div>
    </div>
  )
}

export default Reviews
