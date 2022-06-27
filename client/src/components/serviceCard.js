import { AiOutlineShareAlt } from 'react-icons/ai'
import { AiFillStar } from 'react-icons/ai'

function doSomething() {

    console.log("something");

}

export default function ServiceCard(props) {
    return (
        // constants: 
        // - props.name
        // - props.rating
        // - props.location
        // - props.reviews
        // - props.keywords (array)
        // - props.description
        // - props.likes
        <div>
        {/* <head>
            <link rel="stylesheet" href="index.css">
                </link>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
                </link>
        </head> */}
            <div className="card">
                <div className="title"> 
                    <div className="name">
                        <h6><b>{props.name}</b></h6>
                        <AiFillStar className="favourite" onClick={doSomething}></AiFillStar>        
                    </div>
                    <div className="ratingItem">
                        <h6><b>{props.rating} / 5</b></h6>
                        <AiOutlineShareAlt className="share" onClick={doSomething}></AiOutlineShareAlt>
                    </div>
                </div>


                <div className="information">
                    <p>{props.location}</p>
                    <p>|</p>
                    <p><a href="https://www.w3schools.com/">{props.reviews} reviews</a></p>
                    <p>|</p>
                    <p>{props.likes} likes</p>
                </div>

                <div className="tags">
                        {props.options.map((option, index) => (
                            <div className="tag" key={index}>
                                {option}
                            </div>
             ),
             )}
                </div>

                <div className="description">
                    <p>
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." 
                    </p>
                </div>
            </div>
        </div>
    );
}