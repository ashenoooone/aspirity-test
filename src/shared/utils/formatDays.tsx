const pluralRules = new Intl.PluralRules('ru', {
  type: 'cardinal',
});
export function formatDays(count: number): string {
  const pluralForm = pluralRules.select(count);

  switch (pluralForm) {
    case 'one':
      return `${count} день`;
    case 'few':
      return `${count} дня`;
    default:
      return `${count} дней`;
  }
}
