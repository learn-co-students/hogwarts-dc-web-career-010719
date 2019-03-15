import React from 'react';

const generateHogImg = name => {
  let adjName = name.split(' ').join('_').toLowerCase();
  let pigImg = require(`../hog-imgs/${adjName}.jpg`);
  return pigImg
};

const HogsInfo = props => {
  let { name, specialty, weight, medal, greased } = props.hog;
  return (
    <div className="content">
      <h2> {name}</h2>
      <img src={generateHogImg(name)} alt="pig"/>
      {props.showDetails === true ?
        (<div>
          <p>Specialty: {specialty}</p>
          <p>Weight: {weight}</p>
          <p>Medal: {medal}</p>
          <p>Greased ? {greased.toString()}</p>
        </div>
        ) :
        null
      }
    </div>
  );
};

export default HogsInfo;
