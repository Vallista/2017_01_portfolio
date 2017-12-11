import React from 'react';

const DetailWrapper = ({children}) => (
    <div className="layer">
        <div className="layer-inner">
            <div className="content">
                <div className="DetailWrapper">
                    {children}
                </div>
            </div>
        </div>
    </div>
);

export default DetailWrapper;