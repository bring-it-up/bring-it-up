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

/*
export default function FirstDropdown({ str }, {strs} ) {

    return (
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                {str}
            </Dropdown.Toggle>

            <Dropdown.Menu> 
  
                <Dropdown.Item href="#/action-1">
                <Form.Check
                    inline
                    label="1"
                    name="group1"
                    type="checkbox"
                    id={`inline-checkbox-1`}
                /> 
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">Option 2</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Option 3</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Option 4</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

*/

