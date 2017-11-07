import React from "react";
import TeamItem from "./TeamItem";
import {
  TeamItemHiring,
  TeamItemSocialMedias,
  TeamItemContact
} from "./TeamItemSpecials";

const TeamCulturalArray = [
  { id: 200, name: 'Media', image: require('../../images/cultural/cultural_07.png') },
  { id: 201, name: 'Media', image: require('../../images/cultural/cultural_08.png') },
  { id: 202, name: 'Media', image: require('../../images/cultural/cultural_03.png') },
  { id: 203, name: 'Media', image: require('../../images/cultural/cultural_04.png') },
  { id: 204, name: 'Media', image: require('../../images/cultural/cultural_05.png') },
  { id: 205, name: 'Media', image: require('../../images/cultural/cultural_06.png') },
];
//Info of Team and photos
const TeamArray = [
  { id: 1, name: 'Jesús Portillo', role: 'Co-Founder & CTO', image: require('../../images/team/01.jpg') },
  { id: 2, name: 'Marcelo Blanco', role: 'Co-Founder & CEO', image: require('../../images/team/05.jpg') },
  { id: 3, name: 'Andres Goyen', role: 'COO - CIO', image: require('../../images/team/15.jpg') },
  { id: 9, name: 'Joaquin Mut', role: 'CFO', image: require('../../images/team/08.jpg') },
  { id: 4, name: 'Diego Cáceres', role: 'Tech Lead', image: require('../../images/team/12.jpg') },
  { id: 5, name: 'Federico Sobral', role: 'Tech Lead', image: require('../../images/team/10.jpg') },
  { id: 8, name: 'Natalia Calle', role: 'Web & Mobile Developer', image: require('../../images/team/06.jpg') },
  { id: 7, name: 'Matías Piñeiro', role: 'Web & Mobile Developer', image: require('../../images/team/14.jpg') },
  { id: 80, name: 'Hiring', image: require('../../images/team/01.jpg') },
  { id: 6, name: 'Nicolás Romeou', role: 'Web Developer', image: require('../../images/team/13.jpg') },
  { id: 14, name: 'Pablo Corso', role: 'Web & Mobile Developer', image: require('../../images/team/17.jpg') },
  { id: 16, name: 'Matías Corso', role: 'Web & Mobile Developer', image: require('../../images/team/18.jpg') },
  { id: 17, name: 'Gonzalo Castro', role: 'Web & Mobile Developer', image: require('../../images/team/09.jpg') },
  { id: 18, name: 'Santiago Rivero', role: 'Web & Mobile Designer UX-UI', image: require('../../images/team/03.jpg') },
  { id: 15, name: 'Gabriela Flores', role: 'Sales Executive', image: require('../../images/team/16.jpg') },
  { id: 10, name: 'Dayana Bakerdjian', role: 'Quality Assurance', image: require('../../images/team/07.jpg') },
  { id: 11, name: 'Luis Moreno', role: 'Quality Assurance', image: require('../../images/team/02.jpg') },
  { id: 21, name: 'Sofia Schoepf', role: 'Quality Assurance', image: require('../../images/team/11.jpg') },
  { id: 22, name: 'Carolina Rodriguez', role: 'Quality Assurance', image: require('../../images/team/19.png') },
  { id: 23, name: 'Rodrigo Varela', role: 'Quality Assurance', image: require('../../images/team/20.png') },
  { id: 24, name: 'Silvina Boffa', role: 'Quality Assurance', image: require('../../images/team/21.png') },
  { id: 25, name: 'Victoria Aloy', role: 'Quality Assurance', image: require('../../images/team/22.png') },
  { id: 180, name: 'Contact', image: require('../../images/team/02.jpg') }
  // { id: 19, name: 'Pablo Revetria', role: 'Web & Mobile Designer UX-UI', image: require('../../images/team/team-p-revetria.png') },
  // { id: 20, name: 'Federico Sendra', role: 'Mobile Developer', image: require('../../images/team/team-f-sendra.png') },
  // { id: 13, name: 'Gastón Legnani', role: 'Tech Lead', image: require('../../images/team/team-g-legnani.png') },
];
let buffer= [];
let direction=true
let count = 0;
let i = -1;
const TeamContent = () => (
  <div className="tp-team-content">
    <div className="flex-container">
      {TeamArray.map((item, index) => {

        count++;

        if(count===1){
          buffer= [];
        }


        if(item.name === 'Hiring')
            buffer.push(<TeamItemHiring key={item.id} {...item} />)
        else if (item.name === 'Contact')
            buffer.push(<TeamItemContact key={item.id} {...item} />)
        else
            buffer.push(<TeamItem key={item.id} {...item} />)

        if(count===4  || (index+1) === TeamArray.length){
          i++;
          count = 0;
          let classname = (direction) ? 'flex-item-group' :'flex-item-group-reverse';
          direction = !direction;
          return(
                <div key={item.id + 'A'} className={classname}>
                  <div key={item.id} className="flex-item-big">
                      {buffer}
                  </div>
                  <div className="flex-item-cultural">
                		<div className="team-item-container team-content">
                				 <img className="team-img"
                					 src={TeamCulturalArray[i].image}  />
                		</div>
                	</div>

                </div>
            );
        }
        else return;
      })}
    </div>
  </div>;

export default TeamContent;
