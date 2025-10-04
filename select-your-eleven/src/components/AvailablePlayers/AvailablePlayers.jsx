import React, { use } from 'react';
import PlayerCard from '../PlayerCard/PlayerCard';


const AvailablePlayers = ({ playersPromise }) => {

    const playerData = use(playersPromise)
    console.log(playerData);
    return (
        <div className='max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-5'>

    {
        playerData.map(player =><PlayerCard player={player}></PlayerCard> )
    }

        </div>
    );
};

export default AvailablePlayers;