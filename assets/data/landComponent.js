import { COMPONENT, Rank, RANK_SECTION } from '../../js/model/rank.js';
import { Component } from '../../js/model/component.js';

export const landComponent = new Component(
  'Composante Terre',
  '',
  [
    new Rank(
      'Soldat',
      'Soldaat',
      'BE-Army-OR1.png',
      COMPONENT.LAND,
      RANK_SECTION.SOLDIER
    ),
    new Rank(
      '1er soldat',
      '1ste soldaat',
      'BE-Army-OR2.png',
      COMPONENT.LAND,
      RANK_SECTION.SOLDIER
    ),
    new Rank(
      'Caporal',
      'Korporaal',
      'BE-Army-OR3.png',
      COMPONENT.LAND,
      RANK_SECTION.SOLDIER
    ),
    new Rank(
      'Caporal-chef',
      'Korporaal-chef',
      'BE-Army-OR4a.png',
      COMPONENT.LAND,
      RANK_SECTION.SOLDIER
    ),
    new Rank(
      '1er caporal-chef',
      '1ste korporaal-chef',
      'BE-Army-OR4b.png',
      COMPONENT.LAND,
      RANK_SECTION.SOLDIER
    ),
  ],
  [
    new Rank(
      'Sergeant',
      'Sergeant',
      'BE-Army-OR5.png',
      COMPONENT.LAND,
      RANK_SECTION.NON_COM_OFFICIER
    ),
    new Rank(
      '1er sergeant',
      '1ste sergeant',
      'BE-Army-OR6a.png',
      COMPONENT.LAND,
      RANK_SECTION.NON_COM_OFFICIER
    ),
    new Rank(
      '1er sergeant-chef',
      '1ste sergeant-chef',
      'BE-Army-OR6b.png',
      COMPONENT.LAND,
      RANK_SECTION.NON_COM_OFFICIER
    ),
    new Rank(
      '1er sergeant-major',
      '1ste sergeant-majoor',
      'BE-Army-OR7.png',
      COMPONENT.LAND,
      RANK_SECTION.NON_COM_OFFICIER
    ),
    new Rank(
      'Adjudant',
      'Adjudant',
      'BE-Army-OR8.png',
      COMPONENT.LAND,
      RANK_SECTION.NON_COM_OFFICIER
    ),
    new Rank(
      'Adjudant-chef',
      'Adjudant-chef',
      'BE-Army-OR9a.png',
      COMPONENT.LAND,
      RANK_SECTION.NON_COM_OFFICIER
    ),
    new Rank(
      'Adjudant-major',
      'Adjudant-majoor',
      'BE-Army-OR9b.png',
      COMPONENT.LAND,
      RANK_SECTION.NON_COM_OFFICIER
    ),
  ],
  [
    new Rank(
      'Sous-lieutenant',
      'Onderluitenant',
      'BE-Army-OF1a.png',
      COMPONENT.LAND,
      RANK_SECTION.COM_OFFICER
    ),
    new Rank(
      'Lieutenant',
      'Luitenant',
      'BE-Army-OF1b.png',
      COMPONENT.LAND,
      RANK_SECTION.COM_OFFICER
    ),
    new Rank(
      'Capitaine',
      'Kapitein',
      'BE-Army-OF2.png',
      COMPONENT.LAND,
      RANK_SECTION.COM_OFFICER
    ),
    new Rank(
      'Capitaine-commandant',
      'Kapitein-commandant',
      'BE-Army-OF3a.png',
      COMPONENT.LAND,
      RANK_SECTION.COM_OFFICER
    ),
    new Rank(
      'Major',
      'Majoor',
      'BE-Army-OF3b.png',
      COMPONENT.LAND,
      RANK_SECTION.COM_OFFICER
    ),
    new Rank(
      'Lieutenant-colonel',
      'Luitenant-kolonel',
      'BE-Army-OF4.png',
      COMPONENT.LAND,
      RANK_SECTION.COM_OFFICER
    ),
    new Rank(
      'Colonel',
      'Kolonel',
      'BE-Army-OF5.png',
      COMPONENT.LAND,
      RANK_SECTION.COM_OFFICER
    ),
    new Rank(
      'Général de brigade',
      'Brigadegeneraal',
      'BE-Army-OF6.png',
      COMPONENT.LAND,
      RANK_SECTION.COM_OFFICER
    ),
    new Rank(
      'Général-major',
      'Generaal-majoor',
      'BE-Army-OF7.png',
      COMPONENT.LAND,
      RANK_SECTION.COM_OFFICER
    ),
    new Rank(
      'Lieutenant général',
      'Luitenant-generaal',
      'BE-Army-OF8.png',
      COMPONENT.LAND,
      RANK_SECTION.COM_OFFICER
    ),
    new Rank(
      'Général',
      'Generaal',
      'BE-Army-OF9.png',
      COMPONENT.LAND,
      RANK_SECTION.COM_OFFICER
    ),
  ]
);
