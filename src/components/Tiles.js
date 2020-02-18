import React from 'react';
import _ from 'lodash';

import {Link, safePrefix, markdownify} from '../utils';

export default class Tiles extends React.Component {
    render() {
        return (
            <section className="tiles">
                {_.map(this.props.tiles, (post, post_idx) => (
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
        );
    }
}
