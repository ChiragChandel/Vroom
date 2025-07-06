import {loading} from '../types/index'

export default function Status({ type, message, spinnerSize = 'md', onRetry }: loading) {
  
  const Spinner = ({ size = 'md', label = 'Loading...' }: { size?: 'sm' | 'md' | 'lg' | 'xl'; label?: string }) => {
    const sizeClasses = {
      sm: 'w-4 h-4',
      md: 'w-8 h-8',
      lg: 'w-12 h-12',
      xl: 'w-16 h-16',
    };

    return (
      <div role="status">
        <svg
          aria-hidden="true"
          className={`${sizeClasses[size]} text-gray-200 animate-spin dark:text-gray-600 fill-blue-600`}
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <span className="sr-only">{label}</span>
      </div>
    );
  };

  
  const ErrorIcon = () => (
    <svg
      className="w-16 h-16 text-red-500"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
      />
    </svg>
  );

  
  const EmptyIcon = () => (
    <svg
      className="w-16 h-16 text-gray-400"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
      />
    </svg>
  );

  const defaultMessages = {
    loading: "Loading...",
    error: "Something went wrong.",
    empty: "No data found.",
  };

  const containerClasses = "flex flex-col items-center justify-center py-16 px-4 text-center";

  
  if (type === 'loading') {
    return (
      <div className={containerClasses}>
        <div className="flex flex-col items-center gap-4">
          <Spinner size={spinnerSize} label={message || defaultMessages.loading} />
          <div className="space-y-2">
            <p className="text-lg font-medium text-gray-700">
              {message || defaultMessages.loading}
            </p>
            <p className="text-sm text-gray-500">
              Please wait while we fetch your data
            </p>
          </div>
        </div>
      </div>
    );
  }

 
  if (type === 'error') {
    return (
      <div className={containerClasses}>
        <div className="max-w-md mx-auto">
          <div className="flex flex-col items-center gap-6">
            <div className="p-4 bg-red-100 rounded-full">
              <ErrorIcon />
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-gray-900">
                Oops! Something went wrong
              </h3>
              <p className="text-gray-600">
                {message || defaultMessages.error}
              </p>
              <p className="text-sm text-gray-500">
                We're having trouble loading the content. Please try again.
              </p>
            </div>
            {onRetry && (
              <button
                onClick={onRetry}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
                Try Again
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  
  if (type === 'empty') {
    return (
      <div className={containerClasses}>
        <div className="max-w-md mx-auto">
          <div className="flex flex-col items-center gap-6">
            <div className="p-4 bg-gray-100 rounded-full">
              <EmptyIcon />
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-gray-900">
                No results found
              </h3>
              <p className="text-gray-600">
                {message || defaultMessages.empty}
              </p>
              <p className="text-sm text-gray-500">
                Try adjusting your search or filters to find what you're looking for.
              </p>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Clear filters or try a different search term</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}