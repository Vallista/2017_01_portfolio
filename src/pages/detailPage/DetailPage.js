import React from 'react';

const DetailPage = ({ match }) => {
    return (
        <h1 style={{color: "#ffffff"}}>
            {match.params.page}
        </h1>
    );
};

export default DetailPage;