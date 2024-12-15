const generateBreadcrumbsFromSlug = (slug) => {
  const pathSegments = slug.split('/').filter(Boolean); 

  return pathSegments.map((segment, index) => {
    const href = `/${pathSegments.slice(0, index + 1).join('/')}`;
    const label = segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' '); 

    return { href, label };
  });
};

export default generateBreadcrumbsFromSlug;