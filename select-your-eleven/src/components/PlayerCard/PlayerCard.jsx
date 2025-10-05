import React, { useState } from 'react';
import userImg from '../../assets/user-1.png';
import flagImg from '../../assets/report-1.png'


const PlayerCard = ({player, setAvailableBalance, availableBalance}) => {

    const [isSelected, setIsSelected] = useState(false)

    const handleSelected = (playerData)=>{
        const playerPrice = parseInt(playerData.price);
        
        if(availableBalance < playerPrice){
            alert("Not enough Coins!!");
            return
        }
        setIsSelected(true)
        setAvailableBalance(availableBalance - playerPrice);

    }
    return (
        <div className="card bg-base-100 shadow-sm p-4">
  <figure>
    <img
      src={player.player_img}
      alt="Shoes" className='w-full h-[300px]'/>
      
  </figure>
  <div className="mt-4">
    
    <div className='flex'>
        <img src={userImg} alt="" />
    <h2 className="card-title ml-2">{player.player_name}</h2>
    </div>

    <div className='flex justify-between border-b-1 pb-2 border-gray-400'>
        <div className='flex items-center'>
            <img className='w-[20px] h-[20px]' src={flagImg} alt="" />
            <span className='ml-2'>{player.player_country}</span>
        </div>

        <button className='btn'>{player.playing_role}</button>
    </div>

    <div className='flex justify-between font-semibold'>
        <span>Rating</span>
        <span>{player.player_rating}</span>
    </div>
    <div className='flex justify-between'>
        <span className='font-semibold'>{player.batting_style}</span>
        <span>{player.bowling_style}</span>
    </div>
    
    <div className="card-actions mt-4 justify-between items-centers">
        <p className='font-semibold'>Price: ${player.price}</p>
      <button disabled={isSelected} onClick={() =>{handleSelected(player)}} 

      className="btn">{isSelected === true? "Selected" : "Choose Player"}</button>
    </div>
  </div>
</div>
    );
};

export default PlayerCard;