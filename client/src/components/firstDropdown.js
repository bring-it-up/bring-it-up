import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';


export default function FirstDropdown(props) {

    return (
        <Dropdown className="d-inline mx-2" autoClose = "outside">
            <Dropdown.Toggle variant="success" id="dropdown-autoclose-outside">
                {props.str}
            </Dropdown.Toggle>
            <Dropdown.Menu> 
            {props.options.map((option) => (
                 
                    <Dropdown.Item href="#/{option}">
                        <Form.Check
                            inline
                            label={option}
                            name={option}
                            type="checkbox"
                            id={`inline-checkbox-1`}
                        
                    
                        />
                    </Dropdown.Item>
                
                ),
                )}
                </Dropdown.Menu>
        </Dropdown>
    );
}
