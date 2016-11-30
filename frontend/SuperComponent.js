import React, { Component } from 'react';
import Api from 'root/api/Api';
import Rest from 'root/api/resources';

export default class SuperComponent extends Component {
	constructor(props, context) {
		super(props, context);
		this.Api = Rest(new Api);
	}
};
