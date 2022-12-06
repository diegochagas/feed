export const posts = [
  {
    id: '1',
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @Rocketseat'
    },
    content: [
      { id: 'dja', type: 'paragraph', content: 'Fala galeraa 👋' },
      { id: 'kal', type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { id: 'dj1', type: 'link', content: 'jane.design/doctorcare' },
      {
        id: 'pva', type: 'hashtag', content: [
          { id: 'dj1', content: 'novoprojeto' },
          { id: 'cpa', content: 'nlw' },
          { id: 'vll', content: 'rocketseat' }
        ]
      }
    ],
    publishedAt:  new Date('2022-12-03 20:00:00')
  },
  {
    id: '2',
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educator @Rocketseat'
    },
    content: [
      { id: 'cai', type: 'paragraph', content: 'Fala galeraa 👋' },
      { id: 'dap', type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { id: 'cap', type: 'link', content: 'jane.design/doctorcare' },
      {
        id: 'pva', type: 'hashtag', content: [
          { id: 'dj1', content: 'novoprojeto' },
          { id: 'cpa', content: 'nlw' },
          { id: 'vll', content: 'rocketseat' }
        ]
      }
    ],
    publishedAt:  new Date('2022-12-06 20:00:00')
  }
]