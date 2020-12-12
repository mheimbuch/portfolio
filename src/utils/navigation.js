import { orderBy, findIndex, get } from "lodash";

const posts = (context = []) => get(context, 'pages', []).filter(item => get(item, 'frontmatter.template') === 'post')
const ordered = data => orderBy(data, 'frontmatter.date', 'desc').filter(({ relativePath }) => relativePath.indexOf('index.md') < 0)
const position = (data, current) => findIndex(data, { url: current.url })

export const nextPage = context => {
    const orderedPosts = ordered(posts(context))
    const postPosition = position(orderedPosts, context)

    return postPosition > -1 ? get(orderedPosts, postPosition + 1) : undefined
}

export const previousPage = context => {
    const orderedPosts = ordered(posts(context))
    const postPosition = position(orderedPosts, context)

    return postPosition > -1 ? get(orderedPosts, postPosition - 1) : undefined
}
