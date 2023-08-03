import './Review.css'


const Review = ({ review, id }) => {
    return (
        <div>
            <figure className="snip1533">
                <figcaption>
                    <blockquote>
                        <p>{review.review}</p>
                    </blockquote>
                    <h3>{review.name}</h3>
                    {/* <h4>Google Inc.</h4> */}
                </figcaption>
            </figure>
        </div>
    );
};

export default Review;