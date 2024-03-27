export function generateQueryString(
  search: string,
  adjectiveChecked: boolean,
  verbChecked: boolean,
  nounChecked: boolean,
) {
  let queryString = '';
  let isMultipleOptions = false;
  if (search !== '') {
    queryString += '&search=' + search;
  }

  if (adjectiveChecked) {
    queryString += '&filter.pos=$eq:adjective';
    isMultipleOptions = true;
  }

  if (verbChecked) {
    queryString += `&filter.pos=${isMultipleOptions ? '$or:' : ''}$eq:verb`;
    isMultipleOptions = true;
  }

  if (nounChecked) {
    queryString += `&filter.pos=${isMultipleOptions ? '$or:' : ''}$eq:noun`;
  }

  return queryString;
}
