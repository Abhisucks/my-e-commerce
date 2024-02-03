import React from 'react';

const Loader = () => {
    const overlayStyle = {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: '1000', // Ensure the overlay is above other content
    };

    return (
        <div style={overlayStyle}>
            <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
}

export default Loader;
