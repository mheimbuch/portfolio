import React from 'react';
import { get } from 'lodash';

const getPages = context => get(context, ['pageContext', 'pages'], []).filter(page => get(page, ['frontmatter', 'template']) === 'page').map(page => ({
    title: get(page, ['frontmatter', 'title']),
    url: get(page, 'url')
}))

export default class Links extends React.Component {
    render() {
        return (
            <section>
                <h2>{get(this.props, 'pageContext.site.data.links.title')}</h2>
                <ul>
                    {getPages(this.props).map((link, link_idx) => (
                        <li key={link_idx}><a href={get(link, 'url')}>{get(link, 'title')}</a></li>
                    ))}
                </ul>
            </section>
        );
    }
}