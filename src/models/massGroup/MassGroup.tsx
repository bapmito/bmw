import { MassGroupComponent } from './MassGroupComponent';

export interface MassGroup {
  subMassGroupComponents: MassGroupComponent[],
  massGroupByPropertyName: number
}
