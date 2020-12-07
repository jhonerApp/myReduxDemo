import React, { useEffect } from 'react'
import { connect } from "react-redux";
import { fetchUsers } from '../redux';

function UserContainer({ userDatas, fetchUsers }) {
    useEffect(() => {
        fetchUsers();
    }, [])
    return (

        userDatas.loading ? (<h2>Loading</h2>) : userDatas.error ? (<h2>userDatas.error</h2>) : (
            <div>
                <h2>User List</h2>
                <div >
                    {
                        userDatas && userDatas.users && userDatas.users.map(user =>
                            <p key={userDatas.id}>
                                {user.name}
                            </p>)
                    }
                </div>
            </div>
        )


    )

}

const mapStateToProps = (state) => {
    return {
        //PROP numOfCakes:
        userDatas: state.user,
    };
};

const mapDispatchtoProps = (dispatch) => {
    return {
        //PROP buyCake:
        fetchUsers: () => dispatch(fetchUsers()),
    };
};
export default connect(mapStateToProps, mapDispatchtoProps)(UserContainer)