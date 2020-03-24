/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState, useEffect} from 'react';
import './App.css';
import Monster from './fetch.js';

function currentMonster({match}) {
    const [item, setItem] = useState([]);
    useEffect (() => {
        fetchMonster();
    }, []);

const fetchMonster  = async () => {
    const mob = match.params.id.toLowerCase();
    const fetchMonster = await fetch(`https://api.open5e.com/monsters/${mob}/?format=json`)
    const monster = await fetchMonster.json();
    setItem(monster)
    console.log(monster);
// const abilities = monster.special_abilities[0].name
}
    return (
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
            </div>
        )
    }
   

  export default currentMonster;
