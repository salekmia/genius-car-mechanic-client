import React from 'react';
import mecha1 from '../../../images/mechanic/mecha1.jpg';
import mecha2 from '../../../images/mechanic/mecha2.jpg';
import mecha3 from '../../../images/mechanic/mecha3.jpg';
import mecha4 from '../../../images/mechanic/mecha4.jpg';
import mecha5 from '../../../images/mechanic/mecha5.jpg';
import mecha6 from '../../../images/mechanic/mecha6.jpg';
import Expert from '../Expert/Expert';

const experts = [
    {
        name: 'Abu Salek',
        position: '-Engine expert',
        img: mecha1
    },
    {
        name: 'Mehidy',
        position: '-Polish expert',
        img: mecha2
    },
    {
        name: 'Hridoy',
        position: '-Love expert',
        img: mecha3
    },
    {
        name: 'Jony',
        position: '-Comment expert',
        img: mecha4
    },
    {
        name: 'Rabbi',
        position: '-Like expert',
        img: mecha5
    },
    {
        name: 'Raju',
        position: '-Share expert',
        img: mecha6
    },
]
const Experts = () => {
    return (
        <div className="container mt-5" id="experts">
            <h2>this is experts</h2>
            <div className="row g-4">
                {
                    experts.map(expert => 
                        <Expert expert={expert} key={expert.name}></Expert>
                    )
                }
            </div>
        </div>
    );
};

export default Experts;