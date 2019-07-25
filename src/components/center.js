import React from "react"
import { rhythm } from "../utils/typography"

class Center extends React.Component {
    render() {
        const { children, style, className } = this.props
        return (
            <div className={className} style={{
                ...style,
                marginLeft: `auto`,
                marginRight: `auto`,
                maxWidth: rhythm(34),
            }}>
                {children}
            </div>
        )
    }
}

export default Center