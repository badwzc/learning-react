require('normalize.css/normalize.css');
require('styles/Main.scss');

import React from 'react';

//千牛头部
//千牛页脚
import QnFooter from './FooterComponent';


class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const {dispatch, selectCampaign} = this.props
        // dispatch(fetchPostsIfNeeded(selectCampaign))
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.selectCampaign !== this.props.selectCampaign) {
            const { dispatch, selectCampaign } = nextProps
            // dispatch(fetchPostsIfNeeded(selectCampaign))
        }
    }

    render() {
        return (
            <section className="container">
                {React.cloneElement(this.props.children, this.props)}
                <QnFooter />
            </section>
        );
    }
}


Main.defaultProps = {
};

export default Main;
