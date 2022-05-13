export function getSeasonsList(): number[] {
  const toYear = new Date().getFullYear();
  const fromYear = 2004;
  const duration = toYear - fromYear;

  return Array.from({ length: duration }, (_, index) => toYear - index);
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);

  const day = date.getDate().toString().padStart(2, '0');
  const year = date.getFullYear();
  const month = date.toLocaleString('default', { month: 'long' });

  return `${day}, ${month} ${year}`;
}
