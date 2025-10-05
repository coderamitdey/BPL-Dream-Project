import React from 'react';

const SelectedCard = ({ player, removePlayers }) => {

    console.log(player);

    const handleRemove = () => {
           removePlayers(player)
    }
    return (
        <div>
            <div className='border-1 border-gray-300 rounded-xl max-w-[1280px] mx-auto mt-8'>
                <div className='flex justify-between'>
                    <div className='flex items-center'>
                        <img src={player.player_img} className='h-[60px] w-[60px] rounded-xl' alt="" />
                        <div className='ml-3'>
                            <h1 className='text-xl font-semibold'>{player.player_name}</h1>
                            <p className='text-sm'>{player.playing_role}</p>
                        </div>
                    </div>


                    <div onClick={handleRemove}>
                        <img src="https://i.ibb.co.com/ccW6sJCj/Frame.png" className='py-3 px-3' alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SelectedCard;