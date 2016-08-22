'use strict';

import React, { Component } from 'react';

require('styles//Test.scss');

class TestComponent extends Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.handleRefreshClick = this.handleRefreshClick.bind(this)
    }
    componentDidMount() {
        const {  selectedReddit, fetchPostsIfNeeded } = this.props
        fetchPostsIfNeeded(selectedReddit)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.selectedReddit !== this.props.selectedReddit) {
            const { fetchPostsIfNeeded, selectedReddit } = nextProps
            fetchPostsIfNeeded(selectedReddit)
        }
    }
    handleChange(nextReddit) {
        this.props.selectReddit(nextReddit)
    }
    handleRefreshClick(e) {
        e.preventDefault()

        const {selectedReddit, invalidateReddit, fetchPostsIfNeeded } = this.props
        invalidateReddit(selectedReddit)
        fetchPostsIfNeeded(selectedReddit)
    }
    renderPosts(post, i) {
        return (<li key={i}>{post.title}</li>)
    }
    render() {
        const { posts, isFetching, lastUpdated } = this.props
        const isEmpty = posts.length === 0
        return (
            <div>
                <p>
                    {lastUpdated &&
                        <span>
                          Last updated at {new Date(lastUpdated).toLocaleTimeString()}.
                          {' '}
                        </span>
                    }
                    {!isFetching &&
                        <a href="#"
                           onClick={this.handleRefreshClick}>
                            Refresh
                        </a>
                    }
                </p>
                {isEmpty
                    ? (isFetching ? <h2>Loading...</h2> : <h2>Empty.</h2>)
                    : <div style={{ opacity: isFetching ? 0.5 : 1 }}>
                        <ul>
                            {posts.map(this.renderPosts)}
                        </ul>
                    </div>
                }
            </div>
        )
    }
}

TestComponent.displayName = 'TestComponent';

// Uncomment properties you need
// TestComponent.propTypes = {};
// TestComponent.defaultProps = {};

export default TestComponent;
