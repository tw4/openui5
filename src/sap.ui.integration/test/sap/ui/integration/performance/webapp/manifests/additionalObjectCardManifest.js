sap.ui.define([], function () {
	'use strict';
	return {
		"sap.app": {
			"id": "cards.performance.manifests.additionalObjectCard",
			"type": "card",
			"title": "Sample of an Object Card",
			"subTitle": "Sample of an Object Card",
			"applicationVersion": {
				"version": "1.0.0"
			},
			"shortTitle": "A short title for this Card",
			"info": "Additional information about this Card",
			"description": "A long description for this Card",
			"tags": {
				"keywords": [
					"Object",
					"Card",
					"Sample"
				]
			}
		},
		"sap.ui": {
			"technology": "UI5",
			"icons": {
				"icon": "sap-icon://switch-classes"
			}
		},
		"sap.card": {
			"type": "Object",
			"header": {
				"icon": {
					"src": "sap-icon://building",
					"shape": "Square"
				},
				"title": "ACME Consulting",
				"subTitle": "Overdue Billing"
			},
			"content": {
				"data": {
					"json": {
						"contacts": [{
								"name": "Alain Chevalier",
								"photo": "./images/AlainChevalier.png"
							},
							{
								"name": "Donna Moore",
								"photo": "./images/DonnaMoore.png"
							}
						]
					}
				},
				"groups": [{
						"alignment": "Stretch",
						"items": [{
								"value": "Overdue by 20 days",
								"type": "Status",
								"state": "Error",
								"showStateIcon": true
							},
							{
								"value": "USD 10,000.00 was to be billed on 23rd August, 2021."
							}
						]
					},
					{
						"items": [{
								"label": "Billing Element",
								"value": "RN47565.0.1"
							},
							{
								"label": "Customer",
								"value": "Domestic US Customer 1"
							}
						]
					},
					{
						"items": [{
								"label": "Project",
								"value": "RN4765"
							},
							{
								"label": "Contacts",
								"type": "IconGroup",
								"path": "contacts",
								"template": {
									"icon": {
										"src": "{photo}",
										"initials": "{= format.initials(${name})}"
									},
									"actions": [{
										"type": "Navigation",
										"parameters": {
											"url": "/contacts-service?name={= encodeURIComponent(${name}) }"
										}
									}]
								}
							}
						]
					}
				]
			},
			"footer": {
				"actionsStrip": [{
						"text": "Pay Bill",
						"buttonType": "Accept"
					},
					{
						"text": "Block Payment",
						"buttonType": "Reject"
					}
				]
			}
		}
	};
});