export function loadLists() {
    return [
      { 
        title: 'Tarefas', 
        creatable: true,
        cards: [
          {
            id: 1,
            content: 'Estudar módulo 01 de NodeJS',
            labels: ['#7159c1'],
            user: 'https://avatars1.githubusercontent.com/u/69639482?s=460&u=16ce5200e0562f44d5e8059ad80ed7d0f03fc9de&v=4'
          },
          {
            id: 2,
            content: 'Criar vídeo para o Youtube ensinando a recriar a interface do Pipefy',
            labels: ['#7159c1'],
            user: 'https://avatars1.githubusercontent.com/u/69639482?s=460&u=16ce5200e0562f44d5e8059ad80ed7d0f03fc9de&v=4'
          },
          {
            id: 3,
            content: 'Estudar módulo 03 de React Native',
            labels: ['#7159c1'],
            user: 'https://avatars1.githubusercontent.com/u/69639482?s=460&u=16ce5200e0562f44d5e8059ad80ed7d0f03fc9de&v=4'
          },
          {
            id: 4,
            content: 'Gravar Aula "NextJS: Utilizando server-side rendering com ReactJS"',
            labels: ['#54e1f7'],
            user: 'https://avatars1.githubusercontent.com/u/69639482?s=460&u=16ce5200e0562f44d5e8059ad80ed7d0f03fc9de&v=4'
          },
          {
            id: 5,
            content: 'Gravar testes e deploy ReactJS',
            labels: ['#54e1f7'],
            user: 'https://avatars1.githubusercontent.com/u/69639482?s=460&u=16ce5200e0562f44d5e8059ad80ed7d0f03fc9de&v=4'
          },
        ]
      },
      { 
        title: 'Fazendo', 
        creatable: false,
        cards: [
          {
            id: 6,
            content: 'Recriando clone do Pipefy',
            labels: [],
            user: 'https://avatars1.githubusercontent.com/u/69639482?s=460&u=16ce5200e0562f44d5e8059ad80ed7d0f03fc9de&v=4'
          }
        ]
      },
      { 
        title: 'Pausado', 
        creatable: false,
        cards: [
          {
            id: 7,
            content: 'Gravar sobre Geolocalização e mapas com React Native',
            labels: ['#7159c1'],
            user: 'https://avatars1.githubusercontent.com/u/69639482?s=460&u=16ce5200e0562f44d5e8059ad80ed7d0f03fc9de&v=4'
          },
          {
            id: 8,
            content: 'Gravar testes e deploy ReactJS',
            labels: ['#54e1f7'],
            user: 'https://avatars1.githubusercontent.com/u/69639482?s=460&u=16ce5200e0562f44d5e8059ad80ed7d0f03fc9de&v=4'
          },
          {
            id: 9,
            content: 'Ajustes na biblioteca unform',
            labels: [],
            user: 'https://avatars1.githubusercontent.com/u/69639482?s=460&u=16ce5200e0562f44d5e8059ad80ed7d0f03fc9de&v=4'
          }
        ]
      },
      { 
        title: 'Concluído', 
        creatable: false,
        done: true,
        cards: [
          {
            id: 10,
            content: 'Gravar aula sobre deploy e CI com React Native',
            labels: [],
            user: 'https://avatars1.githubusercontent.com/u/69639482?s=460&u=16ce5200e0562f44d5e8059ad80ed7d0f03fc9de&v=4'
          },
          {
            id: 12,
            content: 'Gravar testes e deploy ReactJS',
            labels: ['#54e1f7'],
            user: 'https://avatars1.githubusercontent.com/u/69639482?s=460&u=16ce5200e0562f44d5e8059ad80ed7d0f03fc9de&v=4'
          },
          {
            id: 13,
            content: 'Gravar Aula "Internacionalização de aplicações Node.js, ReactJS e React Native"',
            labels: ['#7159c1'],
            user: 'https://avatars1.githubusercontent.com/u/69639482?s=460&u=16ce5200e0562f44d5e8059ad80ed7d0f03fc9de&v=4'
          }
        ]
      },
    ];
  }