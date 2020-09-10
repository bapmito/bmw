export interface MainValueBinding {
  name: string,
  valueBindingType: number,
  parameterNameForJson: string,
  subValueBindingsForJson: MainValueBinding[],
  massCalculateBy: number,
}
