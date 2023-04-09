import React, { useState } from 'react'

const charactersData = {
    heroes: [
      {
        name: "IRON MAN",
        powers: "Genius,Rich,IRON Suit",
        costume: "IRON MAN suit",
      },
      {
        name: "ANT MAN",
        powers: "Ant man suit",
        costume: "Ant man suit",
      },
      {
        name: "Spider-man",
        powers: "Reflexes,Speed,Spider-Sense",
        costume: "Spider Suit",
      },
      {
        name: "Bat man",
        powers: "Rich,Bat suit",
        costume: "Bat Suit",
      },
      {
        name: "Super-man",
        powers: "Superhuman strength,Reflexes,Speed",
        costume: "Superman  Suit",
      },
    ],
    villains: [
      {
        name: "Thanos",
        powers: "Superhuman strength,Reflexes,Speed,",
        costume: "Metal armor",
      },
      {
        name: "Venom",
        powers: "shapeshifting and camouflage Symbiotes autonomous defense",
        costume: "black suit",
      },
      {
        name: "Kang the conqueror",
        powers: "time travel, can access all tech",
        costume: "kang armor",
      },
      {
        name: "Joker",
        powers: "clownlike appearance and sick humour",
        costume: "Joker costume",
      },
    ],
  };

const Characters = ({characters}) => {
    const [charecterDatas, setCharecterDatas] = useState([]);
    const toggleCharecter = (type) => {
        setCharecterDatas(() => characters[type]);
    }

    return (
        <>
            <div>
                <button onClick={() => toggleCharecter('heroes')}>Show Heroes</button> &nbsp;
                <button onClick={() => toggleCharecter('villains')}>Show Villains</button>
                <div>
                    {
                        charecterDatas.map(({costume, name, powers}, index) => {
                            return(
                                <div key={index}>
                                    <h1>
                                        Name : {name}
                                    </h1>
                                    <p>
                                        Costume :
                                        {costume}
                                    </p>
                                    <p>
                                        Powers : {powers}
                                    </p>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </>
    );
}

const TabComponent = () => {
  return (
    <div>
        <h3>Tab Component</h3>
        <Characters characters={charactersData}/>
    </div>
  )
}

export default TabComponent