import { ReactElement } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";

type Props = {
	str: string;
	options: string[];
};

const FirstDropdown = ({ str, options }: Props): ReactElement => {
	return (
		<Dropdown className="d-inline mx-2" autoClose="outside">
			<Dropdown.Toggle variant="success" id="dropdown-autoclose-outside">
				{str}
			</Dropdown.Toggle>
			<Dropdown.Menu>
				{options.map((option, index) => (
					<Dropdown.Item href="#/{option}" key={index}>
						<Form.Check
							inline
							label={option}
							name={option}
							type="checkbox"
							id={`inline-checkbox-1`}
						/>
					</Dropdown.Item>
				))}
			</Dropdown.Menu>
		</Dropdown>
	);
};

export default FirstDropdown;
