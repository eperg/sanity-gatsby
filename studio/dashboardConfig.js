export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ecbf97fc16d84725150de8a',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-studio-zq4tfs6b',
                  apiId: 'bbef3236-cb9c-492d-ace2-35d5103ce401'
                },
                {
                  buildHookId: '5ecbf97fc94566ab245a21dd',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-web-neg5h172',
                  apiId: 'f816a623-42ad-48dd-935b-205337907265'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/eperg/sanity-gatsby',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-web-neg5h172.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
