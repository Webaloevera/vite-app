import React, { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import PropTypes from 'prop-types';
import 'react-loading-skeleton/dist/skeleton.css'


const IMG_STATUS = {
    LOADING: 0,
    LOADED: 1,
    FAILED: 2
}

const ImagePreloader =  ({imageURL, alt}) =>  {
   
    const [status, setStatus] = useState(IMG_STATUS.LOADING)

    useEffect(() => {
        setStatus(IMG_STATUS.LOADING);
        const newImage = new Image();
        newImage.onload = () => {
            setStatus(IMG_STATUS.LOADED)
        }
        newImage.onerror = () => {
            setStatus(IMG_STATUS.FAILED)
        }
        newImage.src = imageURL    
    },[imageURL])

    const getTemplate = (status) => {
        switch(status) {
            case IMG_STATUS.LOADING : {
                return ( <Skeleton width={300}  height={200} ></Skeleton> )
            }
            case IMG_STATUS.LOADED : {
                return ( <img src={imageURL} alt={alt} /> )
            }
            case IMG_STATUS.FAILED : {
                return ( <img src='https://uzex.uz/images/blog/image_not_found.png' alt='not found' /> )
            }
        }
    }

  return (
        <>    
            {
                getTemplate(status)
            }
        </> 

  );
}

ImagePreloader.propTypes = {
    imageURL: PropTypes.string,
    alt: PropTypes.string
  };

export default ImagePreloader;
