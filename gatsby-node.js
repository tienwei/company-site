const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require(`path`);

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions;
    if (node.internal.type === `MarkdownRemark`) {
        const slug = createFilePath({ node, getNode, basePath: `basepages` });
        createNodeField({
            node,
            name: `slug`,
            value: slug
        });
    }
};

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;

    return graphql(`
        {
            basepages: allMarkdownRemark(
                filter: { fileAbsolutePath: { regex: "/basepages/" } }
            ) {
                edges {
                    node {
                        frontmatter {
                            template
                        }
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `).then(result => {
        result.data.basepages.edges.forEach(({ node }) => {
            let template =
                node.frontmatter.template === undefined
                    ? "basepage"
                    : node.frontmatter.template;
            createPage({
                path: node.fields.slug,
                component: path.resolve("./src/templates/" + template + ".js"),
                context: {
                    slug: node.fields.slug
                }
            });
        });
    });
};
