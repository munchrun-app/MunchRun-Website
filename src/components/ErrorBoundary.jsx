import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      hasError: false, 
      error: null, 
      errorInfo: null,
      errorType: null
    };
  }

  static getDerivedStateFromError(error) {
    // Categorize errors to provide more specific fallback UI
    let errorType = 'general';
    
    if (error.message && error.message.includes('undefined')) {
      errorType = 'undefined';
    } else if (error.message && error.message.includes('null')) {
      errorType = 'null';
    } else if (error.message && error.message.includes('hook')) {
      errorType = 'hook';
    } else if (error.message && error.message.includes('context')) {
      errorType = 'context';
    }
    
    return { hasError: true, error, errorType };
  }

  componentDidCatch(error, errorInfo) {
    // Log the error to console or an error reporting service
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
    this.setState({ errorInfo });
    
    // You could also log to a service like Sentry in production
    // if (process.env.NODE_ENV === 'production') {
    //   logErrorToMyService(error, errorInfo);
    // }
  }

  renderErrorMessage() {
    const { errorType, error } = this.state;
    
    switch(errorType) {
      case 'hook':
        return "There was a problem with a React hook. This might be due to calling a hook outside the component hierarchy.";
      case 'context':
        return "There was a problem with the React context. Make sure all context providers are properly configured.";
      case 'undefined':
        return "Attempted to access a property or function that doesn't exist.";
      case 'null':
        return "Attempted to use a null value where an object was expected.";
      default:
        return "We're sorry, but there was an error loading this part of the page.";
    }
  }

  render() {
    if (this.state.hasError) {
      // Use custom fallback if provided
      if (this.props.fallback) {
        return this.props.fallback;
      }
      
      // Otherwise use our default error UI
      return (
        <div className="error-boundary p-6 bg-error/10 rounded-lg shadow-md text-center m-4">
          <h2 className="text-2xl font-bold text-error mb-4">Something went wrong</h2>
          <p className="mb-4">{this.renderErrorMessage()}</p>
          <div className="flex justify-center gap-2">
            <button 
              className="btn btn-primary" 
              onClick={() => window.location.reload()}
            >
              Refresh Page
            </button>
            <button 
              className="btn btn-outline" 
              onClick={() => this.setState({ hasError: false, error: null, errorInfo: null })}
            >
              Try Again
            </button>
          </div>
          
          {process.env.NODE_ENV !== 'production' && this.state.error && (
            <div className="mt-6 p-4 bg-base-300 rounded text-left overflow-x-auto">
              <p className="font-mono text-sm">{this.state.error.toString()}</p>
              {this.state.errorInfo && (
                <pre className="mt-2 font-mono text-xs whitespace-pre-wrap">
                  {this.state.errorInfo.componentStack}
                </pre>
              )}
            </div>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
