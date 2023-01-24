import React from 'react';

const SideLayout = ({ children }) => {
    return (
        <div className="bg-black ">
            <div className="md:pl-16 mx-auto bg-blue-500/10 min-h-screen text-blue-50">{children}</div>
        </div>
    );
};

export default SideLayout;
