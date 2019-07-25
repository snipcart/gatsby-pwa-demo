import React from "react"
import { rhythm } from "../utils/typography"

class Center extends React.Component {
    render() {
        const { children, style, className } = this.props
        return (
            <div className={className} style={{
                ...style,
                margin: `0 auto`,
                width: rhythm(34),
                maxWidth: `100%`,
                boxSizing: `border-box`,
                padding: `0 20px`,
            }}>
                {children}
            </div>
        )
    }
}

export default Center