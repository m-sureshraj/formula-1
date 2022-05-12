export function getSeasonsList(): number[] {
  const toYear = new Date().getFullYear();
  const fromYear = 2004;
  const duration = toYear - fromYear;

  return Array.from({ length: duration }, (_, index) => toYear - index);
}
