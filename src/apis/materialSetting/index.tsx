import callApi from '../index';
import API_BE from '../endPointConfig';
import { BoQ_Project } from '../../models/BoQ_Project';

export const getMaterialSettings = () => callApi(
  `${API_BE}/boq_project`,
  'get',
);

export const getDisciplineList = () => callApi(
  `${API_BE}/disciplinetype`,
  'get',
);

export const getMaterialList = () => callApi(
  `${API_BE}/material`,
  'get'
);

export const getMassTypeList = () => callApi(
  `${API_BE}/masstype`,
  'get',
);

export const updateMaterialSettings = (data: BoQ_Project) => callApi(
  `${API_BE}/boq_project/materialbinding`,
  'put',
  undefined,
  data,
);
