import React, { useEffect, useState } from 'react'



export const Message = () => {


    const [coords, Setcoords] = useState({ x:0, y:0 })
    const {x , y} = coords;

    useEffect(() => {

        const moveMouse = (e) =>{
            const coords = {x: e.x, y: e.y};
            Setcoords(coords);
        }
        window.addEventListener('mousemove', moveMouse);


        
        return () => {
            window.removeEventListener('mousemove',moveMouse);
        }
    }, []);

    return (
        <div>
            <h3>You 're Cool!!!</h3>
            <p>
                x:{ x } y: { y }
            </p>
            
        </div>
    )
}
