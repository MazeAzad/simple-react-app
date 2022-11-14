import React from 'react';

const List = ({people}) => {

  return (
    <div className="listContainer">
      {people.map((person)=>{
        const {id,name,age,image}=person;
        return ( 
        <article key={id} className="personContainer">
            <div className="imageFrame">
                <div className="imageContainer">
                    <img src={image} alt={name} />
                </div>
            </div>
            <div className="personInfo">
                <h4>{name}</h4>
                <p>{age}</p>
            </div>
        </article>
        )
      })}
    </div>
  );
};

export default List;