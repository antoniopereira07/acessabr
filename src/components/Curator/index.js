import React from 'react'
import './curator.scss'
import curatorPhoto from '../../images/antonio-pereira.png'

function CuratorItem() {

    return (
        <div className="curator__container">
            <div className="curator__photo">
                <img src={curatorPhoto} alt="Foto curator Antonio Pereira" />
            </div>
            <div className="curator__details">
                <div>
                    <h3>Antonio Pereira</h3>
                    <h6>Curadoria</h6>
                </div>
                <p>Desenvolvedor Web e Front-end, atualmente aluno na EBAC.</p>
            </div>
        </div>
    )

}

export default CuratorItem