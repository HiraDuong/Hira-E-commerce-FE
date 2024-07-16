import React from 'react';

interface ContentProps {
    children: React.ReactNode;
}

const Content: React.FC<ContentProps> = ({ children }) => {
    return (
        <div className='mt-20'>
            {children}
        </div>
    );
}

export default Content;
