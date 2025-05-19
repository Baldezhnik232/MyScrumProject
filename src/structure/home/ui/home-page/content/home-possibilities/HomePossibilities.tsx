import React from 'react';
import { Box, Typography } from '@mui/material';
import { HomeCards, HomePossibilitiesCards } from '../home-possibilities/home-cards/HomeCards';

export const HomePossibilities: React.FC = () => {
  const data: HomePossibilitiesCards[] = [
    {
      iconColor: '#FFC65D',
      iconImages: [
        {
          src: 'images/VectorDutt.svg',
          sx: { width: '0.2rem', height: '0.2rem', pt: '3.44rem', pl: '0.01rem' },
        },
        {
          src: 'images/VectorMan.svg',
          sx: { width: '3.66rem', height: '3.63rem' },
        },
        {
          src: 'images/Vector.svg',
          sx: {
            width: '1.3rem',
            height: '1.3rem',
            p: 0,
            position: { xs: 'absolute', top: 808, left: 125 },
          },
        },
        {
          src: 'images/VectorDialPlate.svg',
          sx: {
            width: '0.38rem',
            height: '0.38rem',
            position: { xs: 'absolute', top: 816, left: 131 },
          },
        },
        {
          src: 'images/VectorReverse.svg',
          sx: {
            width: '1.3rem',
            height: '1.3rem',
            position: { xs: 'absolute', transform: 'rotate(-1deg)', top: 814, left: 120 },
          },
        },
        {
          src: 'images/VectorDutt.svg',
          sx: { width: '0.2rem', height: '0.2rem', pt: '3.44rem', pr: '0.2rem' },
        },
      ],
      title: 'Распределяй работу',
      subtitile: 'Планирование смен',
      items: [
        'Настраиваемые шаблоны смен',
        'Обмен сменами между сотрудниками',
        'Праздничные и особые дни',
        'Свободные смены',
        'Соблюдение трудового законодательства',
        'Синхронизация с календарем',
      ],
      boxSx: {
        height: '40rem',
        mb: '1rem',
      },
    },
    {
      iconColor: '#9033F9',
      iconImages: [
        {
          src: 'images/VectorGear.svg',
          sx: { position: 'absolute', width: '2.3rem', height: '2.3rem', top: 1440 },
        },
        {
          src: 'images/VectorDialPlateHand.svg',
          sx: {
            position: { xs: 'absolute', width: '0.7rem', height: '0.6rem', top: 1452, left: 117 },
          },
        },
        {
          src: 'images/VectorRound.svg',
          sx: {
            position: { xs: 'absolute', width: '1.49rem', height: '1.5rem', top: 1447, left: 109 },
          },
        },
        {
          src: 'images/VectorHand.svg',
          sx: { width: '3.1rem', height: '1rem', pt: '2.7rem', pl: '0.3rem' },
        },
      ],
      title: 'Управляй и контролируй',
      subtitile: 'Контроль сотрудников',
      items: [
        'Назначение задач',
        'Создание контрольных списков',
        'Отслеживание опозданий',
        'Отчеты об отработанных часах, зарплатах сотрудников и отпускным/больничным дням',
      ],
      boxSx: {
        height: '37rem',
        mb: '1rem',
      },
    },
    {
      iconColor: '#FF5966',
      iconImages: [
        {
          src: 'images/VectorMan.svg',
        },
      ],
      title: 'Масштабируй',
      subtitile: 'Интеграции и неограниченный доступ',
      items: [
        'Возможность интеграции',
        'Доступ 24/7 с любого устройства с выходом в Интернет',
        'Система уведомлений        ',
        'Универсальность',
      ],
      boxSx: {
        height: '34rem',
        mb: '1rem',
      },
    },
    {
      iconColor: '#29AAE3',
      iconImages: [
        {
          src: 'images/VectorMan.svg',
        },
      ],
      title: 'Планируй и составляй прогнозы',
      subtitile: 'Оценки и прогнозы',
      items: [
        'Планирование перерывов',
        'Планирование отпусков',
        'Безопасное хранение документов   ',
      ],
      boxSx: {
        height: '34rem',
        mb: '3rem',
      },
    },
  ];

  return (
    <Box sx={{ minWidth: { xs: '2.25rem' }, minHeight: { xs: '115.5rem' } }}>
      <Typography
        variant='h5'
        sx={{
          fontWeight: '400',
          fontSize: 32,
          color: `#434449 `,
          mt: { xs: '2.2rem' },
          ml: { xs: '4.5rem' },
          mb: { xs: '2rem' },
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
  );
};
