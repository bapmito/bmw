import React, { useState } from 'react';
import { Input, Select } from 'antd';
import './index.css';

const { Option } = Select;

interface Props {
  options?: object[],
  value?: number | string,
  onChange?: () => void,
}

const CustomSelect = (props: Props) => {

  return (
    <div className="editable-select position-relative">
      <Select className="w-100 select" onChange={props.onChange}>
        {props.options && props.options.length > 0 && props.options?.map((item: any, index) => {
          return (
            <Option key={index} value={item.value} >
              {item.text}
            </Option>
          );
        })}
      </Select>
      <Input className="w-97 input" value={props.value} />
    </div>
  );
}

export default CustomSelect;
