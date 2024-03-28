import { generateQueryString } from './generateQueryString';

describe('Функция generateQueryString', () => {
  it('должна возвращать пустую строку, когда все параметры равны false', () => {
    const queryString = generateQueryString('', false, false, false);
    expect(queryString).toBe('');
  });

  it('должна генерировать строку запроса только с параметром поиска', () => {
    const queryString = generateQueryString('test', false, false, false);
    expect(queryString).toBe('&search=test');
  });

  it('должна генерировать строку запроса только с одним параметром фильтра', () => {
    const queryString = generateQueryString('', true, false, false);
    expect(queryString).toBe('&filter.pos=$eq:adjective');
  });

  it('должна генерировать строку запроса с несколькими параметрами фильтра', () => {
    const queryString = generateQueryString('', true, true, true);
    expect(queryString).toBe(
      '&filter.pos=$eq:adjective&filter.pos=$or:$eq:verb&filter.pos=$or:$eq:noun',
    );
  });
});
