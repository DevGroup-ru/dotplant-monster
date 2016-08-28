import StaticContent from './providers/StaticContent';

class DataProviderFactory {
  static factory(providerDecl, providedKeys) {
    let provider = null;
    const className = providerDecl.className
      || 'DotPlant\\Monster\\DataEntity\\StaticContentProvider';
    switch (className) {
      case 'DotPlant\\Monster\\DataEntity\\StaticContentProvider':
      default:
        provider = new StaticContent(providedKeys);
    }
    return provider;
  }
}

export default DataProviderFactory;
