import React from 'react';
import _ from 'lodash';

import {Link, safePrefix} from '../utils';

export default class Header extends React.Component {
    render() {
        const image = _.get(this.props, 'pageContext.site.data.header.logo_img_src')
        const title = _.get(this.props, 'pageContext.site.siteMetadata.title')

        const logoComponent = image ? <span className="symbol"><img src={safePrefix(image)} alt="" /></span> : null
        const titleComponent = title ? <span className="title">{_.get(this.props, 'pageContext.site.siteMetadata.title')}</span> : null

        return (
            <header id="header">
                <div className="inner">
                    <Link to={safePrefix('/')} className="logo">
                        { logoComponent }
                        { titleComponent }
                    </Link>
                </div>
            </header>
        );
    }
}
