import React from 'react';

interface ContentProps {
    children: React.ReactNode;
}

const Content: React.FC<ContentProps> = ({ children }) => {
    return (
        <div className='min-h-svh content'>
            {children}
        </div>
    );
}

export default Content;
