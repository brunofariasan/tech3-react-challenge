import axios from 'axios';
import jwt from 'jsonwebtoken';

const ADMIN_API_URL = process.env.GHOST_ADMIN_API_URL;
const ADMIN_API_KEY = process.env.GHOST_ADMIN_API_KEY;

if (!ADMIN_API_URL || !ADMIN_API_KEY) {
  throw new Error(
    'Variáveis de ambiente GHOST_ADMIN_API_URL e GHOST_ADMIN_API_KEY são obrigatórias.',
  );
}

const [id, secret] = ADMIN_API_KEY.split(':');

if (!id || !secret) {
  throw new Error('GHOST_ADMIN_API_KEY deve estar no formato "<id>:<secret>"');
}

let cachedToken = '';
let tokenExpiration: number = 0;

const createToken = () => {
  const now = Math.floor(Date.now() / 1000);
  if (cachedToken && tokenExpiration > now + 10) return cachedToken;

  tokenExpiration = now + 5 * 60;
  cachedToken = jwt.sign({}, Buffer.from(secret, 'hex'), {
    keyid: id,
    algorithm: 'HS256',
    expiresIn: '5m',
    audience: '/admin/',
  });

  return cachedToken;
};

const ghostAPI = axios.create({
  baseURL: `${ADMIN_API_URL}/ghost/api/admin`,
});

ghostAPI.interceptors.request.use((config) => {
  const token = createToken();
  config.headers.Authorization = `Ghost ${token}`;
  return config;
});

export default ghostAPI;
