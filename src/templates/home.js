import React from 'react';
import _ from 'lodash';

import {Layout, Tiles} from '../components';
import {htmlToReact, getPages} from '../utils';

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
                <Tiles tiles={_.orderBy(getPages(this.props.pageContext.pages, '/illustrations'), 'frontmatter.date', 'desc').slice(0, 3)} />
                <Tiles tiles={_.orderBy(getPages(this.props.pageContext.pages, '/sketches'), 'frontmatter.date', 'desc').slice(0, 3)} />
            </Layout>
        );
    }
}
