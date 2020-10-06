import React from "react"

interface ErrorBoundaryProps {
	fallback?: JSX.Element
}
interface ErrorBoundaryState {
	hasError: boolean
	error: any
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
	public state: ErrorBoundaryState = {
		hasError: false,
		error: undefined
	}

  public constructor(props: ErrorBoundaryProps) {
    super(props)
  }

  public static getDerivedStateFromError(error: any): Partial<ErrorBoundaryState> {
		return {
			hasError: true,
			error
		}
	}
  public componentDidCatch(error: any, errorInfo: any) {

	}

	private defaultFallback(): JSX.Element {
		return (<p>An error has occurred {this.state.error.message}</p>)
	}
  public render() {
    if (this.state.hasError) {
			return this.props.fallback ?? this.defaultFallback()
		}

		return this.props.children
  }
}

export default ErrorBoundary