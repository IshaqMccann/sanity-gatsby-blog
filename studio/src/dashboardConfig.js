export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5f4fadb2c059381fa677853d',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-h63tuwb5',
                  apiId: '331bfede-28ad-4b4c-9f02-683f2a51ad3b'
                },
                {
                  buildHookId: '5f4fadb33c5e291abdf477e4',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-u9e1byrc',
                  apiId: '9b088af1-444c-4e78-b236-7e116b2cb05e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/IshaqMccann/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-u9e1byrc.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
