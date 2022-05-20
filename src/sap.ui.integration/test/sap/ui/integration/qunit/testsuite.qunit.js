sap.ui.define(function () {
	"use strict";

	return {
		name: "QUnit TestSuite for sap.ui.integration",
		defaults: {
			qunit: {
				version: "edge"
			},
			sinon: {
				version: "edge"
			},
			ui5: {
				language: "en",
				compatVersion: "edge",
				libs: ["sap.f", "sap.m", "sap.ui.integration"], // Libraries to load upfront in addition to the library which is tested, if null no libs are loaded
				noConflict: true,
				// preload: "auto",
				"xx-waitForTheme": "init",
				resourceroots: {
					"qunit": "test-resources/sap/ui/integration/qunit/"
				}
			},
			coverage: {
				only: ["sap/ui/integration"]
			},
			autostart: true,
			page: "test-resources/sap/ui/integration/qunit/testsandbox.qunit.html?test={name}"
		},
		tests: {
			"Card": {
				coverage: {
					only: [
						"sap/ui/integration/widgets/Card"
					]
				},
				module: [
					'./Card.qunit',
					'./CardDataHandling.qunit',
					'./CardDesigntime.qunit'
				]
			},
			"CardPagination": { },
			"AllCards": {
				ui5: {
					libs: ["sap.ui.integration"]
				},
				coverage: {
					only: [
						"sap/ui/integration/cards/Header",
						"sap/f/cards/HeaderRenderer",
						"sap/ui/integration/cards/NumericHeader",
						"sap/f/cards/NumericHeaderRenderer",
						"sap/f/cards/NumericSideIndicator",
						"sap/f/cards/NumericSideIndicatorRenderer",
						"sap/ui/integration/widgets/Card",
						"sap/ui/integration/util/CardObserver",
						"sap/ui/integration/util/CardManifest",
						"sap/ui/integration/util/ServiceManager",
						"sap/ui/integration/customElements/",
						"sap/ui/integration/cards/CalendarCard",
						"sap/ui/integration/cards/AdaptiveCard",
						"sap/ui/integration/cards/AnalyticalContent",
						"sap/ui/integration/util/BindingHelper",
						"sap/ui/integration/util/JSONBindingHelper",
						"sap/ui/integration/util/BindingResolver",
						"sap/ui/integration/cards/ComponentContent",
						"sap/ui/integration/cards/ListContent",
						"sap/ui/integration/cards/ObjectContent",
						"sap/ui/integration/cards/TableContent",
						"sap/ui/integration/cards/BaseContent",
						"sap/ui/integration/cards/AnalyticsCloudContent"
					]
				},
				module: [
					'./Card.qunit',
					'./CardDataHandling.qunit',
					'./util/CardManifest.qunit',
					'./util/ServiceManager.qunit',
					'./customElements/CustomElements.qunit',
					'./util/BindingHelper.qunit',
					'./util/JSONBindingHelper.qunit',
					'./util/BindingResolver.qunit',
					'./cardbundle/CardStaticResources.qunit',
					'./cards/BaseContent.qunit',
					'./bindingFeatures/DateRange.qunit',
					'./CardHost.qunit',
					'./cards/AnalyticsCloudContent.qunit'
				]
			},
			"CardLoading": {
				ui5: {
					libs: ["sap.ui.integration"]
				},
				coverage: {
					only: [
						"sap/ui/integration/cards/Header",
						"sap/f/cards/HeaderRenderer",
						"sap/ui/integration/cards/NumericHeader",
						"sap/f/cards/NumericHeaderRenderer",
						"sap/f/cards/NumericSideIndicator",
						"sap/f/cards/NumericSideIndicatorRenderer",
						"sap/ui/integration/cards/BaseContent",
						"sap/ui/integration/util/LoadingProvider"
					]
				},
				module: [
					'./loading/CardLoading.qunit'
				]
			},
			"CardExtension": {},
			"CardFormatters": {
				module: [
					"./formatters/CardFormatters.qunit",
					"./formatters/DateTimeFormatter.qunit",
					"./formatters/IconFormatter.qunit",
					"./formatters/InitialsFormatters.qunit",
					"./formatters/NumberFormatter.qunit",
					"./formatters/TextFormatter.qunit"
				]
			},
			"CardHostAndExtension": {},
			"CardReadyState": {},
			"CardHost": {
				coverage: {
					only: [
						"sap/ui/integration/widgets/Card",
						"sap/ui/integration/Host"
					]
				}
			},
			"CardDataHandlingWithMock": {
				sinon: {
					version: "1"
				},
				coverage: {
					only: [
						"sap/ui/integration/widgets/Card",
						"sap/ui/integration/util/RequestDataProvider",
						"sap/ui/integration/util/DataProvider"
					]
				}
			},
			"UI5InputText": {
				coverage: {
					only: ["sap/ui/integration/cards/adaptivecards/elements/UI5InputText"]
				},
				module: [
					'./cards/AdaptiveContent/UI5InputText.qunit'
				]
			},
			"UI5InputNumber": {
				coverage: {
					only: ["sap/ui/integration/cards/adaptivecards/elements/UI5InputNumber"]
				},
				module: [
					'./cards/AdaptiveContent/UI5InputNumber.qunit'
				]
			},
			"UI5InputToggle": {
				coverage: {
					only: ["sap/ui/integration/cards/adaptivecards/elements/UI5InputToggle"]
				},
				module: [
					'./cards/AdaptiveContent/UI5InputToggle.qunit'
				]
			},
			"UI5InputDate": {
				coverage: {
					only: ["sap/ui/integration/cards/adaptivecards/elements/UI5InputDate"]
				},
				module: [
					'./cards/AdaptiveContent/UI5InputDate.qunit'
				]
			},
			"UI5InputChoiceSet": {
				coverage: {
					only: ["sap/ui/integration/cards/adaptivecards/elements/UI5InputChoiceSet"]
				},
				module: [
					'./cards/AdaptiveContent/UI5InputChoiceSet.qunit'
				]
			},
			"UI5InputTime": {
				coverage: {
					only: ["sap/ui/integration/cards/adaptivecards/elements/UI5InputTime"]
				},
				module: [
					'./cards/AdaptiveContent/UI5InputTime.qunit'
				]
			},
			"ActionRender": {
				coverage: {
					only: ["sap/ui/integration/cards/adaptivecards/overwrites/ActionRender"]
				},
				module: [
					'./cards/AdaptiveContent/ActionRender.qunit'
				]
			},
			"AdaptiveContentIntegration": {
				title: "Opa test Page for sap.f.AdaptiveContent",
				module: [
					'./cards/AdaptiveContent/AdaptiveContentIntegration.opa.qunit'
				]
			},
			"bindingFeatures/DateRange": {
				coverage: {
					only: ["sap/ui/integration/bindingFeatures/DateRange"]
				}
			},
			"cardbundle/CardStaticResources": {},
			"cards/AdaptiveCard": {},
			"cards/AnalyticalCard": {},
			"cards/CalendarCard": {},
			"cards/ListCard": {},
			"cards/TableCard": {},
			"cards/ObjectCard": {},
			"cards/TimelineCard": {},
			"cards/WebPageCard": {},
			"cards/AnalyticsCloudContent": {
				coverage: {
					only: [
						"sap/ui/integration/cards/AnalyticsCloudContent"
					]
				}
			},
			"cards/BaseListContent": {
				coverage: {
					only: [
						"sap/ui/integration/cards/BaseListContent"
					]
				}
			},
			"cards/Footer": {},
			"cards/actions/CardActions": {
				module: [
					"./cards/actions/CardActions.qunit",
					"./cards/actions/SubmitAction.qunit"
				],
				coverage: {
					only: [
						"sap/ui/integration/cards/actions/",
						"sap/ui/integration/widgets/Card"
					]
				}
			},
			"cards/filters/CardFiltering": {
				module: [
					"./cards/filters/CardFiltering.qunit",
					"./cards/filters/DateRangeFilter.qunit",
					"./cards/filters/FilterBarFactory.qunit",
					"./cards/filters/SearchFilter.qunit",
					"./cards/filters/SelectFilter.qunit"
				],
				coverage: {
					only: [
						"sap/ui/integration/cards/filters/",
						"sap/ui/integration/widgets/Card"
					]
				}
			},
			"controls/ActionsToolbar": {},
			"controls/ActionsStrip": {},
			"controls/Paginator": {},
			"controls/ListContentItem": {},
			"controls/Microchart": {},
			"controls/MicrochartLegend": {},
			"customElements/CustomElements": {
				ui5: {
					libs: ["sap.ui.integration"]
				},
				coverage: {
					only: [
						"sap/ui/integration/customElements/"
					]
				}
			},
			"util/BindingHelper": {
				coverage: {
					only: ["sap/ui/integration/util/BindingHelper"]
				}
			},
			"util/JSONBindingHelper": {
				coverage: {
					only: ["sap/ui/integration/util/JSONBindingHelper"]
				}
			},
			"util/BindingResolver": {
				coverage: {
					only: ["sap/ui/integration/util/BindingResolver"]
				}
			},
			"util/CardManifest": {
				coverage: {
					only: [
						"sap/ui/integration/util/CardManifest"
					]
				}
			},
			"util/CardMerger": {
				coverage: {
					only: [
						"sap/ui/integration/util/CardMerger"
					]
				},
				sinon: false
			},
			"util/CardMergerWithObjectPropertyTranslations": {
				coverage: {
					only: [
						"sap/ui/integration/util/CardMerger"
					]
				},
				sinon: false
			},
			"util/CardObserver": {
				coverage: {
					only: [
						"sap/ui/integration/util/CardObserver"
					]
				}
			},
			"util/ContentFactory": {},
			"util/ManifestResolver": {},
			"util/SkeletonCard": {},
			"model/ContextModel": {
				coverage: {
					only: [
						"sap/ui/integration/model/ContextModel"
					]
				}
			},
			"model/ObservableModel": {
				coverage: {
					only: [
						"sap/ui/integration/model/ObservableModel"
					]
				},
				sinon: {
					useFakeTimers: true
				}
			},
			"util/DataProvider": {
				coverage: {
					only: [
						"sap/ui/integration/util/DataProviderFactory",
						"sap/ui/integration/util/DataProvider",
						"sap/ui/integration/util/RequestDataProvider",
						"sap/ui/integration/util/ServiceDataProvider"
					]
				}
			},
			"util/CacheAndRequestDataProvider": {
				coverage: {
					only: [
						"sap/ui/integration/util/CacheAndRequestDataProvider"
					]
				},
				sinon: {
					useFakeTimers: true
				}
			},
			"util/Destinations": {
				coverage: {
					only: ["sap/ui/integration/util/Destinations"]
				}
			},
			"util/CsrfTokenHandler": {
				coverage: {
					only: ["sap/ui/integration/util/CsrfTokenHandler"]
				}
			},
			"util/ServiceManager": {
				coverage: {
					only: [
						"sap/ui/integration/util/ServiceManager"
					]
				}
			},
			"util/Utils": {
				coverage: {
					only: [
						"sap/ui/integration/util/Utils"
					]
				},
				sinon: {
					useFakeTimers: true
				}
			},
			"designtime/baseEditor/integration/ReadyHandling": {
				group: "Base DesignTime Editor",
				coverage: {
					only: [
						"sap/ui/integration/designtime/baseEditor/"
					]
				},
				sinon: false
			},
			"designtime/baseEditor/BaseEditor": {
				group: "Base DesignTime Editor",
				coverage: {
					only: [
						"sap/ui/integration/designtime/baseEditor/BaseEditor"
					]
				},
				sinon: false
			},
			"designtime/baseEditor/propertyEditor/BasePropertyEditor": {
				group: "Base DesignTime Editor",
				coverage: {
					only: [
						"sap/ui/integration/designtime/baseEditor/propertyEditor/BasePropertyEditor"
					]
				},
				sinon: false
			},
			"designtime/baseEditor/PropertyEditor": {
				group: "Base DesignTime Editor",
				coverage: {
					only: [
						"sap/ui/integration/designtime/baseEditor/PropertyEditor"
					]
				},
				sinon: false
			},
			"designtime/baseEditor/PropertyEditors": {
				group: "Base DesignTime Editor",
				coverage: {
					only: [
						"sap/ui/integration/designtime/baseEditor/PropertyEditors"
					]
				},
				sinon: false
			},
			"designtime/baseEditor/propertyEditor/stringEditor/StringEditor": {
				group: "Base DesignTime Editor",
				coverage: {
					only: [
						"sap/ui/integration/designtime/baseEditor/propertyEditor/stringEditor/StringEditor"
					]
				},
				sinon: false
			},
			"designtime/baseEditor/propertyEditor/groupEditor/GroupEditor": {
				group: "Base DesignTime Editor",
				coverage: {
					only: [
						"sap/ui/integration/designtime/baseEditor/propertyEditor/groupEditor/GroupEditor"
					]
				},
				sinon: false
			},
			"designtime/baseEditor/propertyEditor/separatorEditor/SeparatorEditor": {
				group: "Base DesignTime Editor",
				coverage: {
					only: [
						"sap/ui/integration/designtime/baseEditor/propertyEditor/separatorEditor/SeparatorEditor"
					]
				},
				sinon: false
			},
			"designtime/baseEditor/propertyEditor/booleanEditor/BooleanEditor": {
				group: "Base DesignTime Editor",
				coverage: {
					only: [
						"sap/ui/integration/designtime/baseEditor/propertyEditor/booleanEditor/BooleanEditor"
					]
				},
				sinon: false
			},
			"designtime/baseEditor/propertyEditor/numberEditor/NumberEditor": {
				group: "Base DesignTime Editor",
				coverage: {
					only: [
						"sap/ui/integration/designtime/baseEditor/propertyEditor/numberEditor/NumberEditor"
					]
				},
				sinon: false
			},
			"designtime/baseEditor/propertyEditor/integerEditor/IntegerEditor": {
				group: "DesignTime Editor",
				coverage: {
					only: [
						"sap/ui/integration/designtime/baseEditor/propertyEditor/integerEditor/IntegerEditor"
					]
				},
				sinon: false
			},
			"designtime/baseEditor/propertyEditor/jsonEditor/JsonEditor": {
				group: "Base DesignTime Editor",
				coverage: {
					only: [
						"sap/ui/integration/designtime/baseEditor/propertyEditor/jsonEditor/JsonEditor"
					]
				},
				sinon: false
			},
			"designtime/baseEditor/propertyEditor/arrayEditor/ArrayEditor": {
				group: "Base DesignTime Editor",
				coverage: {
					only: [
						"sap/ui/integration/designtime/baseEditor/propertyEditor/arrayEditor/ArrayEditor"
					]
				},
				sinon: false
			},
			"designtime/baseEditor/propertyEditor/enumStringEditor/EnumStringEditor": {
				group: "Base DesignTime Editor",
				coverage: {
					only: [
						"sap/ui/integration/designtime/baseEditor/propertyEditor/enumStringEditor/EnumStringEditor"
					]
				},
				sinon: false
			},
			"designtime/baseEditor/propertyEditor/selectEditor/SelectEditor": {
				group: "Base DesignTime Editor",
				coverage: {
					only: [
						"sap/ui/integration/designtime/baseEditor/propertyEditor/selectEditor/SelectEditor"
					]
				},
				sinon: false
			},
			"designtime/baseEditor/propertyEditor/mapEditor/MapEditor": {
				group: "Base DesignTime Editor",
				coverage: {
					only: [
						"sap/ui/integration/designtime/baseEditor/propertyEditor/mapEditor/MapEditor"
					]
				},
				sinon: false
			},
			"designtime/baseEditor/propertyEditor/iconEditor/IconEditor": {
				group: "Base DesignTime Editor",
				coverage: {
					only: [
						"sap/ui/integration/designtime/baseEditor/propertyEditor/iconEditor/IconEditor"
					]
				},
				sinon: false
			},
			"designtime/baseEditor/propertyEditor/dateEditor/DateEditor": {
				group: "DesignTime Editor",
				coverage: {
					only: [
						"sap/ui/integration/designtime/baseEditor/propertyEditor/dateEditor/DateEditor"
					]
				},
				sinon: false
			},
			"designtime/baseEditor/propertyEditor/dateTimeEditor/DateTimeEditor": {
				group: "DesignTime Editor",
				coverage: {
					only: [
						"sap/ui/integration/designtime/baseEditor/propertyEditor/dateTimeEditor/DateTimeEditor"
					]
				},
				sinon: false
			},
			"designtime/baseEditor/propertyEditor/listEditor/ListEditor": {
				group: "DesignTime Editor",
				coverage: {
					only: [
						"sap/ui/integration/designtime/baseEditor/propertyEditor/listEditor/ListEditor"
					]
				},
				sinon: false
			},
			"designtime/baseEditor/propertyEditor/PropertyEditorFactory": {
				group: "Base DesignTime Editor",
				coverage: {
					only: [
						"sap/ui/integration/designtime/baseEditor/propertyEditor/PropertyEditorFactory"
					]
				},
				sinon: false
			},
			"designtime/baseEditor/util/binding/resolveBinding": {
				group: "Base DesignTime Editor",
				coverage: {
					only: [
						"sap/ui/integration/designtime/baseEditor/util/binding/resolveBinding"
					]
				},
				sinon: false
			},
			"designtime/baseEditor/util/ObjectBinding": {
				group: "Base DesignTime Editor",
				coverage: {
					only: [
						"sap/ui/integration/designtime/baseEditor/util/ObjectBinding"
					]
				},
				sinon: false
			},
			"designtime/baseEditor/util/createPromise": {
				group: "Base DesignTime Editor",
				coverage: {
					only: [
						"sap/ui/integration/designtime/baseEditor/util/createPromise"
					]
				},
				sinon: false
			},
			"designtime/baseEditor/util/escapeParameter": {
				group: "Base DesignTime Editor",
				coverage: {
					only: [
						"sap/ui/integration/designtime/baseEditor/util/escapeParameter"
					]
				},
				sinon: false
			},
			"designtime/baseEditor/util/findClosestInstance": {
				group: "Base DesignTime Editor",
				coverage: {
					only: [
						"sap/ui/integration/designtime/baseEditor/util/findClosestInstance"
					]
				},
				sinon: false
			},
			"designtime/baseEditor/util/isValidBindingString": {
				group: "DesignTime Editor",
				coverage: {
					only: [
						"sap/ui/integration/designtime/baseEditor/util/isValidBindingString"
					]
				},
				sinon: false
			},
			"designtime/baseEditor/util/unset": {
				group: "DesignTime Editor",
				coverage: {
					only: [
						"sap/ui/integration/designtime/baseEditor/util/unset"
					]
				},
				sinon: false
			},
			"designtime/baseEditor/util/hasTag": {
				group: "DesignTime Editor",
				coverage: {
					only: [
						"sap/ui/integration/designtime/baseEditor/util/hasTag"
					]
				},
				sinon: false
			},
			"designtime/baseEditor/util/StylesheetManager": {
				group: "DesignTime Editor",
				coverage: {
					only: [
						"sap/ui/integration/designtime/baseEditor/util/StylesheetManager"
					]
				},
				loader: {
					paths: {
						"mockdata": "test-resources/sap/ui/integration/qunit/designtime/baseEditor/util"
					}
				},
				sinon: false
			},
			"designtime/baseEditor/layout/Form": {
				group: "DesignTime Editor",
				coverage: {
					only: [
						"sap/ui/integration/designtime/baseEditor/layout/Form"
					]
				},
				sinon: false
			},
			"designtime/baseEditor/validator/ValidatorRegistry": {
				group: "DesignTime Editor",
				coverage: {
					only: [
						"sap/ui/integration/designtime/baseEditor/validator/ValidatorRegistry"
					]
				},
				sinon: false
			},
			"designtime/baseEditor/validator/IsPatternMatch": {
				group: "DesignTime Editor",
				coverage: {
					only: [
						"sap/ui/integration/designtime/baseEditor/validator/IsPatternMatch"
					]
				},
				sinon: false
			},
			"designtime/cardEditor/CardEditor": {
				group: "Card DesignTime Editor",
				coverage: {
					only: [
						"sap/ui/integration/designtime/cardEditor/CardEditor"
					]
				},
				sinon: false
			},
			"designtime/cardEditor/BASEditor": {
				group: "Card DesignTime Editor",
				coverage: {
					only: [
						"sap/ui/integration/designtime/cardEditor/BASEditor"
					]
				},
				sinon: false
			},
			"designtime/cardEditor/propertyEditor/parametersEditor/ParametersEditor": {
				group: "Card DesignTime Editor",
				coverage: {
					only: [
						"sap/ui/integration/designtime/cardEditor/propertyEditor/parametersEditor/ParametersEditor"
					]
				},
				sinon: false
			},
			"designtime/cardEditor/propertyEditor/complexMapEditor/ComplexMapEditor": {
				group: "Card DesignTime Editor",
				coverage: {
					only: [
						"sap/ui/integration/designtime/cardEditor/propertyEditor/complexMapEditor/ComplexMapEditor"
					]
				},
				sinon: false
			},
			"designtime/cardEditor/propertyEditor/destinationsEditor/DestinationsEditor": {
				group: "Card DesignTime Editor",
				coverage: {
					only: [
						"sap/ui/integration/designtime/cardEditor/propertyEditor/destinationsEditor/DestinationsEditor"
					]
				},
				sinon: false
			},
			"designtime/cardEditor/propertyEditor/filtersEditor/FiltersEditor": {
				group: "Card DesignTime Editor",
				coverage: {
					only: [
						"sap/ui/integration/designtime/cardEditor/propertyEditor/filtersEditor/FiltersEditor"
					]
				},
				sinon: false
			},
			"designtime/cardEditor/propertyEditor/iconEditor/IconEditor": {
				group: "Card DesignTime Editor",
				coverage: {
					only: [
						"sap/ui/integration/designtime/cardEditor/propertyEditor/iconEditor/IconEditor"
					]
				},
				sinon: false
			},
			"editor/NoDesigntime": {
				group: "Runtime Editor",
				coverage: {
					only: [
						"sap/ui/integration/editor"
					]
				},
				sinon: false
			},
			"editor/Basic": {
				group: "Runtime Editor",
				coverage: {
					only: [
						"sap/ui/integration/editor"
					]
				},
				sinon: false
			},
			"editor/Layout": {
				group: "Runtime Editor",
				coverage: {
					only: [
						"sap/ui/integration/editor"
					]
				},
				sinon: false
			},
			"editor/objectField/propertyTranslation/simpleForm/typeKey/Basic": {
				group: "Runtime Editor",
				coverage: {
					only: [
						"sap/ui/integration/editor"
					]
				},
				sinon: false
			},
			"editor/objectField/propertyTranslation/simpleForm/typeKey/ChangesByAdminForAdminMode": {
				group: "Runtime Editor",
				coverage: {
					only: [
						"sap/ui/integration/editor"
					]
				},
				sinon: false
			},
			"editor/objectField/propertyTranslation/simpleForm/typeKey/ChangesByAdminForContentMode": {
				group: "Runtime Editor",
				coverage: {
					only: [
						"sap/ui/integration/editor"
					]
				},
				sinon: false
			},
			"editor/objectField/propertyTranslation/simpleForm/typeKey/ChangesByAdminForAllMode": {
				group: "Runtime Editor",
				coverage: {
					only: [
						"sap/ui/integration/editor"
					]
				},
				sinon: false
			},
			"editor/objectField/propertyTranslation/simpleForm/typeKey/ChangesByContentForContentMode": {
				group: "Runtime Editor",
				coverage: {
					only: [
						"sap/ui/integration/editor"
					]
				},
				sinon: false
			},
			"editor/objectField/propertyTranslation/simpleForm/typeKey/ChangesByContentForAllMode": {
				group: "Runtime Editor",
				coverage: {
					only: [
						"sap/ui/integration/editor"
					]
				},
				sinon: false
			},
			"editor/objectField/propertyTranslation/simpleForm/typeKey/ChangesByAdminAndContentForContentMode": {
				group: "Runtime Editor",
				coverage: {
					only: [
						"sap/ui/integration/editor"
					]
				},
				sinon: false
			},
			"editor/objectField/propertyTranslation/simpleForm/typeKey/ChangesByAdminAndContentForAllMode": {
				group: "Runtime Editor",
				coverage: {
					only: [
						"sap/ui/integration/editor"
					]
				},
				sinon: false
			},
			"editor/objectField/propertyTranslation/simpleForm/typeProperty/Basic": {
				group: "Runtime Editor",
				coverage: {
					only: [
						"sap/ui/integration/editor"
					]
				},
				sinon: false
			},
			"editor/objectField/propertyTranslation/simpleForm/typeProperty/I18nFormatAsValue": {
				group: "Runtime Editor",
				coverage: {
					only: [
						"sap/ui/integration/editor"
					]
				},
				sinon: false
			},
			"editor/objectField/propertyTranslation/simpleForm/typeProperty/NormalStringAsValue": {
				group: "Runtime Editor",
				coverage: {
					only: [
						"sap/ui/integration/editor"
					]
				},
				sinon: false
			},
			"editor/objectField/propertyTranslation/simpleForm/typeProperty/ChangesByAdminForAdminMode01": {
				group: "Runtime Editor",
				coverage: {
					only: [
						"sap/ui/integration/editor"
					]
				},
				sinon: false
			},
			"editor/objectField/propertyTranslation/simpleForm/typeProperty/ChangesByAdminForAdminMode02": {
				group: "Runtime Editor",
				coverage: {
					only: [
						"sap/ui/integration/editor"
					]
				},
				sinon: false
			},
			"editor/objectField/propertyTranslation/simpleForm/typeProperty/ChangesByAdminForContentMode01": {
				group: "Runtime Editor",
				coverage: {
					only: [
						"sap/ui/integration/editor"
					]
				},
				sinon: false
			},
			"editor/objectField/propertyTranslation/simpleForm/typeProperty/ChangesByAdminForContentMode02": {
				group: "Runtime Editor",
				coverage: {
					only: [
						"sap/ui/integration/editor"
					]
				},
				sinon: false
			},
			"editor/objectField/propertyTranslation/simpleForm/typeProperty/ChangesByAdminForAllMode01": {
				group: "Runtime Editor",
				coverage: {
					only: [
						"sap/ui/integration/editor"
					]
				},
				sinon: false
			},
			"editor/objectField/propertyTranslation/simpleForm/typeProperty/ChangesByAdminForAllMode02": {
				group: "Runtime Editor",
				coverage: {
					only: [
						"sap/ui/integration/editor"
					]
				},
				sinon: false
			},
			"editor/objectField/propertyTranslation/simpleForm/typeProperty/ChangesByContentForContentMode01": {
				group: "Runtime Editor",
				coverage: {
					only: [
						"sap/ui/integration/editor"
					]
				},
				sinon: false
			},
			"editor/objectField/propertyTranslation/simpleForm/typeProperty/ChangesByContentForContentMode02": {
				group: "Runtime Editor",
				coverage: {
					only: [
						"sap/ui/integration/editor"
					]
				},
				sinon: false
			},
			"editor/objectField/propertyTranslation/simpleForm/typeProperty/ChangesByContentForAllMode01": {
				group: "Runtime Editor",
				coverage: {
					only: [
						"sap/ui/integration/editor"
					]
				},
				sinon: false
			},
			"editor/objectField/propertyTranslation/simpleForm/typeProperty/ChangesByContentForAllMode02": {
				group: "Runtime Editor",
				coverage: {
					only: [
						"sap/ui/integration/editor"
					]
				},
				sinon: false
			},
			"editor/objectField/propertyTranslation/simpleForm/typeProperty/ChangesByAdminAndContentForContentMode01": {
				group: "Runtime Editor",
				coverage: {
					only: [
						"sap/ui/integration/editor"
					]
				},
				sinon: false
			},
			"editor/objectField/propertyTranslation/simpleForm/typeProperty/ChangesByAdminAndContentForContentMode02": {
				group: "Runtime Editor",
				coverage: {
					only: [
						"sap/ui/integration/editor"
					]
				},
				sinon: false
			},
			"editor/objectField/propertyTranslation/simpleForm/typeProperty/ChangesByAdminAndContentForAllMode01": {
				group: "Runtime Editor",
				coverage: {
					only: [
						"sap/ui/integration/editor"
					]
				},
				sinon: false
			},
			"editor/objectField/propertyTranslation/simpleForm/typeProperty/ChangesByAdminAndContentForAllMode02": {
				group: "Runtime Editor",
				coverage: {
					only: [
						"sap/ui/integration/editor"
					]
				},
				sinon: false
			},
			"editor/objectField/propertyTranslation/table/typeKey/Basic": {
				group: "Runtime Editor",
				coverage: {
					only: [
						"sap/ui/integration/editor"
					]
				},
				sinon: false
			},
			"editor/objectField/propertyTranslation/table/typeKey/ChangesByAdminForAdminMode01": {
				group: "Runtime Editor",
				coverage: {
					only: [
						"sap/ui/integration/editor"
					]
				},
				sinon: false
			},
			"editor/objectField/propertyTranslation/table/typeKey/ChangesByAdminForAdminMode02": {
				group: "Runtime Editor",
				coverage: {
					only: [
						"sap/ui/integration/editor"
					]
				},
				sinon: false
			},
			"editor/objectField/propertyTranslation/table/typeKey/ChangesByAdminForContentMode01": {
				group: "Runtime Editor",
				coverage: {
					only: [
						"sap/ui/integration/editor"
					]
				},
				sinon: false
			},
			"editor/objectField/propertyTranslation/table/typeKey/ChangesByAdminForContentMode02": {
				group: "Runtime Editor",
				coverage: {
					only: [
						"sap/ui/integration/editor"
					]
				},
				sinon: false
			},
			"editor/objectField/propertyTranslation/table/typeKey/ChangesByAdminForAllMode01": {
				group: "Runtime Editor",
				coverage: {
					only: [
						"sap/ui/integration/editor"
					]
				},
				sinon: false
			},
			"editor/objectField/propertyTranslation/table/typeKey/ChangesByAdminForAllMode02": {
				group: "Runtime Editor",
				coverage: {
					only: [
						"sap/ui/integration/editor"
					]
				},
				sinon: false
			},
			"editor/objectField/propertyTranslation/table/typeKey/ChangesByContentForContentMode01": {
				group: "Runtime Editor",
				coverage: {
					only: [
						"sap/ui/integration/editor"
					]
				},
				sinon: false
			},
			"editor/objectField/propertyTranslation/table/typeKey/ChangesByContentForContentMode02": {
				group: "Runtime Editor",
				coverage: {
					only: [
						"sap/ui/integration/editor"
					]
				},
				sinon: false
			},
			"editor/objectField/propertyTranslation/table/typeKey/ChangesByContentForAllMode01": {
				group: "Runtime Editor",
				coverage: {
					only: [
						"sap/ui/integration/editor"
					]
				},
				sinon: false
			},
			"editor/objectField/propertyTranslation/table/typeKey/ChangesByContentForAllMode02": {
				group: "Runtime Editor",
				coverage: {
					only: [
						"sap/ui/integration/editor"
					]
				},
				sinon: false
			},
			"editor/objectField/propertyTranslation/table/typeKey/ChangesByAdminAndContentForContentMode01": {
				group: "Runtime Editor",
				coverage: {
					only: [
						"sap/ui/integration/editor"
					]
				},
				sinon: false
			},
			"editor/objectField/propertyTranslation/table/typeKey/ChangesByAdminAndContentForContentMode02": {
				group: "Runtime Editor",
				coverage: {
					only: [
						"sap/ui/integration/editor"
					]
				},
				sinon: false
			},
			"editor/objectField/propertyTranslation/table/typeKey/ChangesByAdminAndContentForAllMode01": {
				group: "Runtime Editor",
				coverage: {
					only: [
						"sap/ui/integration/editor"
					]
				},
				sinon: false
			},
			"editor/objectField/propertyTranslation/table/typeKey/ChangesByAdminAndContentForAllMode02": {
				group: "Runtime Editor",
				coverage: {
					only: [
						"sap/ui/integration/editor"
					]
				},
				sinon: false
			},
			"editor/objectField/propertyTranslation/table/typeProperty/Basic": {
				group: "Runtime Editor",
				coverage: {
					only: [
						"sap/ui/integration/editor"
					]
				},
				sinon: false
			},
			"editor/objectField/propertyTranslation/table/typeProperty/I18nFormatAsValue": {
				group: "Runtime Editor",
				coverage: {
					only: [
						"sap/ui/integration/editor"
					]
				},
				sinon: false
			},
			"editor/objectField/propertyTranslation/table/typeProperty/NormalStringAsValue": {
				group: "Runtime Editor",
				coverage: {
					only: [
						"sap/ui/integration/editor"
					]
				},
				sinon: false
			},
			"editor/objectField/propertyTranslation/table/typeProperty/ChangesByAdminForAdminMode01": {
				group: "Runtime Editor",
				coverage: {
					only: [
						"sap/ui/integration/editor"
					]
				},
				sinon: false
			},
			"editor/objectField/propertyTranslation/table/typeProperty/ChangesByAdminForAdminMode02": {
				group: "Runtime Editor",
				coverage: {
					only: [
						"sap/ui/integration/editor"
					]
				},
				sinon: false
			},
			"editor/objectField/propertyTranslation/table/typeProperty/ChangesByAdminForContentMode01": {
				group: "Runtime Editor",
				coverage: {
					only: [
						"sap/ui/integration/editor"
					]
				},
				sinon: false
			},
			"editor/objectField/propertyTranslation/table/typeProperty/ChangesByAdminForContentMode02": {
				group: "Runtime Editor",
				coverage: {
					only: [
						"sap/ui/integration/editor"
					]
				},
				sinon: false
			},
			"editor/objectField/propertyTranslation/table/typeProperty/ChangesByAdminForAllMode01": {
				group: "Runtime Editor",
				coverage: {
					only: [
						"sap/ui/integration/editor"
					]
				},
				sinon: false
			},
			"editor/objectField/propertyTranslation/table/typeProperty/ChangesByAdminForAllMode02": {
				group: "Runtime Editor",
				coverage: {
					only: [
						"sap/ui/integration/editor"
					]
				},
				sinon: false
			},
			"editor/objectField/propertyTranslation/table/typeProperty/ChangesByContentForContentMode01": {
				group: "Runtime Editor",
				coverage: {
					only: [
						"sap/ui/integration/editor"
					]
				},
				sinon: false
			},
			"editor/objectField/propertyTranslation/table/typeProperty/ChangesByContentForContentMode02": {
				group: "Runtime Editor",
				coverage: {
					only: [
						"sap/ui/integration/editor"
					]
				},
				sinon: false
			},
			"editor/objectField/propertyTranslation/table/typeProperty/ChangesByContentForAllMode01": {
				group: "Runtime Editor",
				coverage: {
					only: [
						"sap/ui/integration/editor"
					]
				},
				sinon: false
			},
			"editor/objectField/propertyTranslation/table/typeProperty/ChangesByContentForAllMode02": {
				group: "Runtime Editor",
				coverage: {
					only: [
						"sap/ui/integration/editor"
					]
				},
				sinon: false
			},
			"editor/objectField/propertyTranslation/table/typeProperty/ChangesByAdminAndContentForContentMode01": {
				group: "Runtime Editor",
				coverage: {
					only: [
						"sap/ui/integration/editor"
					]
				},
				sinon: false
			},
			"editor/objectField/propertyTranslation/table/typeProperty/ChangesByAdminAndContentForContentMode02": {
				group: "Runtime Editor",
				coverage: {
					only: [
						"sap/ui/integration/editor"
					]
				},
				sinon: false
			},
			"editor/objectField/propertyTranslation/table/typeProperty/ChangesByAdminAndContentForAllMode01": {
				group: "Runtime Editor",
				coverage: {
					only: [
						"sap/ui/integration/editor"
					]
				},
				sinon: false
			},
			"editor/objectField/propertyTranslation/table/typeProperty/ChangesByAdminAndContentForAllMode02": {
				group: "Runtime Editor",
				coverage: {
					only: [
						"sap/ui/integration/editor"
					]
				},
				sinon: false
			},
			"editor/objectField/table/Basic": {
				group: "Runtime Editor",
				coverage: {
					only: [
						"sap/ui/integration/editor"
					]
				},
				sinon: false
			},
			"editor/objectField/table/Add": {
				group: "Runtime Editor",
				coverage: {
					only: [
						"sap/ui/integration/editor"
					]
				},
				sinon: false
			},
			"editor/objectField/table/UpdateAndDelete": {
				group: "Runtime Editor",
				coverage: {
					only: [
						"sap/ui/integration/editor"
					]
				},
				sinon: false
			},
			"editor/objectField/table/Filter": {
				group: "Runtime Editor",
				coverage: {
					only: [
						"sap/ui/integration/editor"
					]
				},
				sinon: false
			},
			"editor/objectField/table/FilterAndCUD": {
				group: "Runtime Editor",
				coverage: {
					only: [
						"sap/ui/integration/editor"
					]
				},
				sinon: false
			},
			"editor/objectField/table/PropertyTranslation": {
				group: "Runtime Editor",
				coverage: {
					only: [
						"sap/ui/integration/editor"
					]
				},
				sinon: false
			},
			"editor/objectField/TextAreaAndSimpleForm": {
				group: "Runtime Editor",
				coverage: {
					only: [
						"sap/ui/integration/editor"
					]
				},
				sinon: false
			},
			"editor/objectListField/TextArea": {
				group: "Runtime Editor",
				coverage: {
					only: [
						"sap/ui/integration/editor"
					]
				},
				sinon: false
			},
			"editor/objectListField/table/Basic": {
				group: "Runtime Editor",
				coverage: {
					only: [
						"sap/ui/integration/editor"
					]
				},
				sinon: false
			},
			"editor/objectListField/table/CUD": {
				group: "Runtime Editor",
				coverage: {
					only: [
						"sap/ui/integration/editor"
					]
				},
				sinon: false
			},
			"editor/objectListField/table/Filter": {
				group: "Runtime Editor",
				coverage: {
					only: [
						"sap/ui/integration/editor"
					]
				},
				sinon: false
			},
			"editor/objectListField/table/FilterAndCUD": {
				group: "Runtime Editor",
				coverage: {
					only: [
						"sap/ui/integration/editor"
					]
				},
				sinon: false
			},
			"editor/objectListField/requestValues/Basic": {
				group: "Runtime Editor",
				coverage: {
					only: [
						"sap/ui/integration/editor"
					]
				},
				sinon: false
			},
			"editor/objectListField/requestValues/Add": {
				group: "Runtime Editor",
				coverage: {
					only: [
						"sap/ui/integration/editor"
					]
				},
				sinon: false
			},
			"editor/objectListField/requestValues/UpdateAndDelete": {
				group: "Runtime Editor",
				coverage: {
					only: [
						"sap/ui/integration/editor"
					]
				},
				sinon: false
			},
			"editor/objectListField/requestValues/Filter": {
				group: "Runtime Editor",
				coverage: {
					only: [
						"sap/ui/integration/editor"
					]
				},
				sinon: false
			},
			"editor/objectListField/requestValues/FilterAndCUD": {
				group: "Runtime Editor",
				coverage: {
					only: [
						"sap/ui/integration/editor"
					]
				},
				sinon: false
			},
			"editor/objectListField/propertyTranslation/table/typeKey/Basic": {
				group: "Runtime Editor",
				coverage: {
					only: [
						"sap/ui/integration/editor"
					]
				},
				sinon: false
			},
			"editor/objectListField/propertyTranslation/table/typeKey/Update": {
				group: "Runtime Editor",
				coverage: {
					only: [
						"sap/ui/integration/editor"
					]
				},
				sinon: false
			},
			"editor/objectListField/propertyTranslation/table/typeKey/ChangesByAdminForAdminMode01": {
				group: "Runtime Editor",
				coverage: {
					only: [
						"sap/ui/integration/editor"
					]
				},
				sinon: false
			},
			"editor/objectListField/propertyTranslation/table/typeKey/ChangesByAdminForAdminMode02": {
				group: "Runtime Editor",
				coverage: {
					only: [
						"sap/ui/integration/editor"
					]
				},
				sinon: false
			},
			"editor/objectListField/propertyTranslation/table/typeKey/ChangesByAdminForContentMode01": {
				group: "Runtime Editor",
				coverage: {
					only: [
						"sap/ui/integration/editor"
					]
				},
				sinon: false
			},
			"editor/objectListField/propertyTranslation/table/typeKey/ChangesByAdminForContentMode02": {
				group: "Runtime Editor",
				coverage: {
					only: [
						"sap/ui/integration/editor"
					]
				},
				sinon: false
			},
			"editor/objectListField/propertyTranslation/table/typeKey/ChangesByAdminForAllMode01": {
				group: "Runtime Editor",
				coverage: {
					only: [
						"sap/ui/integration/editor"
					]
				},
				sinon: false
			},
			"editor/objectListField/propertyTranslation/table/typeKey/ChangesByAdminForAllMode02": {
				group: "Runtime Editor",
				coverage: {
					only: [
						"sap/ui/integration/editor"
					]
				},
				sinon: false
			},
			"editor/objectListField/propertyTranslation/table/typeKey/ChangesByContentForContentMode01": {
				group: "Runtime Editor",
				coverage: {
					only: [
						"sap/ui/integration/editor"
					]
				},
				sinon: false
			},
			"editor/objectListField/propertyTranslation/table/typeKey/ChangesByContentForContentMode02": {
				group: "Runtime Editor",
				coverage: {
					only: [
						"sap/ui/integration/editor"
					]
				},
				sinon: false
			},
			"editor/objectListField/propertyTranslation/table/typeKey/ChangesByContentForAllMode01": {
				group: "Runtime Editor",
				coverage: {
					only: [
						"sap/ui/integration/editor"
					]
				},
				sinon: false
			},
			"editor/objectListField/propertyTranslation/table/typeKey/ChangesByContentForAllMode02": {
				group: "Runtime Editor",
				coverage: {
					only: [
						"sap/ui/integration/editor"
					]
				},
				sinon: false
			},
			"editor/objectListField/propertyTranslation/table/typeKey/ChangesByAdminAndContentForContentMode01": {
				group: "Runtime Editor",
				coverage: {
					only: [
						"sap/ui/integration/editor"
					]
				},
				sinon: false
			},
			"editor/objectListField/propertyTranslation/table/typeKey/ChangesByAdminAndContentForContentMode02": {
				group: "Runtime Editor",
				coverage: {
					only: [
						"sap/ui/integration/editor"
					]
				},
				sinon: false
			},
			"editor/objectListField/propertyTranslation/table/typeKey/ChangesByAdminAndContentForAllMode01": {
				group: "Runtime Editor",
				coverage: {
					only: [
						"sap/ui/integration/editor"
					]
				},
				sinon: false
			},
			"editor/objectListField/propertyTranslation/table/typeKey/ChangesByAdminAndContentForAllMode02": {
				group: "Runtime Editor",
				coverage: {
					only: [
						"sap/ui/integration/editor"
					]
				},
				sinon: false
			},
			"editor/objectListField/propertyTranslation/table/typeProperty/Basic": {
				group: "Runtime Editor",
				coverage: {
					only: [
						"sap/ui/integration/editor"
					]
				},
				sinon: false
			},
			"editor/objectListField/propertyTranslation/table/typeProperty/NormalStringAsValue": {
				group: "Runtime Editor",
				coverage: {
					only: [
						"sap/ui/integration/editor"
					]
				},
				sinon: false
			},
			"editor/objectListField/propertyTranslation/table/typeProperty/I18nFormatAsValue": {
				group: "Runtime Editor",
				coverage: {
					only: [
						"sap/ui/integration/editor"
					]
				},
				sinon: false
			},
			"editor/objectListField/propertyTranslation/table/typeProperty/ChangesByAdminForAdminMode01": {
				group: "Runtime Editor",
				coverage: {
					only: [
						"sap/ui/integration/editor"
					]
				},
				sinon: false
			},
			"editor/objectListField/propertyTranslation/table/typeProperty/ChangesByAdminForAdminMode02": {
				group: "Runtime Editor",
				coverage: {
					only: [
						"sap/ui/integration/editor"
					]
				},
				sinon: false
			},
			"editor/objectListField/propertyTranslation/table/typeProperty/ChangesByAdminForContentMode01": {
				group: "Runtime Editor",
				coverage: {
					only: [
						"sap/ui/integration/editor"
					]
				},
				sinon: false
			},
			"editor/objectListField/propertyTranslation/table/typeProperty/ChangesByAdminForContentMode02": {
				group: "Runtime Editor",
				coverage: {
					only: [
						"sap/ui/integration/editor"
					]
				},
				sinon: false
			},
			"editor/objectListField/propertyTranslation/table/typeProperty/ChangesByAdminForAllMode01": {
				group: "Runtime Editor",
				coverage: {
					only: [
						"sap/ui/integration/editor"
					]
				},
				sinon: false
			},
			"editor/objectListField/propertyTranslation/table/typeProperty/ChangesByAdminForAllMode02": {
				group: "Runtime Editor",
				coverage: {
					only: [
						"sap/ui/integration/editor"
					]
				},
				sinon: false
			},
			"editor/objectListField/propertyTranslation/table/typeProperty/ChangesByAdminAndContentForContentMode01": {
				group: "Runtime Editor",
				coverage: {
					only: [
						"sap/ui/integration/editor"
					]
				},
				sinon: false
			},
			"editor/objectListField/propertyTranslation/table/typeProperty/ChangesByAdminAndContentForContentMode02": {
				group: "Runtime Editor",
				coverage: {
					only: [
						"sap/ui/integration/editor"
					]
				},
				sinon: false
			},
			"editor/objectListField/propertyTranslation/table/typeProperty/ChangesByAdminAndContentForAllMode01": {
				group: "Runtime Editor",
				coverage: {
					only: [
						"sap/ui/integration/editor"
					]
				},
				sinon: false
			},
			"editor/objectListField/propertyTranslation/table/typeProperty/ChangesByAdminAndContentForAllMode02": {
				group: "Runtime Editor",
				coverage: {
					only: [
						"sap/ui/integration/editor"
					]
				},
				sinon: false
			},
			"editor/objectListField/propertyTranslation/table/typeProperty/ChangesByContentForContentMode01": {
				group: "Runtime Editor",
				coverage: {
					only: [
						"sap/ui/integration/editor"
					]
				},
				sinon: false
			},
			"editor/objectListField/propertyTranslation/table/typeProperty/ChangesByContentForContentMode02": {
				group: "Runtime Editor",
				coverage: {
					only: [
						"sap/ui/integration/editor"
					]
				},
				sinon: false
			},
			"editor/objectListField/propertyTranslation/table/typeProperty/ChangesByContentForAllMode01": {
				group: "Runtime Editor",
				coverage: {
					only: [
						"sap/ui/integration/editor"
					]
				},
				sinon: false
			},
			"editor/objectListField/propertyTranslation/table/typeProperty/ChangesByContentForAllMode02": {
				group: "Runtime Editor",
				coverage: {
					only: [
						"sap/ui/integration/editor"
					]
				},
				sinon: false
			},
			"editor/objectListField/propertyTranslation/table/typeProperty/differentParameters/ChangesByAdminForAdminMode": {
				group: "Runtime Editor",
				coverage: {
					only: [
						"sap/ui/integration/editor"
					]
				},
				sinon: false
			},
			"editor/objectListField/propertyTranslation/table/typeProperty/differentParameters/ChangesByAdminForContentMode": {
				group: "Runtime Editor",
				coverage: {
					only: [
						"sap/ui/integration/editor"
					]
				},
				sinon: false
			},
			"editor/objectListField/propertyTranslation/table/typeProperty/differentParameters/ChangesByAdminForAllMode": {
				group: "Runtime Editor",
				coverage: {
					only: [
						"sap/ui/integration/editor"
					]
				},
				sinon: false
			},
			"editor/objectListField/propertyTranslation/table/typeProperty/differentParameters/ChangesByContentForContentMode": {
				group: "Runtime Editor",
				coverage: {
					only: [
						"sap/ui/integration/editor"
					]
				},
				sinon: false
			},
			"editor/objectListField/propertyTranslation/table/typeProperty/differentParameters/ChangesByContentForAllMode": {
				group: "Runtime Editor",
				coverage: {
					only: [
						"sap/ui/integration/editor"
					]
				},
				sinon: false
			},
			"editor/objectListField/propertyTranslation/table/typeProperty/differentParameters/ChangesByAdminAndContentForContentMode": {
				group: "Runtime Editor",
				coverage: {
					only: [
						"sap/ui/integration/editor"
					]
				},
				sinon: false
			},
			"editor/objectListField/propertyTranslation/table/typeProperty/differentParameters/ChangesByAdminAndContentForAllMode": {
				group: "Runtime Editor",
				coverage: {
					only: [
						"sap/ui/integration/editor"
					]
				},
				sinon: false
			},
			"editor/RequestValues": {
				group: "Runtime Editor",
				coverage: {
					only: [
						"sap/ui/integration/editor"
					]
				},
				sinon: false
			},
			"editor/Translation": {
				group: "Runtime Editor",
				coverage: {
					only: [
						"sap/ui/integration/editor"
					]
				},
				sinon: false
			},
			"editor/Validation": {
				group: "Runtime Editor",
				coverage: {
					only: [
						"sap/ui/integration/editor"
					]
				},
				sinon: false
			},
			"editor/SectionSapCard1": {
				group: "Runtime Editor",
				coverage: {
					only: [
						"sap/ui/integration/editor"
					]
				},
				sinon: false
			},
			"editor/SectionTemp": {
				group: "Runtime Editor",
				coverage: {
					only: [
						"sap/ui/integration/editor"
					]
				},
				sinon: false
			},
			"editor/ParameterSyntax": {
				group: "Runtime Editor",
				coverage: {
					only: [
						"sap/ui/integration/editor"
					]
				},
				sinon: false
			},
			"editor/multiLanguagesOfValue/InitialWithNoChange": {
				group: "Runtime Editor",
				coverage: {
					only: [
						"sap/ui/integration/designtime/editor",
						"sap/ui/integration/editor"
					]
				},
				sinon: false
			},
			"editor/multiLanguagesOfValue/InitialWithErrorCondition": {
				group: "Runtime Editor",
				coverage: {
					only: [
						"sap/ui/integration/designtime/editor",
						"sap/ui/integration/editor"
					]
				},
				sinon: false
			},
			"editor/multiLanguagesOfValue/ChangeByAdminForAdminAndContentModes": {
				group: "Runtime Editor",
				coverage: {
					only: [
						"sap/ui/integration/designtime/editor",
						"sap/ui/integration/editor"
					]
				},
				sinon: false
			},
			"editor/multiLanguagesOfValue/ChangeByAdminForTranslationAndAllModes": {
				group: "Runtime Editor",
				coverage: {
					only: [
						"sap/ui/integration/designtime/editor",
						"sap/ui/integration/editor"
					]
				},
				sinon: false
			},
			"editor/multiLanguagesOfValue/ChangeByContent": {
				group: "Runtime Editor",
				coverage: {
					only: [
						"sap/ui/integration/designtime/editor",
						"sap/ui/integration/editor"
					]
				},
				sinon: false
			},
			"editor/multiLanguagesOfValue/ChangeByTranslation": {
				group: "Runtime Editor",
				coverage: {
					only: [
						"sap/ui/integration/designtime/editor",
						"sap/ui/integration/editor"
					]
				},
				sinon: false
			},
			"editor/multiLanguagesOfValue/ChangeByAdminAndContent": {
				group: "Runtime Editor",
				coverage: {
					only: [
						"sap/ui/integration/designtime/editor",
						"sap/ui/integration/editor"
					]
				},
				sinon: false
			},
			"editor/multiLanguagesOfValue/ChangeByAdminAndTranslation": {
				group: "Runtime Editor",
				coverage: {
					only: [
						"sap/ui/integration/designtime/editor",
						"sap/ui/integration/editor"
					]
				},
				sinon: false
			},
			"editor/multiLanguagesOfValue/ChangeByAdminAndContentAndTranslation": {
				group: "Runtime Editor",
				coverage: {
					only: [
						"sap/ui/integration/designtime/editor",
						"sap/ui/integration/editor"
					]
				},
				sinon: false
			},
			"editor/multiLanguagesOfValue/ChangeByContentAndTranslation": {
				group: "Runtime Editor",
				coverage: {
					only: [
						"sap/ui/integration/designtime/editor",
						"sap/ui/integration/editor"
					]
				},
				sinon: false
			},
			"editor/multiLanguagesOfValue/BCChangeByAdminForAdminAndContentModes": {
				group: "Runtime Editor",
				coverage: {
					only: [
						"sap/ui/integration/designtime/editor",
						"sap/ui/integration/editor"
					]
				},
				sinon: false
			},
			"editor/multiLanguagesOfValue/BCChangeByAdminForTranslationAndAllModes": {
				group: "Runtime Editor",
				coverage: {
					only: [
						"sap/ui/integration/designtime/editor",
						"sap/ui/integration/editor"
					]
				},
				sinon: false
			},
			"editor/multiLanguagesOfValue/BCChangeByContent": {
				group: "Runtime Editor",
				coverage: {
					only: [
						"sap/ui/integration/designtime/editor",
						"sap/ui/integration/editor"
					]
				},
				sinon: false
			},
			"editor/multiLanguagesOfValue/BCChangeByAdminAndContent": {
				group: "Runtime Editor",
				coverage: {
					only: [
						"sap/ui/integration/designtime/editor",
						"sap/ui/integration/editor"
					]
				},
				sinon: false
			},
			"editor/multiLanguagesOfValue/BCChangeByAdminAndContentAndTranslation": {
				group: "Runtime Editor",
				coverage: {
					only: [
						"sap/ui/integration/designtime/editor",
						"sap/ui/integration/editor"
					]
				},
				sinon: false
			},
			"editor/multiLanguagesOfValue/BCChangeByAdminAndTranslation": {
				group: "Runtime Editor",
				coverage: {
					only: [
						"sap/ui/integration/designtime/editor",
						"sap/ui/integration/editor"
					]
				},
				sinon: false
			},
			"editor/multiLanguagesOfValue/BCChangeByContentAndTranslation": {
				group: "Runtime Editor",
				coverage: {
					only: [
						"sap/ui/integration/designtime/editor",
						"sap/ui/integration/editor"
					]
				},
				sinon: false
			},
			"designtime/editor/CardEditor": {
				group: "Runtime Editor for Card",
				coverage: {
					only: [
						"sap/ui/integration/designtime/editor",
						"sap/ui/integration/editor"
					]
				},
				sinon: false
			},
			"Generic Testsuite": {
				page: "test-resources/sap/ui/integration/qunit/testsuite.generic.qunit.html"
			}
		}
	};
});
