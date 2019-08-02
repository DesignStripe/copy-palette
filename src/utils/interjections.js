export const interjections = [
  "Aha",
  "Boo-yah",
  "Ho-ho",
  "Hurrah ",
  "Olé",
  "Rah",
  "Ta-da"
];

export function getRandomInterjection() {
  return interjections[Math.floor(Math.random() * interjections.length)];
}
