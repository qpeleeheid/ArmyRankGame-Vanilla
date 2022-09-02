import { airComponent } from '../../assets/data/airComponent.js';
import { landComponent } from '../../assets/data/landComponent.js';
import { navyComponent } from '../../assets/data/navyComponent.js';
import { COMPONENT } from '../model/rank.js';

const getComponent = (componentId) => {
  switch (componentId) {
    case COMPONENT.AIR:
      return airComponent;
    case COMPONENT.LAND:
      return landComponent;
    case COMPONENT.NAVY:
      return navyComponent;
    default:
      return airComponent;
  }
};

export const renderComponentView = (componentId) => {
  const component = getComponent(componentId);

  return 'test';
};
