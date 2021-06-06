import React from 'react';
import styled, { css } from 'styled-components'
import styles from './Card.module.css';
import cx from 'classnames'

class Card extends React.Component {
    handler(){
        if(this.props.dailyConfirmedCases) {
            return (
                <div style={{color:'red'}} className={styles.card1}>
                <h1>Confirmed</h1>
                <h4><span>+</span> {this.props.dailyConfirmedCases.replace(/(.)(?=(\d{3})+$)/g,'$1,')}</h4>
                <h1>{this.props.totalConfirmedCases.replace(/(.)(?=(\d{3})+$)/g,'$1,')}</h1>
                <h6>As of {this.props.date}</h6>
                </div>
            )
        } else if (this.props.dailyRecoveredCases) {
            return (
                <div className={cx(styles.card1, styles.card2)}>
                <h1>Recovered</h1>
                <h4>+ {this.props.dailyRecoveredCases.replace(/(.)(?=(\d{3})+$)/g,'$1,')}</h4>
                <h1>{this.props.totalRecoveredCases.replace(/(.)(?=(\d{3})+$)/g,'$1,')}</h1>
                <h6>As of {this.props.date}</h6>
                </div>
            )
        } else if(this.props.dailyDeceasedCases) {
            return (
                <div className={cx(styles.card1, styles.card3)}>
                <h1>Deceased</h1>
                <h4>+ {this.props.dailyDeceasedCases}</h4>
                <h1>{this.props.totalDeceasedCases}</h1>
                <h6>As of {this.props.date}</h6>
                </div>
            )
        } else {
            return (
                <div className={cx(styles.card1, styles.card4)}>
                <h1>Active</h1>
                <h1>{this.props.activeCase}</h1>
                <h6>As of {this.props.date}</h6>
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