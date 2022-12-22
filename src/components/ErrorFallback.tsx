import { FallbackProps } from 'react-error-boundary'

function ErrorFallback({ error }: FallbackProps) {
    return (
        <div>
        <pre>{error.message}</pre>
        </div>
    )
}
export default ErrorFallback