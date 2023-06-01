import { ReactElement } from 'react';
import StarOutlineRoundedIcon from '@mui/icons-material/StarOutlineRounded';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import { useHistory } from 'react-router-dom';
import { CounsellingService } from '../types/counselling-service.types';

// TODO: disabled hardcoded ratings and extra info (location, likes, etc.) for phase 1
const disableRatings = true;
const disableExtraInfo = true;

type Props = {
	service: CounsellingService;
};

const ServiceCard = ({ service }: Props): ReactElement => {
  let tags: string[] = [];
  const specialties: string[] = service.specialty.map(specialty => specialty.label);
  tags = tags.concat(service.delivery, service.targetClients, service.serviceType, specialties);

	const history = useHistory();

	const handleClick = () => {
		history.push(`services/${service.secondaryID}`);
	};

	return (
		<div className="serviceCard" onClick={handleClick}>
			<div className="cardContent">
				<div className="title">
					<div className="name">{service.serviceName}</div>

					{!disableRatings && <div className="ratingItem">
						<StarOutlineRoundedIcon className="favourite" onClick={() => { }} />
						<h6 className="rating">{'5.0'}</h6>
						<h6 className="maxRating">/ 5.0</h6>
						<ShareOutlinedIcon className="shareIcon"></ShareOutlinedIcon>
					</div>}
				</div>
				{!disableExtraInfo && <div className="information">
					<ul className="informationList">
						<li>{service.location}</li>
						<li>|</li>
						<li className="reviews">
							<a href="https://www.w3schools.com/">{'5'} reviews</a>
						</li>
						<li>|</li>
						<li>{'245'} likes</li>
					</ul>
				</div>}

				<div className="tags">
					{tags.map((tag, index) => (
						<div className="tag" key={index}>
							{tag}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default ServiceCard;
