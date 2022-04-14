const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // DUPLICATE FUNCTION FROM UTILS/HELPERS.JS
  const toSlug = string =>
    string
      .replace(/[\s/]+/g, '-')
      .replace(/[^\w\d-]+/g, '')
      .replace(/--+/g, '-')
      .toLowerCase()

  const result = await graphql(`
    {
      allDatoCmsCoachCategory {
        edges {
          node {
            categoryName
            featuredCoach {
              id
            }
          }
        }
      }
      allDatoCmsSwCategory {
        edges {
          node {
            categoryName
          }
        }
      }
      allDatoCmsCoach {
        edges {
          node {
            id
            name
          }
        }
      }
      allDatoCmsTeamMember {
        edges {
          node {
            id
            name
          }
        }
      }
    }
  `)

  const { data } = result

  data.allDatoCmsCoachCategory.edges.forEach(({ node }) => {
    createPage({
      path: `/coaches/${toSlug(node.categoryName)}/`,
      component: path.resolve(`./src/templates/CoachCategoryPage.tsx`),
      context: {
        categoryName: node.categoryName,
        featuredCoachId: node.featuredCoach.id,
      },
    })
  })
  data.allDatoCmsSwCategory.edges.forEach(({ node }) => {
    createPage({
      path: `/speakers-workshops/${toSlug(node.categoryName)}/`,
      component: path.resolve(
        `./src/templates/SpeakersWorkshopsPage.tsx`
      ),
      context: {
        categoryName: node.categoryName,
      },
    })
  })
  data.allDatoCmsCoach.edges.forEach(({ node }) => {
    createPage({
      path: `/coaches/profiles/${toSlug(node.name)}/`,
      component: path.resolve(`./src/templates/CoachProfilePage.tsx`),
      context: {
        id: node.id,
      },
    })
  })
  data.allDatoCmsTeamMember.edges.forEach(({ node }) => {
    createPage({
      path: `/team/${toSlug(node.name)}/`,
      component: path.resolve(`./src/templates/CoachProfilePage.tsx`),
      context: {
        id: node.id,
      },
    })
  })
}
