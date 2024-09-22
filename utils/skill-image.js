import aws from '/public/svg/skills/aws.svg';
import bootstrap from '/public/svg/skills/bootstrap.svg';
import c from '/public/svg/skills/c.svg';
import canva from '/public/svg/skills/canva.svg';
import css from '/public/svg/skills/css.svg';
import figma from '/public/svg/skills/figma.svg';
import firebase from '/public/svg/skills/firebase.svg';
import git from '/public/svg/skills/git.svg';
import html from '/public/svg/skills/html.svg';
import java from '/public/svg/skills/java.svg';
import javascript from '/public/svg/skills/javascript.svg';
import microsoftoffice from '/public/svg/skills/microsoftoffice.svg';
import mongoDB from '/public/svg/skills/mongoDB.svg';
import mysql from '/public/svg/skills/mysql.svg';
import photoshop from '/public/svg/skills/photoshop.svg';
import premierepro from '/public/svg/skills/premierepro.svg';
import python from '/public/svg/skills/python.svg';
import react from '/public/svg/skills/react.svg';
import vitejs from '/public/svg/skills/vitejs.svg';
import wordpress from '/public/svg/skills/wordpress.svg';
import nodejs from '/public/svg/skills/nodejs.svg';
import ubuntu from '/public/svg/skills/ubuntu.svg';
import cplusplus from '/public/svg/skills/cplusplus.svg';


export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case 'html':
      return html;
    case 'ubuntu':
      return ubuntu;
    case 'photoshop':
      return photoshop;
    case 'nodejs':
      return nodejs;
    case 'css':
      return css;
    case 'javascript':
      return javascript;
    case 'react':
      return react;
    case 'bootstrap':
      return bootstrap;
    case 'mongodb':
      return mongoDB;
    case 'mysql':
      return mysql;
    case 'vitejs':
      return vitejs;
    case 'c':
      return c;
    case 'c++':
      return cplusplus;
    case 'java':
      return java;
    case 'python':
      return python;
    case 'aws':
      return aws;
    case 'firebase':
      return firebase;
    case 'gimp':
      return gimp;
    case 'git':
      return git;
    case 'lightroom':
      return lightroom;
    case 'premiere pro':
      return premierepro;
    case 'wordpress':
      return wordpress;
    case 'figma':
      return figma;
    case 'microsoft office':
      return microsoftoffice;
    case 'canva':
      return canva;
    default:
      break;
  }
}
