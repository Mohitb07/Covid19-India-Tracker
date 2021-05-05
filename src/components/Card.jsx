import React from 'react';
import styled, { css } from 'styled-components'
import styles from './Card.module.css';
import cx from 'classnames'

class Card extends React.Component {
    handler(){
        if(this.props.dailyConfirmedCases) {
            return (
                <div style={{color:'red'}} className={styles.card1}>
                <h1>Confirmed Cases</h1>
                <h4>+ {this.props.dailyConfirmedCases}</h4>
                <h1>{this.props.totalConfirmedCases}</h1>
                <span>As of {this.props.date}</span>
                </div>
            )
        } else if (this.props.dailyRecoveredCases) {
            return (
                <div className={cx(styles.card1, styles.card2)}>
                <h1>Recovered Cases</h1>
                <h4>+ {this.props.dailyRecoveredCases}</h4>
                <h1>{this.props.totalRecoveredCases}</h1>
                As of {this.props.date}
                </div>
            )
        } else {
            return (
                <div className={cx(styles.card1, styles.card3)}>
                <h1>Death Cases</h1>
                <h4>+ {this.props.dailyDeceasedCases}</h4>
                <h1>{this.props.totalDeceasedCases}</h1>
                As of {this.props.date}
                </div>
            )
        }

    }

    render(){
        return (
            <div style={{color:`${this.props.color}`,}} className={styles.card}>
                {
                    this.handler()
                }
            </div>
        )
    }
}



export default Card;