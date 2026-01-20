import { Box } from "@mui/material";

// Consonant color mapping (organized by place of articulation)
const CONSONANT_COLORS = {
  // Velar (க-வரிசை) - Red family
  க: "#e74c3c", // red
  ங: "#c0392b", // dark red

  // Palatal (ச-வரிசை) - Orange family
  ச: "#e67e22", // orange
  ஞ: "#d35400", // dark orange

  // Retroflex (ட-வரிசை) - Yellow family
  ட: "#f39c12", // yellow-orange
  ண: "#f1c40f", // yellow

  // Dental (த-வரிசை) - Green family
  த: "#27ae60", // green
  ந: "#16a085", // teal-green

  // Labial (ப-வரிசை) - Blue family
  ப: "#3498db", // blue
  ம: "#2980b9", // dark blue

  // Alveolar (ற-வரிசை) - Purple family
  ற: "#9b59b6", // purple
  ன: "#8e44ad", // dark purple

  // Approximants (இடையினம்) - Various colors
  ய: "#1abc9c", // turquoise
  ர: "#e91e63", // pink
  ல: "#ff5722", // deep orange
  வ: "#673ab7", // deep purple
  ழ: "#795548", // brown
  ள: "#607d8b", // blue grey
};

// Tamil vowels and signs
const VOWELS = ["அ", "ஆ", "இ", "ஈ", "உ", "ஊ", "எ", "ஏ", "ஐ", "ஒ", "ஓ", "ஔ"];
const VOWEL_SIGNS = [
  "ா",
  "ி",
  "ீ",
  "ு",
  "ூ",
  "ெ",
  "ே",
  "ை",
  "ொ",
  "ோ",
  "ௌ",
  "்", // pulli/virama
  "ஂ", // anusvara
  "ஃ", // aytham
];

// Split Tamil text into syllables
function splitIntoSyllables(text) {
  if (!text) return [];

  const syllables = [];
  let currentSyllable = "";

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const nextChar = text[i + 1];

    currentSyllable += char;

    // Check if current or next character is a vowel sign
    const isVowelSign = VOWEL_SIGNS.includes(char);
    const isNextVowelSign = nextChar && VOWEL_SIGNS.includes(nextChar);

    // Split syllable if:
    // - current char is a vowel sign (just added it to the consonant)
    // - current char is a consonant and next is not a vowel sign
    // - current char is a standalone vowel
    // - it's the last character
    if (
      isVowelSign ||
      (!isNextVowelSign && CONSONANT_COLORS[char]) ||
      VOWELS.includes(char) ||
      i === text.length - 1
    ) {
      syllables.push(currentSyllable);
      currentSyllable = "";
    }
  }

  return syllables;
}

// Get the base consonant from a syllable (first consonant in the syllable)
function getBaseConsonant(syllable) {
  for (let i = 0; i < syllable.length; i++) {
    const char = syllable[i];
    if (CONSONANT_COLORS[char]) {
      return char;
    }
  }
  return null;
}

export default function TamilTextView({ text, sx = {} }) {
  const syllables = splitIntoSyllables(text);

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 0,
        justifyContent: "center",
        alignItems: "center",
        ...sx,
      }}
    >
      {syllables.map((syllable, index) => {
        const baseConsonant = getBaseConsonant(syllable);
        const color = baseConsonant
          ? CONSONANT_COLORS[baseConsonant]
          : "#000000";

        return (
          <span key={index} style={{ color, fontWeight: "600" }}>
            {syllable}
          </span>
        );
      })}
    </Box>
  );
}
