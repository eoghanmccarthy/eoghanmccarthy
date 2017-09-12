import React from 'react';

// Import components
import Button from '../components/Button';
import List from '../components/List';

// Import data
import listdata from 'json-loader!../data/listdata.json';

const Modal = ({ globalNavActive, toggleGlobalNavigation }) => {

    return (
        <div className="nav nav-global">
            <Button
                buttonClass="open"
                onClick={ toggleGlobalNavigation }
            />

            { globalNavActive === true &&

                <div className="nav-global__modal">
                    <List list={ listdata.data } />
                    <Button
                        buttonClass="close"
                        onClick={ toggleGlobalNavigation }
                    />
                </div>
                
            }

        </div>
    )
}

export default Modal
