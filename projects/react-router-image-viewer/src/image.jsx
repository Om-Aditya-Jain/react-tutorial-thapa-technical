import React from 'react';

const Image = (props) =>{
    const imgname = `https://source.unsplash.com/400x400/?${props.name}`;
    return(
        <div>
            <img src={imgname} alt="text-image" />
        </div>
    );
}

export default Image;