export default class Metadata {
  static REMOTE_URL_BASE =
    "https://raw.githubusercontent.com" +
    "/nuuuwan/word_sound_picture/refs/heads/main/";

  constructor({ enWord, taWord, soundPath, picturePath }) {
    this.enWord = enWord;
    this.taWord = taWord;
    this.soundPath = soundPath;
    this.picturePath = picturePath;
  }

  static fromData(data) {
    return new Metadata({
      enWord: data.en_word,
      taWord: data.ta_word,
      soundPath: Metadata.REMOTE_URL_BASE + data.sound_path,
      picturePath: Metadata.REMOTE_URL_BASE + data.picture_path,
    });
  }

  static async listAll() {
    const urlAggregate = Metadata.REMOTE_URL_BASE + "data/wsp/aggregate.json";
    const response = await fetch(urlAggregate);
    const data = await response.json();
    const metadataList = data.map((item) => Metadata.fromData(item));
    console.debug(`Loaded ${metadataList.length} items.`);
    return metadataList;
  }

  static async idx() {
    const all = await Metadata.listAll();
    const index = {};
    all.forEach((m) => {
      index[m.taWord] = m;
    });
    return index;
  }

  static async fromRandom() {
    const all = await Metadata.listAll();
    const index = Math.floor(Math.random() * all.length);
    return all[index];
  }

  static async fromWord(taWord) {
    const idx = await Metadata.idx();
    return idx[taWord] || null;
  }
}
