import { Typography } from '@/shared/ui/typography';
import { Page } from '@/shared/ui/page';

export default function () {
  return (
    <Page className={'flex flex-col items-center'}>
      <Typography>404</Typography>
      <Typography
        variant={'h3'}
        className={'text-text-secondary'}
      >
        страница не найдена
      </Typography>
    </Page>
  );
}
