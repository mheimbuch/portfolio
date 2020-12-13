import React from 'react';
import _ from 'lodash';

import {Layout, Next, Previous} from '../components';
import {safePrefix, htmlToReact} from '../utils';

export default class Page extends React.Component {
    render() {
        const style = {
            width: 'auto',
            margin: '0 auto',
            'max-height': '70vh'
        }

        return (
            <Layout {...this.props}>
                <h1>{_.get(this.props, 'pageContext.frontmatter.title')}</h1>
                {_.get(this.props, 'pageContext.frontmatter.img_src') && 
                    <span className="image main"><img style={style} src={safePrefix(_.get(this.props, 'pageContext.frontmatter.img_src'))} alt="" /></span>
                }
                {htmlToReact(_.get(this.props, 'pageContext.html'))}
     
                <Previous {...this.props} />
                <Next {...this.props} />
            </Layout>
        );
    }
}
