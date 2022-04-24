const getFilterTags = (listing) => {
  return [listing.role, listing.level, ...listing.languages, ...listing.tools];
};

export const checkListing = (listing, filters) => {
  console.log(listing, "Filters: ", filters);
  const listingTags = getFilterTags(listing);
  const matched = filters.filter((tag) => listingTags.includes(tag));
  return matched.length > 0 ? listing : null;
};
