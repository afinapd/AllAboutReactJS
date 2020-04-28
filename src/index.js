import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import UserDetail from './userDetail';
import UserCard from './userCard';

const App = () => {
  return (
    <div className="container">
      <UserDetail
        nama="Roy"
        tanggalGabung="7 Apr 2010"
        alamat="Jl. Abc"
        avatar={faker.image.avatar()} />
      <UserDetail
        nama="Aron"
        tanggalGabung="17 jan 2009"
        alamat="Jl. Kucing"
        avatar={faker.image.avatar()} />


      <UserCard>
        <UserDetail
          nama="Roy"
          tanggalGabung="7 Apr 2010"
          alamat="Jl. Abc"
          avatar={faker.image.avatar()} />
      </UserCard>
      <UserCard>
        <UserDetail
          nama="Aron"
          tanggalGabung="17 jan 2009"
          alamat="Jl. Kucing"
          avatar={faker.image.avatar()} />
      </UserCard>
    </div>


    // <div className="container">
    //   <UserDetail/>
    // </div>

    // <div className="container">
    //   <div className="card border-dark mb-3" style={{ maxWidth: '25rem' }}>
    //     <div className="card-body text-dark">
    //       <img src={faker.image.avatar()} alt="avatar" className="rounded ﬂoat-left mr-2" />
    //       <h5 className="card-title">Roy</h5>
    //       <p className="card-text">Jl. Merbabu 10</p>
    //       <p className="card-text">
    //         <small className="text-muted">Bergabung : 7 Apr 2010</small>
    //       </p>
    //     </div>
    //   </div>
    // </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
