import callApi from '../index';
import API_BE from '../endPointConfig';
import { BoQ_Project } from '../../models/BoQ_Project';

export const getMaterialSettings = () => callApi(
  `${API_BE}/boq_project`,
  'get',
);

export const updateMaterialSettings = (data: BoQ_Project) => callApi(
  `${API_BE}/boq_project/materialbinding`,
  'put',
  undefined,
  data,
);
