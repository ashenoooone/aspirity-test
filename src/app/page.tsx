import { Page } from '@/shared/ui/page';
import React from 'react';
import { Box } from '@/shared/ui/box';
import { Typography } from '@/shared/ui/typography';
import { Dot } from '@/shared/assets/dot';
import Link from 'next/link';

export default function Home() {
  return (
    <Page className="">
      <Box className={'p-[30px]'}>
        <Typography variant={'h4'}>
          Привет 👋 Меня зовут Роман, вот моя реализация
          тестового задания!
        </Typography>
        <div className={'flex flex-col gap-2 mt-3'}>
          <Link href={'profile/1'}>Профиль 1</Link>
          <Link href={'profile/2'}>Профиль 2</Link>
          <Link href={'profile/3'}>Профиль 3</Link>
        </div>
      </Box>
      <Box className={'p-[30px]'}>
        <Typography variant={'h5'}>
          Что реализовано?
        </Typography>
        <div className={'mt-4'}>
          <div className={'flex items-center gap-2'}>
            <Dot />{' '}
            <Typography variant={'h6'}>
              Вкладка "ОСНОВНАЯ ИНФОРМАЦИЯ" профиля
            </Typography>
          </div>
          <div className={'pl-10 flex flex-col gap-2'}>
            <div className={'mt-2 flex items-center gap-2'}>
              <Dot className={'flex-shrink-0 text-green'} />{' '}
              <Typography tag="span" variant={'h6'}>
                😎 Страница сделана как в макете
              </Typography>
            </div>
            <div className={'mt-2 flex items-center gap-2'}>
              <Dot className={'flex-shrink-0 text-green'} />{' '}
              <Typography tag="span" variant={'h6'}>
                📑 Все формы сделаны (react-hook-form),
                сделаны под них модалки
              </Typography>
            </div>
            <div className={'mt-2 flex items-center gap-2'}>
              <Dot className={'flex-shrink-0 text-green'} />{' '}
              <Typography tag="span" variant={'h6'}>
                🌐 Подгрузка стран через открытое API
                сделано, подставляется в селект через
                zustand-стор. (в идеале было сделать
                асинхронную подгрузку при открытии селекта +
                виртуализацию для селекта, но не успел)
              </Typography>
            </div>
            <div className={'mt-2 flex items-center gap-2'}>
              <Dot className={'flex-shrink-0 text-green'} />{' '}
              <Typography tag="span" variant={'h6'}>
                📊 Элементы, которые зависят от значений
                (цвет % загрузки пользователя меняется в
                зависимости от процента)
              </Typography>
            </div>
            <div className={'mt-2 flex items-center gap-2'}>
              <Dot className={'flex-shrink-0 text-green'} />{' '}
              <Typography tag="span" variant={'h6'}>
                📱 Адаптив
              </Typography>
            </div>
            <div className={'mt-2 flex items-center gap-2'}>
              <Dot
                className={'flex-shrink-0 text-yellow'}
              />{' '}
              <Typography tag="span" variant={'h6'}>
                🌍 Не сделал подгрузку городов по странам,
                не дождался доступа к API (открытого, без
                ключа, не нашел)
              </Typography>
            </div>
            <div className={'mt-2 flex items-center gap-2'}>
              <Dot
                className={'flex-shrink-0 text-yellow'}
              />{' '}
              <Typography tag="span" variant={'h6'}>
                📝 Не сделал реакт-маски для инпутов
              </Typography>
            </div>
          </div>
        </div>
        <div className={'mt-4'}>
          <div className={'flex items-center gap-2'}>
            <Dot />
            <Typography variant={'h6'}>
              Вкладка "ОТПУСКА" профиля
            </Typography>
          </div>
          <div className={'pl-10 flex flex-col gap-2'}>
            <div className={'mt-2 flex items-center gap-2'}>
              <Dot className={'flex-shrink-0 text-green'} />{' '}
              <Typography tag="span" variant={'h6'}>
                😎 Страница сделана как в макете (почти)
              </Typography>
            </div>
            <div className={'mt-2 flex items-center gap-2'}>
              <Dot className={'flex-shrink-0 text-green'} />{' '}
              <Typography tag="span" variant={'h6'}>
                📊 Сделал отображение информации с бекенда в
                виде графика
              </Typography>
            </div>
            <div className={'mt-2 flex items-center gap-2'}>
              <Dot className={'flex-shrink-0 text-green'} />{' '}
              <Typography tag="span" variant={'h6'}>
                📋 Таблица сделана через колонки, как
                указано в макете
              </Typography>
            </div>
            <div className={'mt-2 flex items-center gap-2'}>
              <Dot className={'flex-shrink-0 text-green'} />{' '}
              <Typography tag="span" variant={'h6'}>
                📈 В таблице показываются первые 3 строки с
                бека, при открытии модалки показываются все,
                что пришло с бека (в идеале было сделать,
                что при открытии модалки идет запрос на
                получение всех отпусков юзера, но было мало
                времени)
              </Typography>
            </div>
            <div className={'mt-2 flex items-center gap-2'}>
              <Dot
                className={'flex-shrink-0 text-yellow'}
              />{' '}
              <Typography tag="span" variant={'h6'}>
                🎨 Не очень красиво сделал ховер эффекты в
                статистике
              </Typography>
            </div>
          </div>
        </div>
        <div className={'mt-4'}>
          <div className={'flex items-center gap-2'}>
            <Dot />
            <Typography variant={'h6'}>
              Вкладка "ОТПУСКА" профиля
            </Typography>
          </div>
          <div className={'pl-10 flex flex-col gap-2'}>
            <div className={'mt-2 flex items-center gap-2'}>
              <Dot className={'flex-shrink-0 text-red'} />{' '}
              <Typography tag="span" variant={'h6'}>
                😖 Не сделал
              </Typography>
            </div>
          </div>
        </div>
        <div className={'mt-4'}>
          <div className={'flex items-center gap-2'}>
            <Dot />
            <Typography variant={'h6'}>Общее</Typography>
          </div>
          <div className={'pl-10 flex flex-col gap-2'}>
            <div className={'mt-2 flex items-center gap-2'}>
              <Dot className={'flex-shrink-0 text-green'} />{' '}
              <Typography tag="span" variant={'h6'}>
                Реализованы следующие компоненты: avatar,
                avatar-group, box, button, input, modal,
                page, portal, select (единственный
                компонент, при создании которого
                использовался headless компонент), table,
                tabs, tooltip, typography
              </Typography>
            </div>
            <div className={'mt-2 flex items-center gap-2'}>
              <Dot className={'flex-shrink-0 text-green'} />{' '}
              <Typography tag="span" variant={'h6'}>
                Приложение сделано по архитектуре FSD
              </Typography>
            </div>
          </div>
        </div>
      </Box>
    </Page>
  );
}
