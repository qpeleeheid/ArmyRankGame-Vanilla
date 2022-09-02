import { COMPONENT, Rank, RANK_SECTION } from '../../js/model/rank.js';
import { Component } from '../../js/model/component.js';

export const airComponent = new Component(
  'Composante Air',
  '',
  [
    /* new Rank(
      'Soldat',
      'Soldaat',
      'BE-Air-OR1.png',
      COMPONENT.AIR,
      RANK_SECTION.SOLDIER
    ), */
    new Rank(
      '1er soldat',
      '1ste soldaat',
      'BE-Air-OR2.png',
      COMPONENT.AIR,
      RANK_SECTION.SOLDIER
    ),
    new Rank(
      'Caporal',
      'Korporaal',
      'BE-Air-OR3.png',
      COMPONENT.AIR,
      RANK_SECTION.SOLDIER
    ),
    new Rank(
      'Caporal-chef',
      'Korporaal-chef',
      'BE-Air-OR4a.png',
      COMPONENT.AIR,
      RANK_SECTION.SOLDIER
    ),
    new Rank(
      '1er caporal-chef',
      '1ste korporaal-chef',
      'BE-Air-OR4b.png',
      COMPONENT.AIR,
      RANK_SECTION.SOLDIER
    ),
  ],
  [
    new Rank(
      'Sergeant',
      'Sergeant',
      'BE-Air-OR5.png',
      COMPONENT.AIR,
      RANK_SECTION.NON_COM_OFFICIER
    ),
    new Rank(
      '1er sergeant',
      '1ste sergeant',
      'BE-Air-OR6a.png',
      COMPONENT.AIR,
      RANK_SECTION.NON_COM_OFFICIER
    ),
    new Rank(
      '1er sergeant-chef',
      '1ste sergeant-chef',
      'BE-Air-OR6b.png',
      COMPONENT.AIR,
      RANK_SECTION.NON_COM_OFFICIER
    ),
    new Rank(
      '1er sergeant-major',
      '1ste sergeant-majoor',
      'BE-Air-OR7.png',
      COMPONENT.AIR,
      RANK_SECTION.NON_COM_OFFICIER
    ),
    new Rank(
      'Adjudant',
      'Adjudant',
      'BE-Air-OR8.png',
      COMPONENT.AIR,
      RANK_SECTION.NON_COM_OFFICIER
    ),
    new Rank(
      'Adjudant-chef',
      'Adjudant-chef',
      'BE-Air-OR9a.png',
      COMPONENT.AIR,
      RANK_SECTION.NON_COM_OFFICIER
    ),
    new Rank(
      'Adjudant-major',
      'Adjudant-majoor',
      'BE-Air-OR9b.png',
      COMPONENT.AIR,
      RANK_SECTION.NON_COM_OFFICIER
    ),
  ],
  [
    new Rank(
      'Sous-lieutenant',
      'Onderluitenant',
      'BE-Air-OF1a.png',
      COMPONENT.AIR,
      RANK_SECTION.COM_OFFICER
    ),
    new Rank(
      'Lieutenant',
      'Luitenant',
      'BE-Air-OF1b.png',
      COMPONENT.AIR,
      RANK_SECTION.COM_OFFICER
    ),
    new Rank(
      'Capitaine',
      'Kapitein',
      'BE-Air-OF2.png',
      COMPONENT.AIR,
      RANK_SECTION.COM_OFFICER
    ),
    new Rank(
      'Capitaine-commandant',
      'Kapitein-commandant',
      'BE-Air-OF3a.png',
      COMPONENT.AIR,
      RANK_SECTION.COM_OFFICER
    ),
    new Rank(
      'Major',
      'Majoor',
      'BE-Air-OF3b.png',
      COMPONENT.AIR,
      RANK_SECTION.COM_OFFICER
    ),
    new Rank(
      'Lieutenant-colonel',
      'Luitenant-kolonel',
      'BE-Air-OF4.png',
      COMPONENT.AIR,
      RANK_SECTION.COM_OFFICER
    ),
    new Rank(
      'Colonel',
      'Kolonel',
      'BE-Air-OF5.png',
      COMPONENT.AIR,
      RANK_SECTION.COM_OFFICER
    ),
    new Rank(
      'Général de brigade',
      'Brigadegeneraal',
      'BE-Air-OF6.png',
      COMPONENT.AIR,
      RANK_SECTION.COM_OFFICER
    ),
    new Rank(
      'Général-major',
      'Generaal-majoor',
      'BE-Air-OF7.png',
      COMPONENT.AIR,
      RANK_SECTION.COM_OFFICER
    ),
    new Rank(
      'Lieutenant général',
      'Luitenant-generaal',
      'BE-Air-OF8.png',
      COMPONENT.AIR,
      RANK_SECTION.COM_OFFICER
    ),
    new Rank(
      'Général',
      'Generaal',
      'BE-Air-OF9.png',
      COMPONENT.AIR,
      RANK_SECTION.COM_OFFICER
    ),
  ]
);
