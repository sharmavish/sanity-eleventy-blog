export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '5e1473d9508d5255b7eeac90',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-q5g5ud4y',
                  apiId: 'f4843055-2b9a-40d2-ac37-613aa56276d7'
                },
                {
                  buildHookId: '5e1473d974ead8a5550ea1b9',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-32ytcbda',
                  apiId: '578a7ebc-da00-4e32-a071-249187f995b4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sharmavish/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-32ytcbda.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
