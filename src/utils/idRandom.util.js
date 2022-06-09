export default function IdRandom(maxId) {
  const numRaddom = Math.floor(Math.random() * Math.floor(maxId));
  if (numRaddom === 0) return 1;
  return numRaddom;
}
