import { checkError, client } from './client';

export async function getFlags() {
  const response = await client.from('countries').select('name, iso2, continent');
  return checkError(response);
}
