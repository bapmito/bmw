export interface MainValueBinding {
  key?: string,
  name: string,
  valueBindingType: number,
  parameterNameForJson: string,
  subValueBindingsForJson: MainValueBinding[],
  massCalculateBy: number,
}
