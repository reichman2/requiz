import React from 'react';


interface CardProps extends React.PropsWithChildren {
    onClick?: (e: React.MouseEvent) => void;
}

export default function Card(props: CardProps) {

    return (
        <div className="card">
            { props.children }
        </div>
    );
}