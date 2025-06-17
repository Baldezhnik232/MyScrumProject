import React from 'react';
import { Box, Typography } from '@mui/material';
import { HomeCards, HomePossibilitiesCards } from './home-cards/HomeCards';
import { HomeBlueBlock } from '../home-blue-block/HomeBlueBlock';
import { HomePurpleBlock } from '../home-purple-block/HomePurpleBlock';
import { HomeRedBlock } from '../home-red-block/HomeRedBlock';
import { HomeVideo } from '../home-video/HomeVideo';


export const HomePossibilities: React.FC = () => {
  const data: HomePossibilitiesCards[] = [
    {
      index: 1,
      iconColor: '#FFC65D',
      iconImages: [
        {
          src: 'images/possibilities/VectorDot.svg',
          sx: {
            width: '0.2rem',
            height: '0.2rem',
            ml: { xs: '0.5rem' },
            position: 'absolute',
            mt: { xs: '3.95rem ' },
          },
        },
        {
          src: 'images/possibilities/VectorMan.svg',
          sx: { width: '3.66rem', height: '3.63rem', ml: { xs: '0.7rem' }, mt: { xs: '0.5rem' } },
        },
        {
          src: 'images/possibilities/Vector.svg',
          sx: {
            width: '1.3rem',
            height: '1.3rem',
            mt: { xs: '-1.85rem' },
            ml: { xs: '2.85rem' },
          },
        },
        {
          src: 'images/possibilities/VectorDialPlate.svg',
          sx: {
            width: '0.38rem',
            height: '0.38rem',
            mt: { xs: '-0.8rem' },
            ml: { xs: '3.25rem' },
          },
        },
        {
          src: 'images/possibilities/VectorReverse.svg',
          sx: {
            width: '1.3rem',
            height: '1.3rem',
            mt: { xs: '-0.57rem' },
            ml: { xs: '2.53rem' },
          },
        },
        {
          src: 'images/possibilities/VectorDot.svg',
          sx: { width: '0.2rem', height: '0.2rem', ml: { xs: '4.35rem' }, mt: { xs: '0.06rem ' } },
        },
      ],
      title: 'Распределяй работу',
      titleSX: {
        width: { xs: '1rem' },
      },
      subtitile: 'Планирование смен',
      items: [
        { text: 'Настраиваемые шаблоны смен' },
        { text: 'Обмен сменами между сотрудниками', sx: { width: { xs: '15rem', sm: '10rem' } } },
        { text: 'Праздничные и особые дни' },
        { text: 'Свободные смены' },
        {
          text: 'Соблюдение трудового законодательства',
          sx: { width: { xs: '13rem', sm: '10rem' } },
        },
        { text: 'Синхронизация с календарем' },
      ],
      boxSx: {
        minHeight: { xs: '41rem', sm: '49rem' },
        mb: { xs: '1rem' },
        width: { sm: '14rem' },
      },
    },
    {
      index: 2,
      iconColor: '#9033F9',
      iconImages: [
        {
          src: 'images/possibilities/VectorDialPlateHand.svg',
          sx: {
            position: 'absolute',
            width: '0.57rem',
            height: '0.52rem',
            mt: { xs: '1.2rem' },
            ml: { xs: '2.3rem' },
          },
        },
        {
          src: 'images/possibilities/VectorGear.svg',
          sx: {
            position: 'absolute',
            width: '2.3rem',
            height: '2.3rem',
            mt: { xs: '0.4rem' },
            ml: { xs: '1.3rem' },
          },
        },
        {
          src: 'images/possibilities/VectorRound.svg',
          sx: {
            position: 'absolute',
            width: '1.49rem',
            height: '1.5rem',
            mt: { xs: '0.84rem' },
            ml: { xs: '1.75rem' },
          },
        },
        {
          src: 'images/possibilities/VectorHand.svg',
          sx: { width: '3.1rem', height: '1rem', mt: { xs: '2.8rem' }, ml: { xs: '1rem' } },
        },
      ],
      title: 'Управляй и контролируй',
      titleSX: {
        width: { xs: '10rem' },
      },
      subtitile: 'Контроль сотрудников',
      items: [
        { text: 'Назначение задач' },
        { text: 'Создание контрольных списков', sx: { width: { sm: '10rem' } } },
        { text: 'Отслеживание опозданий' },
        {
          text: 'Отчеты об отработанных часах, зарплатах сотрудников и отпускным/больничным дням',
          sx: { width: { xs: '18rem', sm: '9rem' } },
        },
      ],
      boxSx: {
        minHeight: { xs: '36rem', sm: '49rem' },
        mb: '1rem',
        width: { sm: '14rem' },
      },
    },
    {
      index: 3,
      iconColor: '#FF5966',
      iconImages: [
        {
          src: 'images/possibilities/VectorCard.svg',
          sx: {
            position: 'absolute',
            width: '1.5rem',
            height: '1.2rem',
            mt: '0.8rem',
            ml: '0.8rem',
          },
        },
        {
          src: 'images/possibilities/VectorLineShort.svg',
          sx: {
            position: 'absolute',
            width: '0.8rem',
            height: '0.1rem',
            mt: '1.25rem',
            ml: '1.1rem',
          },
        },
        {
          src: 'images/possibilities/VectorLineMedium.svg',
          sx: {
            position: 'absolute',
            width: '0.5rem',
            height: '0.1rem',
            mt: '1.5rem',
            ml: '1.25rem',
          },
        },
        {
          src: 'images/possibilities/VectorLineLong.svg',
          sx: {
            position: 'absolute',
            width: '0.5rem',
            height: '0.1rem',
            mt: '1.7rem',
            ml: '1.1rem',
          },
        },
        {
          src: 'images/possibilities/VectorCardDown.svg',
          sx: {
            position: 'absolute',
            width: '1.1rem',
            height: '0.9rem',
            mt: '2.7rem',
            ml: '1.2rem',
          },
        },
        {
          src: 'images/possibilities/VectorLineMedium.svg',
          sx: {
            position: 'absolute',
            width: '0.2rem',
            height: '0.1rem',
            mt: '3.1rem',
            ml: '1.5rem',
          },
        },
        {
          src: 'images/possibilities/VectorLineMedium.svg',
          sx: {
            position: 'absolute',
            width: '0.5rem',
            height: '0.1rem',
            mt: '3.3rem',
            ml: '1.4rem',
          },
        },
        {
          src: 'images/possibilities/VectorCardDialPlate.svg',
          sx: { width: '2.5rem', height: '2.2rem', mt: '1.5rem', ml: '1.5rem' },
        },
        {
          src: 'images/possibilities/VectorClock.svg',
          sx: {
            position: 'absolute',
            width: '1rem',
            height: '0.5rem',
            mt: '2.07rem',
            ml: '2.07rem',
          },
        },
        {
          src: 'images/possibilities/VectorCardReverse.svg',
          sx: {
            position: 'absolute',
            width: '1.25rem',
            transform: 'rotate(-0.1deg)',
            height: '1.2rem',
            mt: '1.65rem',
            ml: '1.65rem',
          },
        },
        {
          src: 'images/possibilities/VectorCardDot.svg',
          sx: {
            position: 'absolute',
            width: '0.1rem',
            height: '0.25rem',
            mt: '1.8rem',
            ml: '2.4rem',
          },
        },
        {
          src: 'images/possibilities/VectorCardDot.svg',
          sx: {
            position: 'absolute',
            width: '0.12rem',
            height: '0.25rem',
            mt: '2.74rem',
            ml: '2.35rem',
          },
        },
        {
          src: 'images/possibilities/VectorCardDot.svg',
          sx: {
            position: 'absolute',
            width: '0.1rem',
            transform: 'rotate(-89deg)',
            height: '0.25rem',
            mt: '2.35rem',
            ml: '1.86rem',
          },
        },
        {
          src: 'images/possibilities/VectorCardRight.svg',
          sx: {
            position: 'absolute',
            width: '1.3rem',
            height: '1.1rem',
            mt: '1.3rem',
            ml: '2.6rem',
          },
        },
        {
          src: 'images/possibilities/VectorLineShort.svg',
          sx: { position: 'absolute', width: '0.8rem', height: '0.1rem', mt: '3rem', ml: '2.9rem' },
        },
        {
          src: 'images/possibilities/VectorLineShort.svg',
          sx: {
            position: 'absolute',
            width: '0.4rem',
            height: '0.1rem',
            mt: '3.2rem',
            ml: '3.1rem',
          },
        },
        {
          src: 'images/possibilities/VectorLineShort.svg',
          sx: {
            position: 'absolute',
            width: '0.8rem',
            height: '0.1rem',
            mt: '3.4rem',
            ml: '2.9rem',
          },
        },
        {
          src: 'images/possibilities/VectorLineMedium.svg',
          sx: {
            position: 'absolute',
            width: '0.4rem',
            height: '0.1rem',
            mt: '1.7rem',
            ml: '3.3rem',
          },
        },
        {
          src: 'images/possibilities/VectorLineMedium.svg',
          sx: {
            position: 'absolute',
            width: '0.2rem',
            height: '0.1rem',
            mt: '1.9rem',
            ml: '3.47rem',
          },
        },
      ],
      title: 'Масштабируй',
      subtitile: 'Интеграции и неограниченный доступ',
      subtitileSx: {
        width: { xs: '18rem', sm: '15rem' },
      },
      items: [
        { text: 'Возможность интеграции' },
        {
          text: 'Доступ 24/7 с любого устройства с выходом в Интернет',
          sx: { width: { xs: '15rem', sm: '10rem' } },
        },
        { text: 'Система уведомлений', sx: { width: { sm: '2rem' } } },
        { text: 'Универсальность' },
      ],
      boxSx: {
        minHeight: { xs: '36rem', sm: '49rem' },
        mb: '1rem',
        width: { sm: '14rem' },
      },
    },
    {
      index: 4,
      iconColor: '#29AAE3',
      iconImages: [
        {
          src: 'images/possibilities/VectorData.svg',
          sx: { width: '3.8rem', height: '3.2rem', mt: '1.1rem', ml: '0.5rem' },
        },
        {
          src: 'images/possibilities/VectorRoundData.svg',
          sx: {
            position: 'absolute',
            width: '0.7rem',
            height: '0.7rem',
            mt: '1.8rem',
            ml: '0.96rem',
          },
        },
        {
          src: 'images/possibilities/VectorRoundSmallData.svg',
          sx: {
            position: 'absolute',
            width: '0.4rem',
            height: '0.4rem',
            mt: '1.91rem',
            ml: '1.1rem',
          },
        },
        {
          src: 'images/possibilities/VectorClockData.svg',
          sx: {
            position: 'absolute',
            width: '0.8rem',
            height: '0.6rem',
            mt: '3.05rem',
            ml: '1.4rem',
          },
        },
        {
          src: 'images/possibilities/VectorLineData.svg',
          sx: {
            position: 'absolute',
            width: '2.5rem',
            height: '1.2rem',
            mt: '0.4rem',
            ml: '1.6rem',
          },
        },
        {
          src: 'images/possibilities/VectorArrowData.svg',
          sx: {
            position: 'absolute',
            width: '0.3rem',
            height: '0.6rem',
            mt: '3.4rem',
            ml: '3.1rem',
          },
        },
        {
          src: 'images/possibilities/VectorArrowData.svg',
          sx: {
            position: 'absolute',
            width: '0.3rem',
            height: '0.6rem',
            mt: '3.4rem',
            ml: '3.5rem',
          },
        },
        {
          src: 'images/possibilities/VectorArrowData.svg',
          sx: {
            position: 'absolute',
            width: '0.3rem',
            height: '0.6rem',
            mt: '3.4rem',
            ml: '3.86rem',
          },
        },
      ],
      title: 'Планируй и составляй прогнозы',
      titleSX: {
        width: { xs: '14rem', sm: '13rem' },
      },
      subtitile: 'Оценки и прогнозы',
      subtitileSx: {
        width: { sm: '10rem' },
      },
      items: [
        { text: 'Планирование перерывов' },
        { text: 'Планирование отпусков' },
        { text: 'Безопасное хранение документов', sx: { width: { sm: '1rem' } } },
      ],
      boxSx: {
        mb: '3rem',
        width: { sm: '14rem' },
        minHeight: { xs: '31rem', sm: '49rem' },
      },
    },
  ];

  return (
    <>
      <Box
        sx={{
          minWidth: { xs: '1.25rem', sm: '10rem' },
          minHeight: { xs: '115.5rem', sm: '62rem' },
          display: { xs: 'flex', sm: 'grid' },
          flexDirection: { xs: 'column', sm: 'row' },
          gridAutoRows: { sm: '10rem' },
          gridTemplateColumns: { sm: 'repeat(4,14rem)' },
          justifyContent: { sm: 'center' },
          gap: 1,
          transition: { sm: 'all 1.5s ease' },
        }}
      >
        <Typography
          variant='h5'
          sx={{
            fontWeight: { xs: '400', sm: '500' },
            gridColumn: { sm: '1/-1' },
            fontSize: { xs: 28, sm: 'calc(28px + 0.3vw)' },
            color: `#434449 `,
            mt: { xs: '2.2rem', sm: '5rem' },
            marginInline: { xs: '6.8rem', sm: '19rem' },
            mb: { xs: '2rem' },
            minWidth: { xs: '18rem' },
          }}
        >
          Возможности Shifton
        </Typography>
        {data.map((card, index) => (
          <HomeCards
            key={index}
            {...card}
          />
        ))}
      </Box>
      <HomeBlueBlock />
      <HomePurpleBlock />
      <HomeRedBlock />
      <HomeVideo />
    </>
  );
};
