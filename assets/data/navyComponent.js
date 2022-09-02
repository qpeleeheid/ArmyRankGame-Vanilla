import { COMPONENT, Rank, RANK_SECTION } from '../../js/model/rank.js';
import { Component } from '../../js/model/component.js';

export const navyComponent = new Component(
  'Composante Marine',
  '',
  [
    new Rank(
      'Matelot',
      'Matroos',
      'BE-Navy-OR1.png',
      COMPONENT.NAVY,
      RANK_SECTION.SOLDIER
    ),
    new Rank(
      'Premier matelot',
      'Eerste matroos',
      'BE-Navy-OR2.png',
      COMPONENT.NAVY,
      RANK_SECTION.SOLDIER
    ),
    new Rank(
      'Quartier-maître',
      'Kwartiermeester',
      'BE-Navy-OR3.png',
      COMPONENT.NAVY,
      RANK_SECTION.SOLDIER
    ),
    new Rank(
      'Quartier-maître-chef',
      'Kwartiermeester-chef',
      'BE-Navy-OR4a.png',
      COMPONENT.NAVY,
      RANK_SECTION.SOLDIER
    ),
    new Rank(
      '1er Quartier-maître-chef',
      'Eerste kwartiermeester-chef',
      'BE-Navy-OR4b.png',
      COMPONENT.NAVY,
      RANK_SECTION.SOLDIER
    ),
  ],
  [
    new Rank(
      'Second-maître',
      'Tweede meester',
      'BE-Navy-OR5.png',
      COMPONENT.NAVY,
      RANK_SECTION.NON_COM_OFFICIER
    ),
    new Rank(
      'Maître',
      'Meester',
      'BE-Navy-OR6a.png',
      COMPONENT.NAVY,
      RANK_SECTION.NON_COM_OFFICIER
    ),
    new Rank(
      'Maître-chef',
      'Meester-chef',
      'BE-Navy-OR6b.png',
      COMPONENT.NAVY,
      RANK_SECTION.NON_COM_OFFICIER
    ),
    new Rank(
      'Premier maître',
      'Eerste meester',
      'BE-Navy-OR7.png',
      COMPONENT.NAVY,
      RANK_SECTION.NON_COM_OFFICIER
    ),
    new Rank(
      'Premier-maître chef',
      'Eerste meesterchef',
      'BE-Navy-OR8.png',
      COMPONENT.NAVY,
      RANK_SECTION.NON_COM_OFFICIER
    ),
    new Rank(
      'Maître-principal',
      'Oppermeester',
      'BE-Navy-OR9a.png',
      COMPONENT.NAVY,
      RANK_SECTION.NON_COM_OFFICIER
    ),
    new Rank(
      'Maître principal-Chef',
      'Oppermeester-Chef',
      'BE-Navy-OR9b.png',
      COMPONENT.NAVY,
      RANK_SECTION.NON_COM_OFFICIER
    ),
  ],
  [
    new Rank(
      'Enseigne de vaisseau de 2e classe',
      'Vaandrig-ter-zee 2de klasse',
      'BE-Navy-OF1a.png',
      COMPONENT.NAVY,
      RANK_SECTION.COM_OFFICER
    ),
    new Rank(
      'Enseigne de vaisseau',
      'Vaandrig-ter-zee',
      'BE-Navy-OF1b.png',
      COMPONENT.NAVY,
      RANK_SECTION.COM_OFFICER
    ),
    new Rank(
      'Lieutenant de vaisseau',
      'Luitenant-ter-zee',
      'BE-Navy-OF2.png',
      COMPONENT.NAVY,
      RANK_SECTION.COM_OFFICER
    ),
    new Rank(
      'Lieutenant de vaisseau de 1re classe',
      'Luitenant-ter-zee 1ste klasse',
      'BE-Navy-OF3a.png',
      COMPONENT.NAVY,
      RANK_SECTION.COM_OFFICER
    ),
    new Rank(
      'Capitaine de corvette',
      'Korvetkapitein',
      'BE-Navy-OF3b.png',
      COMPONENT.NAVY,
      RANK_SECTION.COM_OFFICER
    ),
    new Rank(
      'Capitaine de frégate',
      'Fregatkapitein',
      'BE-Navy-OF4.png',
      COMPONENT.NAVY,
      RANK_SECTION.COM_OFFICER
    ),
    new Rank(
      'Capitaine de vaisseau',
      'Kapitein-ter-zee',
      'BE-Navy-OF5.png',
      COMPONENT.NAVY,
      RANK_SECTION.COM_OFFICER
    ),
    new Rank(
      'Amiral de flottille',
      'Flottieljeadmiraal',
      'BE-Navy-OF6.png',
      COMPONENT.NAVY,
      RANK_SECTION.COM_OFFICER
    ),
    new Rank(
      'Amiral de division',
      'Divisieadmiraal',
      'BE-Navy-OF7.png',
      COMPONENT.NAVY,
      RANK_SECTION.COM_OFFICER
    ),
    new Rank(
      'Vice-amiral',
      'Vice-admiraal',
      'BE-Navy-OF8.png',
      COMPONENT.NAVY,
      RANK_SECTION.COM_OFFICER
    ),
    new Rank(
      'Amiral',
      'Admiraal',
      'BE-Navy-OF9.png',
      COMPONENT.NAVY,
      RANK_SECTION.COM_OFFICER
    ),
  ]
);
