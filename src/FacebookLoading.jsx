import React, { PropTypes } from 'react';
import styles from './FacebookLoading.styl';

const FacebookLoading = (props) => {
    let { style, duration, zoom } = props;

    if (typeof duration === 'number') {
        duration += 's';
    }

    return (
        <div
            className={styles.loading}
            style={{
                animationDuration: duration,
                WebkitAnimationDuration: duration,
                MozAnimationDuration: duration,
                OAnimationDuration: duration,
                zoom: zoom,
                ...style
            }}
        />
    );
};

FacebookLoading.propTypes = {
    duration: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),
    zoom: PropTypes.number
};

FacebookLoading.defaultProps = {
    duration: '0.8s',
    zoom: 1
};

export default FacebookLoading;
