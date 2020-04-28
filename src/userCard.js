import React from 'react';

const UserCard = (props) => {
    return (
         <div className="card" style={{width : '30rem'}}>
            <div className="card-body">
                <h5 className="card-title">User Card</h5>
                {props.children}
                <a href="#" className="card-link">Lihat lebih...</a>
            </div>
        </div>
    )
};
export default UserCard ;