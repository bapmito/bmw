const constants = {
  SUCCESS_CODE: 200,
  parameters: [
    { key: 1, value: 0, text: 'parameter' },
    { key: 2, value: 1, text: 'submass' },
  ],
  parameterTypes: [
    { key: 1, value: 1, text: 'Height' },
    { key: 2, value: 2, text: 'Weight' },
    { key: 2, value: 'ALB_FormworkArea', text: 'ALB_FormworkArea' },
  ],
  parameterUnits: [
    { key: 1, value: 1, text: 'Mét vuông' },
    { key: 2, value: 0, text: 'Mét dài' },
  ],
  parameterSettingOptions: [
    { key: 1, value: 1, text: 'equal' },
    { key: 2, value: 2, text: 'contain' },
    { key: 3, value: 3, text: 'remainder' },
  ],
  parameterSettingFilterOptions: [
    { key: 1, value: 'Dầm', text: 'Dầm' },
    { key: 2, value: 'Sàn', text: 'Sàn' },
    { key: 3, value: 3, text: 'Cột' },
    { key: 4, value: 4, text: 'Vách' },
    { key: 5, value: 5, text: 'Móng' },
    { key: 6, value: 6, text: 'Ramp dốc' },
    { key: 7, value: 7, text: 'Cầu thang' },
  ],
  initFormworkValue: {
    categoryTypeFilter: {
      categoryFilterType: 0,
      categoryFilterNames: ['Dầm'],
    },
    mainValueBinding: {
      massCalculateBy: 1,
      name: 'Diện tích ván khuôn',
      parameterNameForJson: 'Height',
      subValueBindingsForJson: [],
      valueBindingType: 0,
    }
  },
  initConcreteValue: {
    layerWidth: 100,
    materialDesciption: null,
    materialName: "CEN_CONCRETE",
  },
  initSubValueBindingsForJson: {
    massCalculateBy: 1,
    name: "Diện tích ván khuôn",
    parameterNameForJson: 'Height',
    subValueBindingsForJson: [],
    valueBindingType: 0
  },
  initMaterialSetting: {
    categoryTypeFilter_FormworkValueBinding_Dictionary: {
      categoryTypeFilter_FormworkValueBindings: []
    },
    categoryType_FamilyNameFilter_ParameterBindings: [],
    massType: 0,
    materialBindings: [
      {
        layerWidth: 100,
        materialDesciption: null,
        materialName: "CEN_CONCRETE",
      }
    ],
    parameterName: null
  }
};

export default constants;
