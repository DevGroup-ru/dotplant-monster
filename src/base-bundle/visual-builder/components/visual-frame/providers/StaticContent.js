import DataProvider from '../DataProvider';

class StaticContent extends DataProvider {
  constructor(providedKeys) {
    super('DotPlant\\Monster\\DataEntity\\StaticContentProvider', providedKeys);
  }
}

export default StaticContent;
