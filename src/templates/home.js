import React from 'react';
import _ from 'lodash';

import {Layout} from '../components/index';
import {htmlToReact, getPages, safePrefix, Link, markdownify} from '../utils';

export default class Home extends React.Component {
    render() {
        const claim = _.get(this.props, 'pageContext.frontmatter.header')
        const subtitle = _.get(this.props, 'pageContext.html')
        const headerTitleComponent = claim ? <h1>{htmlToReact(claim.replace(/\n/g, '<br />'))}</h1> : null
        const headerSubtitleComponent = subtitle ? htmlToReact(subtitle) : null

        return (
            <Layout {...this.props}>
                <header>
                    { headerTitleComponent }
                    { headerSubtitleComponent }
                </header>
                <section className="tiles">
                    {_.map(_.orderBy(getPages(this.props.pageContext.pages, '/posts'), 'frontmatter.date', 'desc'), (post, post_idx) => (
                        <article key={post_idx} className={_.get(post, 'frontmatter.home_style')}>
                            <span className="image">
                                <img src={safePrefix(_.get(post, 'frontmatter.home_img'))} alt="" />
                            </span>
                            <Link to={safePrefix(_.get(post, 'url'))}>
                                <h2>{_.get(post, 'frontmatter.title')}</h2>
                                <div className="content">
                                    {markdownify(_.get(post, 'frontmatter.excerpt'))}
                                </div>
                            </Link>
                        </article>
                    ))}
                </section>
            </Layout>
        );
    }
}
