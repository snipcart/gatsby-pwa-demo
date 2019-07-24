import React from "react"
import { rhythm } from "../utils/typography"

class Center extends React.Component {
    render() {
        const { children, style } = this.props
        return (
            <div style={{
                ...style,
                marginLeft: `auto`,
                marginRight: `auto`,
                maxWidth: rhythm(30),
                padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
            }}>
                {children}
            </div>
        )
    }
}

export default Center