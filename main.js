import './style.css'

import init from './slider'

init('.app', {
  images: [
    'https://st2.depositphotos.com/3837271/8403/i/600/depositphotos_84032988-stock-photo-lead-by-example-sign.jpg',
    'https://media.gettyimages.com/photos/career-path-job-search-picture-id103498240?s=612x612',
    'https://media.istockphoto.com/id/1199738695/photo/choice-between-keep-working-and-retirement.jpg?s=612x612&w=0&k=20&c=q9Va6K7F3QbEQfbnwegV_y0rV01yDiC6pddfImf6pZI='
  ],
  nav: true,
  dots: true,
  loop: true,
  animation: 500,
  auto: 2000
})


