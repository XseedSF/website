import React from 'react';
import TeamItem from './TeamItem';
import {TeamItemHiring, TeamItemSocialMedias, TeamItemContact, TeamItemCultural} from './TeamItemSpecials';

const TeamCulturalArray = [
  { id: 1, name: 'Media', image: 'http://theworldgame.sbs.com.au/sites/sbs.com.au.theworldgame/files/styles/full/public/20141211001074276887-original.jpg?itok=9wudtu8X&mtime=1418349101' },
  { id: 2, name: 'Media', image: 'https://i1.wp.com/www.footballinall.com/wp-content/uploads/2017/04/Edinson-Cavani-new-demands-to-extend-the-contract-with-PSG.jpg?w=960&ssl=1' },
  { id: 3, name: 'Media', image: 'https://metrouk2.files.wordpress.com/2016/02/458761537.jpg?w=748&h=498&crop=1' },
  { id: 4, name: 'Media', image: 'http://images.performgroup.com/di/library/Goal_Turkey/a1/b2/fernando-muslera-galatasaray_1a3qx1tdpsywy1jssrydsckm1e.jpg?t=1040681963&w=620&h=430' },
  { id: 5, name: 'Media', image: 'http://www.embajadoresdelgol.com/file/2017/08/Vecino.jpg' },
  { id: 6, name: 'Media', image: 'http://e00-marca.uecdn.es/assets/multimedia/imagenes/2017/06/19/14978882107762.jpg' },
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
  { id: 120, name: 'Media', image: require('../../images/team/01.jpg') },
  { id: 17, name: 'Gonzalo Castro', role: 'Web & Mobile Developer', image: require('../../images/team/09.jpg') },
  { id: 18, name: 'Santiago Rivero', role: 'Web & Mobile Designer UX-UI', image: require('../../images/team/03.jpg') },
  { id: 12, name: 'Fiorella Ichkhanian', role: 'International Sales Manager', image: require('../../images/team/04.jpg') },
  { id: 15, name: 'Gabriela Flores', role: 'Sales Executive', image: require('../../images/team/16.jpg') },
  { id: 10, name: 'Dayana Bakerdjian', role: 'Quality Assurance', image: require('../../images/team/07.jpg') },
  { id: 11, name: 'Luis Moreno', role: 'Quality Assurance', image: require('../../images/team/02.jpg') },
  { id: 21, name: 'Sofia Schoepf', role: 'Quality Assurance', image: require('../../images/team/11.jpg') },
  { id: 180, name: 'Contact', image: require('../../images/team/02.jpg') }
  // { id: 19, name: 'Pablo Revetria', role: 'Web & Mobile Designer UX-UI', image: require('../../images/team/team-p-revetria.png') },
  // { id: 20, name: 'Federico Sendra', role: 'Mobile Developer', image: require('../../images/team/team-f-sendra.png') },
  // { id: 13, name: 'Gastón Legnani', role: 'Tech Lead', image: require('../../images/team/team-g-legnani.png') },


];
let buffer= [];
let direction=true
let count = 0;
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
          count = 0;
          let classname = (direction) ? 'flex-item-group' :'flex-item-group-reverse';
          direction = !direction;
          return(
                <div className={classname}>
                  <div key={item.id} className="flex-item-big">
                      {buffer}
                  </div>
                  <TeamItemCultural  {...getTeamCulturalMedia()}/>
                </div>
            );
        }
        else return;
      })}
    </div>
  </div>
)

function getTeamCulturalMedia(){
  let retorno = {...TeamCulturalArray[0]};
  TeamCulturalArray.splice(0,1);
  return retorno;
}

export default TeamContent;
