import PropTypes from 'prop-types';
import React from 'react';
import styles from './FacebookLoading.styl';

const FacebookLoading = (props) => {
    let { style, delay, duration, zoom } = props;

    if (typeof delay === 'number') {
        delay += 'ms';
    }
    if (typeof duration === 'number') {
        duration += 'ms';
    }

    return (
        <div
            className={styles.loading}
            style={{
                animationDelay: delay,
                WebkitAnimationDelay: delay,
                MozAnimationDelay: delay,
                OAnimationDelay: delay,
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
    delay: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),
    duration: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),
    zoom: PropTypes.number
};

FacebookLoading.defaultProps = {
    delay: 0,
    duration: 800,
    zoom: 1
};

export default FacebookLoading;
