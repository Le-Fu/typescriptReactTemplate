import * as React from 'react'
// const styles = require('./Hello.scss')
import * as styles from './Hello.scss'

export interface HelloProps {
  name: string;
}

// export const Hello = (props: HelloProps) => <h1>Hello from {props.complier} and {props.framework}</h1>
export class Hello extends React.Component<HelloProps, {}> {
  render() {
    return <h1 className={styles['font-color']}>Hello {this.props.name} </h1>
  }
}
