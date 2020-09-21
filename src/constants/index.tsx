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
  },
  massGroupByPropertyNames: [
    { id: 0, name: 'Level' },
    { id: 1, name: 'Mark' },
    { id: 2, name: 'EntCategoryType' },
    { id: 3, name: 'MassType' },
    { id: 4, name: 'MEPSystemType' },
    { id: 5, name: 'Size' },
    { id: 6, name: 'None' },
    { id: 7, name: 'Family' },
    { id: 8, name: 'TypeName' },
    { id: 9, name: 'Id' },
    { id: 10, name: 'PipeDirectionType' },
    { id: 11, name: 'SubCategory' },
    { id: 12, name: 'Material' },
    { id: 13, name: 'LayerWidth' },
    { id: 14, name: 'Width' },
    { id: 15, name: 'Height' },
    { id: 16, name: 'SectionDetail' },
    { id: 17, name: 'HostCategoryType' },
    { id: 18, name: 'ToleThickness' },
    { id: 19, name: 'MEPSystemClassify' },
    { id: 20, name: 'MassDescription' },
  ],
  filterMassGroup: [
    { id: 1, name: 'Level 1' },
    { id: 2, name: 'Level 2' },
    { id: 3, name: 'Level 3' },
    { id: 4, name: 'Level 4' },
    { id: 5, name: 'Level 5' },
    { id: 6, name: 'Level 01 - B.O. Footing' },
  ],
};

export default constants;
