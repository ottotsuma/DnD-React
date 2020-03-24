/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState, useEffect} from 'react';

const currentMonster = ({match}) => {
    const mob = match.params.id.toLowerCase();
  const [current, setCurrent] = useState(mob);

  const [item, setItem] = useState(null);
  useEffect(() => {
    //SO code snippet doesn't have recent babel, so no
    // async await support in snippet code, changed to
    // promise
    const fetchMonster = () =>
      fetch(
        `https://api.open5e.com/monsters/${current}/?format=json`
      )
        .then(response => response.json())
        .then(setItem);
    fetchMonster();
  }, [current]);

  return (
    <div>
      {item && (
        <div>
          <h1>{item.name}</h1>
                <p>Size: {item.size}</p>
                <p>Race: {item.type}</p>
                <p>Alignment: {item.alignment}</p>
                <p>AC: {item.armor_class}</p>
                <p>Hit points: {item.hit_points}</p>
                <p>Hit dice: {item.hit_dice}</p>
                <p>Strength: {item.strength}</p>
                <p>Dexterity: {item.dexterity}</p>
                <p>Constitution: {item.constitution}</p>
                <p>Intelligence: {item.intelligence}</p>
                <p>Wisdom: {item.wisdom}</p>
                <p>Charisma: {item.charisma}</p>
                <p>Senses: {item.senses}</p>
                <p>CR: {item.challenge_rating}</p>
          <ul className="Abilities-ul">
            {item.special_abilities.map(
              (ability, index) => (
                <li className="Abilities-li" key={index}>{ability.name}, {ability.desc}</li>
              )
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default currentMonster;