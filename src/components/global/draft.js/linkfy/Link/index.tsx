import React, { Component } from 'react';
import clsx from 'clsx';
import linkifyIt from 'linkify-it';
import tlds from 'tlds';

const linkify = linkifyIt();
linkify.tlds(tlds);

// The component we render when we encounter a hyperlink in the text
export default class Link extends Component {
    render() {
        const {
            decoratedText = '',
            theme = {},
            rel = 'noreferrer noopener',
            className,
            component,
            dir, // eslint-disable-line no-unused-vars
            entityKey, // eslint-disable-line no-unused-vars
            getEditorState, // eslint-disable-line no-unused-vars
            offsetKey, // eslint-disable-line no-unused-vars
            setEditorState, // eslint-disable-line no-unused-vars
            contentState, // eslint-disable-line no-unused-vars
            blockKey,
            ...otherProps
        }: any = this.props;

        const combinedClassName = clsx(theme.link, className);
        const links = linkify.match(decoratedText);
        const href = links && links[0] ? links[0].url : '';

        const props = {
            ...otherProps,
            href,
            target: '_blank',
            rel,
            className: combinedClassName,
        };

        return component ? React.createElement(component, props) : <a {...props} />; // eslint-disable-line jsx-a11y/anchor-has-content
    }
}
