import React from 'react';
import './SendMail.css';
import CloseIcon from "@material-ui/icons/Close";
import { Button } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "../features/mailSlice";
import { db } from "../firebase";


function SendMail() {
    const { register, handleSubmit} = useForm();
    const dispatch = useDispatch();
    
    const onSubmit = (formData) => {
        console.log(formData);
        db.collection('emails').add({
            to:formData.to,
            subject: formData.subject,
            message: formData.message,
        })

        dispatch(closeSendMessage())
    };

    return (
        <div className="sendMail">
            <div className="sendMail-header">
                <h3>New Message</h3>
                <CloseIcon onClick={() => dispatch(closeSendMessage())}
                className="sendMail-close" />
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input 
                    name="to" 
                    placeholder="To" 
                    type="text" 
                    {...register('to', { required: true})}
                />
                

                <input 
                    name="subject" 
                    placeholder="Subject" 
                    type="text" 
                    {...register('subject', { required: true})}
                />
                

                <input 
                    name="message" 
                    placeholder="Message..." 
                    type="text" 
                    {...register('message ', { required: true})}
                />
                
            
            <div className="sendMail-options">
                <Button className="sendMail-send">Send</Button>
            </div>

            </form>
        </div>
    )
}

export default SendMail
