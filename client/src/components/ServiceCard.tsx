import { ReactElement } from 'react';
// import { AiOutlineShareAlt, AiFillStar } from 'react-icons/ai'
import StarOutlineRoundedIcon from '@mui/icons-material/StarOutlineRounded';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import Service from '../Service';

type Props = {
    service: Service;
}

// logic for defining tags is not determined yet
var tags: string[] = ["Peer", "24/7", "Professional"];
var arr: string[];
arr = ["a", "b", "c"];

const ServiceCard = ({ service }: Props): ReactElement => {
    return (
            <div className="card">
                <div className="title"> 
                    <div className="name">
                        <h6>{service.serviceName}</h6>      
                    </div>
                    <div className="ratingItem">
                        <StarOutlineRoundedIcon className="favourite" onClick={() => { }} />
                        <h6 className="rating1">{'5.0'}</h6>
                        <h6 className="rating2">/5.0</h6>
                    <ShareOutlinedIcon className="share" onClick={()=>{}}/>
                    </div>
                </div>


                <div className="information">
                    <p className="info">{service.location}</p>
                    <p className="info">|</p>
                    <p className="info"><a href="https://www.w3schools.com/">{'5'} reviews</a></p>
                    <p className="info">|</p>
                    <p className="info">{'5'} likes</p>
                </div>

                <div className="tags">
                        {tags.map((tag, index) => (
                            <div className="tag" key={index}>
                                {tag}
                            </div>
                        ),
                    )}
                </div>
            </div>
    );
}

export default ServiceCard;