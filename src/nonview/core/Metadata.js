export default class Metadata {
  static REMOTE_URL =
    "https://raw.githubusercontent.com" +
    "/nuuuwan/word_sound_picture" +
    "/refs/heads/main/data/wsp/aggregate.json";

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
      soundPath: data.sound_path,
      picturePath: data.picture_path,
    });
  }

  static async listAll() {
    const response = await fetch(Metadata.REMOTE_URL);
    const data = await response.json();
    return data.map((item) => Metadata.fromData(item));
  }

  static async random() {
    const all = await Metadata.listAll();
    const index = Math.floor(Math.random() * all.length);
    return all[index];
  }
}
