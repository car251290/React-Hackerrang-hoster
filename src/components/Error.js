import React,{useState} from 'react';


const Error = () => {
    const [invalidHackers,setInvalidHackers] = useState([])

        return invalidHackers.map(invalidHacker => {
            return (<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 error">
                <div id="list">
                    <div className="error-msg">
                        <i className="fa fa-times-circle"></i>
                        <p>Error! No menu generated for {setInvalidHackers(invalidHackers)}</p>
                    </div>
                </div>
            </div>)
        });
    }
    
export default Error;