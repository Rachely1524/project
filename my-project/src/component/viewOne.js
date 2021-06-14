import React, { useEffect } from 'react'
import { connect } from 'react-redux'

// useEffect(() => {
//     alert("לא הכנסת פרטי עובד");
// }, []);

function mapStateToProps(state) {
    debugger

    return { Users: state.UserReducer.users }

}

export default connect(mapStateToProps)(function ViewOne(props) {
    const { Users } = props
    const user = Users[Users.length - 1];
    const v = Users.length;
    return (
        <>

            {v > 0 ? <label>שמי {user.name} ואני בן {user.age} מ{user.city}</label> : 'שמי שם מלא ואני בן גיל מעיר מגורים...'}

        </>

    )

})




