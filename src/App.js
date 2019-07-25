import React from 'react'
import { connect } from 'react-redux'
import Header from './components/Header'
import AddedFeatures from './components/AddedFeatures'
import AdditionalFeatures from './components/AdditionalFeatures'
import Total from './components/Total'
import {
	ADD_FEATURE,
	addFeature,
	REMOVE_FEATURE,
	removeFeature
} from './components/ActionsComponent'

const App = props => {
	const removeFeature = item => {
		props.removeFeature(item)
		// dispatch an action here to remove an item
	}

	const buyItem = item => {
		props.addFeature(item)

		// dipsatch an action here to add an item
	}

	return (
		<div className="boxes">
			<div className="box">
				<Header car={props.car} />
				<AddedFeatures removeFeature={removeFeature} car={props.car} />
			</div>
			<div className="box">
				<AdditionalFeatures store={props.store} buyItem={buyItem} />
				<Total car={props.car} additionalPrice={props.additionalPrice} />
			</div>
		</div>
	)
}

const mapStateToProps = state => {
	return {
		additionalPrice: state.additionalPrice,
		car: state.car,
		store: state.store
	}
}

export default connect(
	mapStateToProps,
	{ addFeature, removeFeature }
)(App)
