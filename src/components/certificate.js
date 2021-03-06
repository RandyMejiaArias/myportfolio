import React from 'react';

export default (props) => {
    const certificate = props.element;
    return (
        <div className="shadow p-8 bg-white mr-4 rounded">
            <h4 className="font-bold">{certificate.title}</h4>
            <div className="text-center">
                <span className="inline-block bg-blue-200 text-blue-700 p-2 radius">Calificación: {parseInt(certificate.score)}</span>
            </div>
        </div>
    );
};