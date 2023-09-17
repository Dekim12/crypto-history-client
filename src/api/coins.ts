import axios from 'axios';

import { Coin } from '../types';

export const fetchCoinsList = async (): Promise<Coin[]> => {
  try {
    const response = await axios.get<Coin[]>(
      'http://localhost:5000/crypto_api/v1/crypto_coins/coins-list'
    );

    return response.data;
  } catch (error) {
    console.error('Getting list of coins error: ', error);

    return [];
  }
};
