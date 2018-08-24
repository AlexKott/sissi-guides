export default (content) =>
  content.pages.map(page => ({
    path: content.pages.length > 1 ? `/${page.path}` : undefined,
    page,
    sections: page.sections.map(sectionId => ({ ...content.sections[sectionId], id: sectionId })),
    content,
  }));
