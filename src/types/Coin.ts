export interface Coin {
  id: number;
  name: string;
  symbol: string;
  cmc_rank: number;
  price: string;
  percent_change_1h: string;
  percent_change_24h: string;
  percent_change_7d: string;
  percent_change_30d: string;
  percent_change_60d: string;
  percent_change_90d: string;
  description: string;
  logo: string;
  website: string;
  technical_doc: string;
}
