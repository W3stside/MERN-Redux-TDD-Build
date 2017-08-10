import React from 'react'
import { createDevTools } from 'redux-devtools'
// CUSTOM DISPATCH DEV TOOL
import Dispatcher from 'redux-devtools-dispatch'
import DockMonitor from 'redux-devtools-dock-monitor'
import LogMonitor from 'redux-devtools-log-monitor'
import MultipleMonitors from 'redux-devtools-multiple-monitors'

// ACTIONS TO TEST
import * as Actions from '../actions'

export default createDevTools(
	<DockMonitor toggleVisibilityKey="ctrl-h"
	           changePositionKey="ctrl-w"
			   defaultIsVisible={false}>
		<MultipleMonitors>
			<LogMonitor />
			<Dispatcher actionCreators={Actions}/>
		</MultipleMonitors>	
	</DockMonitor>
);
