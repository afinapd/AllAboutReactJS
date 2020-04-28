import React from 'react';
// import faker from 'faker';

const UserDetail = (props) => {
    console.log(props);
    return (
        <div className="card border-dark mb-3" style={{maxWidth: '25rem'}}>
             <div className="card-body text-dark">
                <img src={props.avatar} alt="avatar" class="rounded float-left mr-2"/>
                <h5 className="card-title">{props.nama}</h5>
                <p className="card-text">{props.alamat}</p>
                <p class="card-text">
                   <small class="text-muted">Bergabung : {props.tanggalGabung}</small>
                </p>
             </div>
         </div>
    );
};

// const UserDetail = () => {
//     return (
//         <div className="card border-dark mb-3" style={{maxWidth: '25rem'}}>
//             <div className="card-body text-dark">
//                 <img src={faker.image.avatar()} alt="avatar" class="rounded float-left mr-2"/>
//                 <h5 className="card-title">Roy</h5>
//                 <p className="card-text">Jl. Merbabu 10</p>
//                 <p class="card-text">
//                     <small class="text-muted">Bergabung : 7 Apr 2010</small>
//                 </p>
//             </div>
//         </div>
//     );
// };
export default UserDetail;