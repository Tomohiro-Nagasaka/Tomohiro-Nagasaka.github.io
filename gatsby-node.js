const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const _ = require("lodash")
//const { MyReplace } = require("./translate")
//const translate = require(`./translate`)

const TagDict = {
  "Chinese": "中文",
  "Japanese":  "日本語",
  "Reinforcement Learning":  "强化学习",
  "Sound Processing":  "音声処理",
  "Text Analysis":  "文章解析",
  "":  "",
}
const MyReplace = ( tag ) => {
  console.log(tag);
  var newtag = TagDict[tag]
  if(newtag !== undefined)
      return newtag
  return tag;
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    let { tags = '' } = node.frontmatter;
    let { draft = '' } = node.frontmatter;
    let { published = '' } = node.frontmatter;
    //console.log("XXXX");
    if (published === null || published === '') {
      if(draft === false || draft === null || draft === '')
      {
        node.frontmatter.published = true;
      }
    }


    if (tags === null || tags === '') {
      tags = [];
    }
    let filepath = createFilePath({ node, getNode, basePath: `contents` });
    filepath = filepath.replace(/\\/g, '/')
    filepath = filepath.replace(/_/g, '/')
    let temp = filepath.split('/');
    for (let index = 3; index < temp.length; index++) {
      let tag = temp[index - 2];
      if(tag !== "" && tag !== null && tag !== undefined)
      {
        tags.unshift(tag)
      }      
    }

    for (let index = 0; index < tags.length; index++) {
      tags[index] = MyReplace(tags[index])
    }
    tags = [...new Set(tags)];
    
    node.frontmatter.tags = tags;
    console.log(filepath);
    console.log(temp);
    console.log(tags);

    

    const slug = filepath;
    //console.log(slug);

    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              tags
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(result => {

        const posts = result.data.allMarkdownRemark.edges
        posts.forEach(({ node }) => {
          createPage({
            path: node.fields.slug,
            component: path.resolve(`./src/templates/blog-post.js`),
            context: {
              // Data passed to context is available
              // in page queries as GraphQL variables.
              slug: node.fields.slug,
            },
          })
        })

        // Tag pages:
        let tags = []
        // Iterate through each post, putting all found tags into `tags`
        _.each(posts, edge => {
          if (_.get(edge, "node.frontmatter.tags")) {
            tags = tags.concat(edge.node.frontmatter.tags)
          }
        })

        // Eliminate duplicate tags
        tags = _.uniq(tags)

        // Make tag pages
        tags.forEach(tag => {
          createPage({
            // path: `/tags/${_.kebabCase(tag)}/`,
            path: `/tags/${tag}/`,
            component: path.resolve("src/templates/tag.js"),
            context: {
              tag,
            },
          })
        })

        const postsPerPage = 3
        const numPages = Math.ceil(posts.length / postsPerPage)

        Array.from({ length: numPages }).forEach((_, i) => {
          createPage({
            path: i === 0 ? `/` : `/${i+1}`,
            component: path.resolve("./src/templates/post-list.js"),
            context: {
              limit: postsPerPage,
              skip: i*postsPerPage, 
              numPages,
              currentPage: i+1
            }
          })
        })
    })
}
