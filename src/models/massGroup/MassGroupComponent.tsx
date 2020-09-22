import { MassGroup } from './MassGroup';

export interface MassGroupComponent {
  name: string,
  description: string,
  massGroups: MassGroup[],
  massGroupFilterType: number,
  massGroupFilterNames: Array<string>,
  isHaveHorizontalGroup: boolean,
  horizontal_MassGroupByPropertyName: number,
}
