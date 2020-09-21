import { message } from 'antd';
import constants from '../../constants';

export const notification = (type: 'info' | 'success' | 'error' | 'warning' | 'loading', messageText: string) => {
  message[type](messageText);
};

export const addKeyForObject = (object: any) => {
  const arr = !Array.isArray(object) ? [object] : [...object];

  return arr && arr.length > 0 && arr.forEach(item => {
    item.key = Math.random().toString(36).substring(2, 4) + Math.random().toString(36).substring(2, 4) + 1;
    if (item.subValueBindingsForJson) {
      addKeyForObject(item.subValueBindingsForJson);
    }
  });
}

export const convertMassGroupByPropertyName = (id: number) => {
  const massGroupByPropertyNameFiltered = constants.massGroupByPropertyNames.filter(item => {
    return item.id === id;
  });

  return massGroupByPropertyNameFiltered && massGroupByPropertyNameFiltered.length > 0
  && massGroupByPropertyNameFiltered[0].name;
};
