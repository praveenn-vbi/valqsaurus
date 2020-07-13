import React from 'react';
import { BUILD_TYPE } from '../../build-config'
export const Collaborate = ({ children }) => {
    return (<div>
        {BUILD_TYPE === "COLLABORATE" ? children : null}
    </div>);
}

export const Certified = ({ children }) => {
    return (<div>
        {BUILD_TYPE === "CERTIFIED" ? children : null}
    </div>);
}