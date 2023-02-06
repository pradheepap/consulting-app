import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import { Button, Overlay } from 'react-bootstrap';
import Popover from 'react-bootstrap/Popover'
import './PopOver.css';
import toast from 'react-hot-toast';
// import { handleSignOut } from '../../Login/LoginManager';
// import { SET_USER, useAppContext } from '../../context';

const PopOver = () => {
    // const { state: { user: { name, email, img } }, dispatch } = useAppContext()
    const [ state, setState ] = useState({user: 
                                            { 
                                                name : 'John Doe',
                                                email: 'john@doe.com',
                                                img: 'defaultavatar.jpg' } 
                                         });
    const [show, setShow] = useState(false);
    const [target, setTarget] = useState(null);
    const ref = useRef(null);
    const handleClick = (event) => {
        setShow(!show);
        setTarget(event.target);
    };
    const signOut = () => {
        const loading = toast.loading('Please wait...');
        // handleSignOut()
        //     .then(res => {
        //         toast.dismiss(loading);
        //         console.log(res);
        //        // dispatch({ type: SET_USER, payload: res })
        //         toast.error('Logged Out!');
        //     })
    }
    return (
        <div >
            <img src='{state.user.img}' alt=""  className="popImg" />
            <Overlay
                show={show}
                target={target}
                placement="bottom"
                container={ref.current}
                containerPadding={50}
            >
                <Popover id="popover-contained">
                    <div className="text-center">
                        <img src={state.user.img} alt="" className="popUserImg" />
                        <p className="userName">Name</p>
                        <p className="userEmail">Email address</p>
                        <Button variant="outline-danger" size="sm">Log out</Button>
                    </div>
                </Popover>
            </Overlay>
        </div>
    );
};

export default PopOver;