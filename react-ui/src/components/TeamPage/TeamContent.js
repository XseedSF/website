import React from 'react';
import TeamItem from './TeamItem';
import {TeamItemHiring, TeamItemSocialMedias, TeamItemContact} from './TeamItemSpecials';

const TeamArray = [
  { id: 1, name: 'Jesús Portillo', role: 'Co-Founder & CTO', image: require('../../images/team/01.jpg') },
  { id: 2, name: 'Marcelo Blanco', role: 'Co-Founder & CEO', image: require('../../images/team/05.jpg') },
  { id: 3, name: 'Andres Goyen', role: 'COO - CIO', image: require('../../images/team/03.jpg') },
  { id: 9, name: 'Joaquin Mut', role: 'CFO', image: require('../../images/team/03.jpg') },
  { id: 4, name: 'Diego Cáceres', role: 'Tech Lead', image: require('../../images/team/03.jpg') },
  { id: 5, name: 'Federico Sobral', role: 'Tech Lead', image: require('../../images/team/03.jpg') },
  { id: 8, name: 'Natalia Calle', role: 'Mobile Developer', image: require('../../images/team/03.jpg') },
  { id: 7, name: 'Matías Piñeiro', role: 'Web & Mobile Developer', image: require('../../images/team/03.jpg') },
  { id: 80, name: 'Hiring' },
  { id: 6, name: 'Nicolás Romeou', role: 'Web Developer', image: require('../../images/team/03.jpg') },
  { id: 14, name: 'Pablo Corso', role: 'Web Developer', image: require('../../images/team/03.jpg') },
  { id: 16, name: 'Matías Corso', role: 'Web Developer', image: require('../../images/team/03.jpg') },
  { id: 120, name: 'Hiring' },
  { id: 17, name: 'Gonzalo Castro', role: 'Banking and Finance Developer', image: require('../../images/team/03.jpg') },
  { id: 18, name: 'Santiago Rivero', role: 'Web & Mobile Designer UX-UI', image: require('../../images/team/03.jpg') },
  { id: 12, name: 'Fiorella Ichkhanian', role: 'International Sales Manager', image: require('../../images/team/04.jpg') },
  { id: 15, name: 'Gabriela Flores', role: 'Sales Executive', image: require('../../images/team/03.jpg') },
  { id: 10, name: 'Dayana Bakerdjian', role: 'Quality Asurance', image: require('../../images/team/03.jpg') },
  { id: 11, name: 'Luis Moreno', role: 'Quality Asurance', image: require('../../images/team/02.jpg') },
  { id: 21, name: 'Sofia Schoepf', role: 'Quality Asurance', image: require('../../images/team/03.jpg') },
  { id: 180, name: 'Hiring' }
  // { id: 19, name: 'Pablo Revetria', role: 'Web & Mobile Designer UX-UI', image: require('../../images/team/team-p-revetria.png') },
  // { id: 20, name: 'Federico Sendra', role: 'Mobile Developer', image: require('../../images/team/team-f-sendra.png') },
  // { id: 13, name: 'Gastón Legnani', role: 'Tech Lead', image: require('../../images/team/team-g-legnani.png') },


];

const TeamContent = () => (
  <div className="tp-team-content">
    <div className="flex-container">
      {TeamArray.map((item, index) => {
        if(index === 8)
          return <TeamItemHiring key={item.id} {...item} />
        else if (index === 12)
          return <TeamItemSocialMedias key={item.id} {...item} />
        else if (index === 20)
          return <TeamItemContact key={item.id} {...item} />
        else
          return <TeamItem key={item.id} {...item} />
      })}
    </div>
  </div>
)

export default TeamContent;
