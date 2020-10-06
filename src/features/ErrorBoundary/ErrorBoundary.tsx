import React from "react"

interface ErrorBoundaryProps {
	fallback?: JSX.Element
}
interface ErrorBoundaryState {
	error: any
}

/**
 * From what I can see this error boundary is correct. There is a problem somewhere,
 * probably due to create-react-app that causes it not to trigger correctly.
 * I've copied this code from another project where these boundaries work so I'm not
 * sure exactly what is wrong.
 * 
 * Ref:
 * https://github.com/facebook/create-react-app/issues/6530
 * https://github.com/facebook/create-react-app/issues/3627
 */
class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
	public state: ErrorBoundaryState = {
		error: undefined
	}

  public constructor(props: ErrorBoundaryProps) {
		super(props)
  }

  public static getDerivedStateFromError(error: any): Partial<ErrorBoundaryState> {
		return {
			error
		}
	}
  public componentDidCatch(error: any, errorInfo: any) {
		console.error("Error caught by boundary")
		console.error(error, errorInfo)
	}

	private defaultFallback(): JSX.Element {
		return (<p>An error has occurred {this.state.error.message}</p>)
	}
  public render() {
    if (this.state.error) {
			return this.props.fallback ?? this.defaultFallback()
		}

		return this.props.children
  }
}

export default ErrorBoundary