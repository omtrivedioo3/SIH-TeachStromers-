import React from 'react'
import { useNavigate, Navigate } from 'react-router-dom'

function UserDashboard() {
    const Navigate = useNavigate();
    const showhistory = () => {
        Navigate("/ShowHistory");
    }
    const showdesign = () => {
        Navigate("/ShowDesign");
    }
    const showreview = () => {
        Navigate("/ShowReview");
    }
    const showresource = () => {
        Navigate("/ShowResource");
    }



    return (
        <div>
            Hello User!
            <button className='btn btn-primary' onClick={showhistory} >History</button>
            <button className='btn btn-primary' onClick={showdesign} >Curriculum Design</button>
            <button className='btn btn-primary' onClick={showreview} >Curriculum Review</button>
            <button className='btn btn-primary' onClick={showresource} >Resource Repository</button>
            {/* <button className='btn btn-primary'></button> */}



        </div>
    )
}

export default UserDashboard
