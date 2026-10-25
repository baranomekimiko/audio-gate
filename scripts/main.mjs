//#region patch
const proto = foundry.audio.Sound.prototype;
const load = proto.load;

proto.load = function (options) {
  const ext = this.src.split(/[?#]/)[0].split(".").pop().toLowerCase();
  const skip = !game.user.isGM && [...game.settings.get("audio-gate", "types")].includes(ext);
  return skip ? Promise.resolve(this) : load.call(this, options);
};
//#endregion

//#region settings
Hooks.once("init", () => {
  const { SetField, StringField } = foundry.data.fields;
  game.settings.register("audio-gate", "types", {
    name: "Audio types blocked on player clients",
    hint: "Players never download these file types. Leave empty to block nothing. GM clients are unaffected.",
    scope: "world",
    config: true,
    type: new SetField(new StringField({
      choices: {
        aac: "AAC (.aac)",
        flac: "FLAC (.flac)",
        m4a: "M4A (.m4a)",
        mid: "MIDI (.mid)",
        mp3: "MP3 (.mp3)",
        ogg: "OGG (.ogg)",
        opus: "Opus (.opus)",
        wav: "WAV (.wav)",
        webm: "WebM (.webm)"
      }
    })),
    default: ["ogg"]
  });
});
//#endregion

//#region volume
Hooks.on("preUpdatePlaylistSound", (sound, changes, options) => {
  if (Object.keys(changes).every(key => key === "_id" || key === "volume")) options.render = false;
});
//#endregion
