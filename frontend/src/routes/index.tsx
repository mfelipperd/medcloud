import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Main from '../pages/main/Main';

function RoutesComponent() {
	return (
		<Routes>
			<Route path='/' element={<Main />} />
		</Routes>
	);
}

export default RoutesComponent;
