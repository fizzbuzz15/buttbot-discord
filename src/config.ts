import dotenv from 'dotenv';

dotenv.config();

export interface ButtBotConfig {
  meme: string;
  minimumWordsBeforeButtification: number;
  wordsToPossiblyButt: number;
  negativeThreshold: number;
  chanceToButt: number;
  buttBuffer: number;
  buttAI: 0 | 1;
  breakTheFirstRuleOfButtbotics: boolean;
  apiPort: number;
  shutupUntil: number;
  shutupDelay: number;
}

const config: ButtBotConfig = {
  apiPort: Number(process.env.API_PORT) || 3000,
  meme: process.env.BOT_MEME || 'butt',
  minimumWordsBeforeButtification:
    Number(process.env.BOT_MINIMUM_BEFORE_BUTTIFY) || 3,
  wordsToPossiblyButt: Number(process.env.BOT_WORDS_TO_POSSIBLY_BUTT) || 3,
  negativeThreshold: Number(process.env.BOT_NEGATIVE_THRESHOLD) || -10,
  chanceToButt: parseFloat(process.env.BOT_CHANCE) || 0.05,
  buttBuffer: Number(process.env.BOT_BUTT_BUFFER) || 10,
  buttAI: 1,
  // WARNING
  // IF YOU CHANGE THE FOLLOWING THE POLICE CAN MAYBE TAKE YOU TO JAIL
  breakTheFirstRuleOfButtbotics: false,
  shutupUntil: 0,
  // default 30 minutes, in millseconds
  shutupDelay: Number(process.env.BOT_SHUTUP_DELAY) || 1800000,
};

export default config;
