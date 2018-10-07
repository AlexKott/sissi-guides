export default content =>
  content.global._items.map(pageId => {
    const page = content.pages[pageId];
    const isSinglePage = content.global._items.length === 1;

    return {
      path: isSinglePage ? '' : `/${page.path}`,
      page,
      sections: page._items.map(sectionId => content.sections[sectionId]),
      content,
    };
  });
