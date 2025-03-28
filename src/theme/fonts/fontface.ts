import localFont from 'next/font/local'

export const brother1816 = localFont({
  src: [
    {
      path: './Brother1816/brother1816-thin-web.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: './Brother1816/brother1816-thin_italic-web.woff2',
      weight: '100',
      style: 'italic',
    },
    {
      path: './Brother1816/brother1816-light-web.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: './Brother1816/brother1816-light_italic-web.woff2',
      weight: '200',
      style: 'italic',
    },
    {
      path: './Brother1816/brother1816-book-web.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: './Brother1816/brother1816-book_italic-web.woff2',
      weight: '300',
      style: 'italic',
    },
    {
      path: './Brother1816/brother1816-regular-web.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './Brother1816/brother1816-regular_italic-web.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: './Brother1816/brother1816-medium-web.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './Brother1816/brother1816-medium_italic-web.woff2',
      weight: '500',
      style: 'italic',
    },
    // {
    //   path: './Brother1816/brother1816-bold-web.woff2',
    //   weight: '700',
    //   style: 'normal',
    // },
    // {
    //   path: './Brother1816/brother1816-bold_italic-web.woff2',
    //   weight: '700',
    //   style: 'italic',
    // },
  ],
  display: 'swap',
  variable: '--ff-brother-1816',
})

export const bitter = localFont({
  src: [
    {
      path: './Bitter/Bitter-VariableFont_wght.woff2',
      weight: '100 900',
      style: 'normal',
    },
    {
      path: './Bitter/Bitter-Italic-VariableFont_wght.woff2',
      weight: '100 900',
      style: 'italic',
    },
  ],
  display: 'swap',
  variable: '--ff-bitter',
})
