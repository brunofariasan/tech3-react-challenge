import { capitalize } from '../stringUtils';

describe('capitalize', () => {
  it('deve capitalizar a primeira letra de uma palavra', () => {
    expect(capitalize('exemplo')).toBe('Exemplo');
  });

  it('deve manter a primeira letra maiúscula se já estiver', () => {
    expect(capitalize('Teste')).toBe('Teste');
  });

  it('deve lidar com string vazia', () => {
    expect(capitalize('')).toBe('');
  });

  it('deve lidar com apenas uma letra', () => {
    expect(capitalize('a')).toBe('A');
  });

  it('deve manter o restante da string inalterado', () => {
    expect(capitalize('tEXTO')).toBe('TEXTO');
  });

  it('deve retornar string vazia se input for undefined ou null (via coerção)', () => {
    expect(capitalize(undefined as unknown as string)).toBe('');
    expect(capitalize(null as unknown as string)).toBe('');
  });
});
