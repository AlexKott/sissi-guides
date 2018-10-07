export default content =>
  content.global._items.map(pageId => {
    const page = content.pages[pageId];
    const isSinglePage = content.global._items.length === 1;

    return {
      global: content.global,
      page,
      pages: content.global._items.map(pageId => content.pages[pageId]),
      path: isSinglePage ? '' : `/${page.path}`,
      sections: page._items.map(sectionId => content.sections[sectionId]),
    };
  });
