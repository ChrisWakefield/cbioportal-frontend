import * as React from 'react';

import {ArticleAbstract} from "../../model/OncoKb";
import styles from './listGroupItem.module.scss';

export default class ArticleAbstractItem extends React.Component<ArticleAbstract> {
    render() {
        let content = (<b>{this.props.abstract}</b>);
        if (this.props.link) {
            content = (
                <a href={this.props.link} target="_blank">{content}</a>
            );
        }
        return (
            <li key={`abstract_${this.props.abstract}`} className={styles["list-group-item"]}>
                <span className={styles["list-group-item-title"]}>{content}</span>
            </li>
        );
    }
}
