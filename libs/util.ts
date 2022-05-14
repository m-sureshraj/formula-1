export const FROM_YEAR = 2004;

export const TO_YEAR = new Date().getFullYear();

export function getSeasonsList(): number[] {
  const duration = TO_YEAR - FROM_YEAR;

  return Array.from({ length: duration }, (_, index) => TO_YEAR - index);
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);

  const day = date.getDate().toString().padStart(2, '0');
  const year = date.getFullYear();
  const month = date.toLocaleString('default', { month: 'long' });

  return `${day}, ${month} ${year}`;
}
