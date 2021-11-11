import React from 'react';
import './Principal.scss';

export const Principal = ({Titulo, Mensaje}) => {

    return (
        <main className="Principal">

            <div>
                {Titulo}
                <br/><br/>
                {Mensaje}
                <br/><br/>
            </div>


        </main>
    )
}