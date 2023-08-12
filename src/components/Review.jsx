import { AiFillStar } from 'react-icons/ai';
import './Review.css'


// eslint-disable-next-line react/prop-types, no-unused-vars
const Review = ({ review, id, currentUser }) => {
    console.log(currentUser);
    const ratingArray = Array.from({ length: 5 }, (_, index) => index + 1);
    return (
        <div>
            <figure className="snip1533">
                <div className="flex justify-center gap-0.5 text-yellow-500 mt-10">
                    {ratingArray.map((value) => (
                        <span
                            key={value}
                            className={value <= review.rating ? "text-yellow-500" : "text-gray-500"}
                        >
                            <AiFillStar />
                        </span>
                    ))}
                </div>
                <figcaption>
                    <blockquote>
                        <p>{review?.reviewText}</p>
                    </blockquote>
                    <h3>{currentUser?.displayName || currentUser?.email || 'Julkarnain'}
                    </h3>
                    {/* <h4>Google Inc.</h4> */}
                </figcaption>
            </figure>
        </div>
    );
};

export default Review;