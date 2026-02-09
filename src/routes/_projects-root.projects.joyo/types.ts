export type CharacterData = {
  joyo_kanji: string;
  yomi?: {
    on_yomi?: string[];
    kun_yomi?: string[];
  };
  raw_info?: string;
};
