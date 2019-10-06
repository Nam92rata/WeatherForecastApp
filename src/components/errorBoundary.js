import React, { Component } from "react";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.log(error);
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return <div className="card1">Something went wrong</div>;
        }

        return this.props.children;
    }
}
export default ErrorBoundary;