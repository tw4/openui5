/* global QUnit, sinon*/

/*eslint max-nested-callbacks: [2, 5]*/

sap.ui.define([
	"sap/ui/mdc/FilterBar",
	"sap/ui/core/Manifest",
	"sap/base/Log",
	"sap/ui/fl/Utils",
	"sap/ui/fl/variants/VariantManagement",
	"sap/ui/fl/variants/VariantModel",
	"sap/ui/fl/apply/api/ControlVariantApplyAPI",
	"sap/ui/fl/apply/_internal/flexState/controlVariants/VariantManagementState",
	"sap/ui/fl/apply/_internal/controlVariants/URLHandler",
	"sap/ui/fl/apply/_internal/flexState/FlexState",
	"sap/ui/fl/FlexControllerFactory",
	"sap/ui/mdc/DefaultTypeMap",
	"sap/ui/model/type/String"
], function (
	FilterBar,
	Manifest,
	Log,
	FlUtils,
	VariantManagement,
	VariantModel,
	ControlVariantApplyAPI,
	VariantManagementState,
	URLHandler,
	FlexState,
	FlexControllerFactory,
	DefaultTypeMap,
	StringType
) {
	"use strict";

	QUnit.module("FilterBar", {
		beforeEach: function () {
		},
		afterEach: function () {
		}
	});

	QUnit.test("check assigned variantBackreference association", function (assert) {

		let fnResolve;
		const oLoadFlexPromise = new Promise(function(resolve) {
			fnResolve = resolve;
		});

		sinon.stub(ControlVariantApplyAPI, "attachVariantApplied");
		sinon.stub(ControlVariantApplyAPI, "detachVariantApplied");

		sinon.stub(sap.ui.fl.variants.VariantManagement.prototype, "_updateWithSettingsInfo");

		sinon.stub(sap.ui.mdc.filterbar.FilterBarBase.prototype, "_loadFlex").callsFake(function() {
			fnResolve(ControlVariantApplyAPI);
			return oLoadFlexPromise;
		});

		const oVM = new VariantManagement();
		const oFB = new FilterBar({
			variantBackreference: oVM.getId()
		});

		return oLoadFlexPromise.then(function() {

			assert.ok(oFB._hasAssignedVariantManagement());

			oFB.destroy();
			oVM.destroy();

			assert.ok(ControlVariantApplyAPI.attachVariantApplied.calledOnce);
			assert.ok(ControlVariantApplyAPI.detachVariantApplied.calledOnce);

			ControlVariantApplyAPI.attachVariantApplied.restore();
			ControlVariantApplyAPI.detachVariantApplied.restore();

			sap.ui.fl.variants.VariantManagement.prototype._updateWithSettingsInfo.restore();
			sap.ui.mdc.filterbar.FilterBarBase.prototype._loadFlex.restore();
		});
	});

	QUnit.test("check late assigned variant association", function (assert) {

		let fnResolve;
		const oLoadFlexPromise = new Promise(function(resolve) {
			fnResolve = resolve;
		});

		sinon.stub(ControlVariantApplyAPI, "attachVariantApplied");
		sinon.stub(ControlVariantApplyAPI, "detachVariantApplied");

		sinon.stub(sap.ui.fl.variants.VariantManagement.prototype, "_updateWithSettingsInfo");

		sinon.stub(sap.ui.mdc.filterbar.FilterBarBase.prototype, "_loadFlex").callsFake(function() {
			fnResolve(ControlVariantApplyAPI);
			return oLoadFlexPromise;
		});

		const oFB = new FilterBar();

		assert.ok(!oFB._hasAssignedVariantManagement());

		const oVM = new VariantManagement();
		oFB.setVariantBackreference(oVM);

		return oLoadFlexPromise.then(function() {

			assert.ok(oFB._hasAssignedVariantManagement());

			oFB.destroy();
			oVM.destroy();

			assert.ok(ControlVariantApplyAPI.attachVariantApplied.calledOnce);
			assert.ok(ControlVariantApplyAPI.detachVariantApplied.calledOnce);

			ControlVariantApplyAPI.attachVariantApplied.restore();
			ControlVariantApplyAPI.detachVariantApplied.restore();

			sap.ui.fl.variants.VariantManagement.prototype._updateWithSettingsInfo.restore();
			sap.ui.mdc.filterbar.FilterBarBase.prototype._loadFlex.restore();
		});
	});

	QUnit.test("check assigned variant association twice", function (assert) {

		let fnResolve;
		const oLoadFlexPromise = new Promise(function(resolve) {
			fnResolve = resolve;
		});

		sinon.stub(ControlVariantApplyAPI, "attachVariantApplied");
		sinon.stub(ControlVariantApplyAPI, "detachVariantApplied");

		sinon.stub(sap.ui.fl.variants.VariantManagement.prototype, "_updateWithSettingsInfo");

		sinon.stub(sap.ui.mdc.filterbar.FilterBarBase.prototype, "_loadFlex").callsFake(function() {
			fnResolve(ControlVariantApplyAPI);
			return oLoadFlexPromise;
		});

		const oVM = new VariantManagement();
		const oFB = new FilterBar({
			variantBackreference: oVM.getId()
		});

		return oLoadFlexPromise.then(function() {

			assert.ok(oFB._hasAssignedVariantManagement());

			const oVM2 = new VariantManagement();

			sinon.stub(Log, "error");

			assert.ok(!Log.error.called);
			oFB.setVariantBackreference(oVM2);
			assert.ok(Log.error.calledOnce);

			Log.error.reset();

			assert.ok(oFB.getVariantBackreference(), oVM.getId());
			assert.ok(oVM === oFB._getAssignedVariantManagement());

			oVM2.destroy();
			oFB.destroy();
			oVM.destroy();

			assert.ok(ControlVariantApplyAPI.attachVariantApplied.calledOnce);
			assert.ok(ControlVariantApplyAPI.detachVariantApplied.calledOnce);

			ControlVariantApplyAPI.attachVariantApplied.restore();
			ControlVariantApplyAPI.detachVariantApplied.restore();

			sap.ui.fl.variants.VariantManagement.prototype._updateWithSettingsInfo.restore();
			sap.ui.mdc.filterbar.FilterBarBase.prototype._loadFlex.restore();
		});
	});

	// this test uses internal flexibility variables / modules. To enable this test is has to be adapted to use APIs
	QUnit.skip("check variant switch without waitForChanges on the FB", function (assert) {

		let oFB, nCalledOnStandard = 0;
		const oManifestObj = {
				"sap.app": {
					id: "Component",
					applicationVersion: {
						version: "1.2.3"
					}
				}
			};
		const oManifest = new Manifest(oManifestObj);

		const oModel = new VariantModel({}, {
			flexController: oFlexController,
			appComponent: oComponent
		});

		const oComponent = {
				name: "Component",
				appVersion: "1.2.3",
				getId: function() {
					return "CompId";
				},
				getManifestObject: function() {
					return oManifest;
				},
				getLocalId: function() { return "VMId"; },
				getModel: function() {
					return oModel;
				},
				getComponentData: function() {}
		};

		sinon.stub(FlUtils, "getAppComponentForControl").returns(oComponent);
		sinon.stub(URLHandler, "attachHandlers");
		// sinon.stub(FlexState, "getVariantsState").returns(oVariantMap);

		sinon.stub(ControlVariantApplyAPI, "detachVariantApplied");

		const oFlexController = FlexControllerFactory.createForControl(oComponent, oManifest);
		sinon.stub(oFlexController, "applyVariantChanges").returns(Promise.resolve());

		let fResolveWaitForSwitch;
		const oWaitForSwitchPromise = new Promise(function(resolve) {
			fResolveWaitForSwitch = resolve;
		});

		sinon.stub(FilterBar.prototype, "triggerSearch");

		const fOrigVariantSwitch = FilterBar.prototype._handleVariantSwitch;
		FilterBar.prototype._handleVariantSwitch = function(oVariant) {
			fOrigVariantSwitch.apply(oFB, arguments);

			fResolveWaitForSwitch();
		};

		sinon.stub(VariantManagementState, "waitForInitialVariantChanges").returns(Promise.resolve());

		// to suppress "manage" event listener in VariantModel
		sinon.stub(oModel, "_initializeManageVariantsEvents");
		oModel.fnManageClick = function() {};

		const oVM = new VariantManagement("VMId", {});

		const done = assert.async();

		const aProperties = [{
				name: "Category",
				type: "Edm.String",
				typeConfig: DefaultTypeMap.getTypeConfig("sap.ui.model.type.String"),
				visible: true
			},{
			name: "Name",
			type: "Edm.String",
			typeConfig: DefaultTypeMap.getTypeConfig("sap.ui.model.type.String"),
			visible: true
		}];
		return oModel.initialize()
		.then(function() {
			oVM.setModel(oModel, ControlVariantApplyAPI.getVariantModelName());

			oFB = new FilterBar({
				variantBackreference: oVM.getId(),
				delegate: { name: "test-resources/sap/ui/mdc/qunit/filterbar/UnitTestMetadataDelegate", payload: { modelName: undefined, collectionName: "test" } }

			});
			return oFB._retrieveMetadata();
		})
		.then(function () {

			assert.ok(oFB.getControlDelegate());
			sinon.stub(oFB.getControlDelegate(), "fetchProperties").returns(Promise.resolve([aProperties]));

			oWaitForSwitchPromise.then(function() {

				assert.ok(FilterBar.prototype.triggerSearch.calledOnce);
				FilterBar.prototype.triggerSearch.resetHistory();

				// required, because it is set in rendering
				oModel._oVariantAppliedListeners["VMId"][oFB.getId()] = oFB._handleVariantSwitch.bind(oFB);

				ControlVariantApplyAPI.activateVariant({
					variantReference: "id_1589358930278_29"
				}).then(function() {

					assert.ok(FilterBar.prototype.triggerSearch.calledOnce);
					FilterBar.prototype.triggerSearch.resetHistory();

					ControlVariantApplyAPI.activateVariant({
						variantReference: "id_1589359343056_37"
					}).then(function() {

						assert.ok(!FilterBar.prototype.triggerSearch.called);
						assert.equal(nCalledOnStandard, 0);

						const fCallBack = function() { nCalledOnStandard++; return false; };
						oVM.registerApplyAutomaticallyOnStandardVariant(fCallBack);
						oVM.setDisplayTextForExecuteOnSelectionForStandardVariant("TEST");

						ControlVariantApplyAPI.activateVariant({
							variantReference: "VMId"
						}).then(function() {

							assert.ok(!FilterBar.prototype.triggerSearch.called);
							assert.equal(nCalledOnStandard, 1);

							oFB.destroy();
							oVM.destroy();
							oModel.destroy();

							FilterBar.prototype.triggerSearch.restore();
							FilterBar.prototype._handleVariantSwitch = fOrigVariantSwitch;
							FlUtils.getAppComponentForControl.restore();
							URLHandler.attachHandlers.restore();
							FlexState.getVariantsState.restore();
							VariantManagementState.waitForInitialVariantChanges.restore();

							ControlVariantApplyAPI.detachVariantApplied.restore();

							done();
						});
					});
				});
			});
		});
	});

});
