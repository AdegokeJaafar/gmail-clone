import React from 'react'
import './SendMail.css'
import CloseIcon from "@material-ui/icons/Close"
import { Button } from '@material-ui/core'


function SendMail() {
    return (
        <div className="sendMail">
            <div className="sendMail-header">
                <h3>New Message</h3>
                <CloseIcon className="sendMail-close" />
            </div>

            <form action="">
                <input type="text" />
                <input type="text" />
                <input type="text" />
            
            <div className="sendMail-options">
                <Button className="sendMail-send">Send</Button>
            </div>

            </form>
        </div>
    )
}

export default SendMail
