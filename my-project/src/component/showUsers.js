import React from 'react'
import { connect } from 'react-redux'

function mapStateToProps(state) {
    debugger

    return { Users: state.UserReducer.users }

}
// const mapDispatcToProps = (dispatch) => ({
//     LessProduct: (product) => dispatch(LessProduct (product)),


// })
export default connect(mapStateToProps,null)(function ShowUsers(props) {

    const { Users } = props
    return (
        <>
        תצוגה
            <div>
                {Users.map((item) =>
                    <div key={item.id}>
                      
                        <div>{item.name}</div>שם מלא:
                        <div>{item.email}</div>מייל:
                 
                       
                    </div>)}
            </div>
        </>
    )
})


