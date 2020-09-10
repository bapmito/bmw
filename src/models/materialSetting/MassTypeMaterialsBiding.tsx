import { MaterialBindings } from './MaterialBindings';
import { CategoryTypeFilter_FormworkValueBinding_Dictionary } from './formwork/CategoryTypeFilter_FormworkValueBinding_Dictionary';

export interface MassTypeMaterialsBindings {
  massType: number,
  materialBindings: MaterialBindings[],
  parameterName: string,
  categoryType_FamilyNameFilter_ParameterBindings: Array<any>,
  categoryTypeFilter_FormworkValueBinding_Dictionary: CategoryTypeFilter_FormworkValueBinding_Dictionary
}
