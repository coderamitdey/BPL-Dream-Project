import React from 'react';
import SelectedCard from '../SelectedCard/SelectedCard';

const SelectedPlayers = ({purchasedPlayers, removePlayers}) => {
    
    return (
        <div className='max-w-[1280px] mx-auto'>
            {
                purchasedPlayers.map(player => <SelectedCard removePlayers={removePlayers} player={player}></SelectedCard>)
            }
        </div>
        
    );
};

export default SelectedPlayers;