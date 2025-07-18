import React from 'react';
import DeveloperDashboard from './DeveloperDashboard';

// ErrorBoundary class component
class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }
    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }
    componentDidCatch(error, errorInfo) {
        console.error("ErrorBoundary caught an error", error, errorInfo);
    }
    render() {
        if (this.state.hasError) {
            return <div style={{ color: 'red' }}>Something went wrong: {this.state.error?.message}</div>;
        }
        return this.props.children;
    }
}

function RoleDashboard(props) {
    return (
        <ErrorBoundary>
            <h1>Role Dashboard</h1>
            <DeveloperDashboard {...props} />
            {/* Other dashboard components can be added here */}
        </ErrorBoundary>
    );
}

export default RoleDashboard;