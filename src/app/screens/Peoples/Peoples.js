import React from 'react'
import styled from 'styled-components'
import { sortBy } from 'lodash'
import SearchInput from 'app/components/SearchInput'

// type Props = {
//   peoples: Array<{}>,
// }

const UlStyled = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 900px;
  overflow-y: scroll;
  display: inline-block;

  &::-webkit-scrollbar {
    width: 0;
  }
`

const IlStyled = styled.li`
  font-family: 'starjedi', initial;
  font-size: 35px;
  padding: 10px 10px 10px 30px;
  cursor: pointer;
  text-shadow: 1px 0 0 #fff, -1px 0 0 #fff, 0 1px 0 #fff, 0 -1px 0 #fff,
    1px 1px #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff;
  transition: 0.7s ease-in-out;

  &:hover {
    padding-left: 100px;
  }
`

const Wrapper = styled.div`
  display: flex;
  height: 100%;
`

const peoples = [
  { name: 'Luke Skywalker' },
  { name: 'C-3PO' },
  { name: 'R2-D2' },
  { name: 'Darth Vader' },
  { name: 'Leia Organa' },
  { name: 'Owen Lars' },
  { name: 'Beru Whitesun lars' },
  { name: 'R5-D4' },
  { name: 'Biggs Darklighter' },
  { name: 'Obi-Wan Kenobi' },
  { name: 'Anakin Skywalker' },
  { name: 'Wilhuff Tarkin' },
  { name: 'Chewbacca' },
  { name: 'Han Solo' },
  { name: 'Greedo' },
  { name: 'Jabba Desilijic Tiure' },
  { name: 'Wedge Antilles' },
  { name: 'Jek Tono Porkins' },
  { name: 'Yoda' },
  { name: 'Palpatine' },
  { name: 'Boba Fett' },
  { name: 'IG-88' },
  { name: 'Bossk' },
  { name: 'Lando Calrissian' },
  { name: 'Lobot' },
  { name: 'Ackbar' },
  { name: 'Mon Mothma' },
  { name: 'Arvel Crynyd' },
  { name: 'Wicket Systri Warrick' },
  { name: 'Nien Nunb' },
  { name: 'Qui-Gon Jin' },
  { name: 'Nute Gunray' },
  { name: 'Finis Valorum' },
  { name: 'Jar Jar Binks' },
  { name: 'Roos Tarpals' },
  { name: 'Rugor Nass' },
  { name: 'Ric Olié' },
  { name: 'Watto' },
  { name: 'Sebulba' },
  { name: 'Quarsh Panaka' },
  { name: 'Shmi Skywalker' },
  { name: 'Darth Maul' },
  { name: 'Bib Fortuna' },
  { name: 'Ayla Secura' },
  { name: 'Dud Bolt' },
  { name: 'Gasgano' },
  { name: 'Ben Quadinaros' },
  { name: 'Mace Windu' },
  { name: 'Ki-Adi-Mundi' },
  { name: 'Kit Fisto' },
  { name: 'Eeth Koth' },
  { name: 'Adi Gallia' },
  { name: 'Saesee Tiin' },
  { name: 'Yarael Poof' },
  { name: 'Plo Koon' },
  { name: 'Mas Amedda' },
  { name: 'Gregar Typho' },
  { name: 'Cordé' },
  { name: 'Cliegg Lars' },
  { name: 'Poggle the Lesser' },
  { name: 'Luminara Unduli' },
  { name: 'Barriss Offee' },
  { name: 'Dormé' },
  { name: 'Dooku' },
  { name: 'Bail Prestor Organa' },
  { name: 'Jango Fett' },
  { name: 'Zam Wesell' },
  { name: 'Dexter Jettster' },
  { name: 'Lama Su' },
  { name: 'Taun We' },
  { name: 'Jocasta Nu' },
  { name: 'Ratts Tyerell' },
  { name: 'R4-P17' },
  { name: 'Wat Tambor' },
  { name: 'San Hill' },
  { name: 'Shaak Ti' },
  { name: 'Grievous' },
  { name: 'Tarfful' },
  { name: 'Raymus Antilles' },
  { name: 'Sly Moore' },
  { name: 'Tion Medon' },
  { name: 'Finn' },
  { name: 'Rey' },
  { name: 'Poe Dameron' },
  { name: 'BB8' },
  { name: 'Captain Phasma' },
  { name: 'Padmé Amidala' },
]

const ContainerCharacter = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    height: 70%;
  }
`

function Peoples() {
  const [pathImgCharacter, setPathImgCharacter] = React.useState(null)

  function handleHover(name) {
    import(`app/resources/images/peoples/${name}.png`).then(res =>
      setPathImgCharacter(res.default),
    )
  }

  function handleOnClick(element) {
    console.log('element', element)
  }

  return (
    <Wrapper>
      <UlStyled>
        {sortBy(peoples, p => p.name).map(people => (
          <IlStyled
            key={people.name}
            onMouseEnter={() => handleHover(people.name)}
          >
            {people.name}
          </IlStyled>
        ))}
      </UlStyled>

      <ContainerCharacter>
        <SearchInput elements={['a', 'b']} handleOnClick={handleOnClick} />
        <img src={pathImgCharacter} alt="" />
      </ContainerCharacter>
    </Wrapper>
  )
}

export default Peoples
