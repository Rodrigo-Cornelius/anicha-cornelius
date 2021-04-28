import React from 'react';
import styles from './LoadingIcon.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'




const LoadingIcon = ({bigIcon=true}) => {
    return(
        
        <div className="text-center w-100">
            {
                bigIcon?
                <FontAwesomeIcon icon={faSpinner} pulse className={`${styles.icon}`} />
                :
                <FontAwesomeIcon icon={faSpinner} pulse className={`${styles.iconSmall}`} />
            }
        </div>
    )
}

export default LoadingIcon;