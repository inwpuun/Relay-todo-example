import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import RelayEnvironment from "./relay/RelayEnvironment";
import LoadingSpinner from './components/LoadingSpinner';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<RelayEnvironment>
			<React.Suspense fallback={<LoadingSpinner />}>
				<App />
			</React.Suspense>
		</RelayEnvironment>
	</React.StrictMode>
);
