import { orderBy, findIndex, get } from "lodash";

const ordered = pages => orderBy(pages, 'frontmatter.date', 'desc').filter(({ relativePath }) => relativePath.indexOf('index.md') < 0)
const position = (pages, current) => findIndex(pages, { url: current.url })

export const nextPage = context => {
    const orderedPages = ordered(get(context, 'pages', []))
    const pagePosition = position(orderedPages, context)

    return pagePosition > -1 ? get(orderedPages, pagePosition + 1) : undefined
}

export const previousPage = context => {
    const orderedPages = ordered(get(context, 'pages', []))
    const pagePosition = position(orderedPages, context)

    return pagePosition > -1 ? get(orderedPages, pagePosition - 1) : undefined
}
