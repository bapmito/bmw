import React from 'react';
import { Collapse, Row, Select, Col, Button } from 'antd';
import constants from '../../../constants';
import { PlusSquareOutlined, CloseCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { MassTypeMaterialsBindings } from '../../../models/materialSetting/MassTypeMaterialsBiding';
import { MainValueBinding } from '../../../models/materialSetting/formwork/FVB_FormworkValueBinding';

const { Panel } = Collapse;
const { Option } = Select;

interface Props {
  data: MassTypeMaterialsBindings
}

const FormWork = (props: Props) => {
  const addFilter = (e: any) => {
    e.stopPropagation();
  };

  const header = (categoryFilterNames: any) => {
    return (
      <div>
        <PlusSquareOutlined className="icon-plus-quare mr-10" onClick={addFilter} />
        {categoryFilterNames.length > 0 && categoryFilterNames.map((item: any, index: number) => {
          return (
            <Select
              key={index}
              value={item}
              style={{width: 80}}
              onClick={(e: any) => e.stopPropagation()}
              className="mr-10"
            >
              {constants.parameterSettingFilterOptions.map(item => {
                return (
                  <Option key={item.key} value={item.value} >
                    {item.text}
                  </Option>
                );
              })}
            </Select>
          );
        })}
      </div>
    )
  };

  const recursionMainValueBinding = (mainValueBindingArr: MainValueBinding[]) => {
    return (
      <div>
        {mainValueBindingArr && mainValueBindingArr.length > 0 && mainValueBindingArr.map((item, index) => {
          return (
            <div key={item.name} className="position-relative">
              <CloseCircleOutlined className="icon-close-circle" />
              <div className="container-block-setting mb-10">
                <Row className="mb-10">
                  <Col span={14}>
                    {item.name}:{' '}
                  </Col>
                  <Col span={10}>
                    <Select className="w-100" value={item.valueBindingType}>
                      {constants.parameters.map(item => {
                        return (
                          <Option key={item.key} value={item.value}>
                            {item.text}
                          </Option>
                        );
                      })}
                    </Select>
                  </Col>
                </Row>

                {item.valueBindingType === 0 && (
                  <div>
                    <Row className="mb-10">
                      <Col span={8}>
                        Parameter:
                      </Col>
                      <Col span={16}>
                        <Select className="w-100" value={item.parameterNameForJson}>
                          {constants.parameterTypes.map(item => {
                            return (
                              <Option key={item.key} value={item.value}>
                                {item.text}
                              </Option>
                            );
                          })}
                        </Select>
                      </Col>
                    </Row>
                    <Row className="mb-10">
                      <Col span={8}>
                        Đơn vị:
                      </Col>
                      <Col span={16}>
                        <Select className="w-100" value={item.massCalculateBy}>
                          {constants.parameterUnits.map(item => {
                            return (
                              <Option key={item.key} value={item.value}>
                                {item.text}
                              </Option>
                            );
                          })}
                        </Select>
                      </Col>
                    </Row>
                  </div>
                )}

                <div>{recursionMainValueBinding(item.subValueBindingsForJson)}</div>
              </div>

              {item.valueBindingType === 0 && index === mainValueBindingArr.length - 1 && (
                <PlusSquareOutlined className="icon-plus-quare mr-10" />
              )}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div>
      <Select
        className="w-100 mb-10"
        value={props.data.massType}
      >
        {constants.subjectOptions.map(item => {
          return (
            <Option key={item.key} value={item.value}>
              {item.text}
            </Option>
          );
        })}
      </Select>
      {props.data.categoryTypeFilter_FormworkValueBinding_Dictionary
        .categoryTypeFilter_FormworkValueBindings.map((item, index) => {
        return (
          <Collapse
            key={index}
            expandIconPosition={'right'}
            defaultActiveKey={['1']}
            className="mb-10"
          >
            <Panel header={header(item.categoryTypeFilter.categoryFilterNames)} key="1">
              {recursionMainValueBinding([item.mainValueBinding])}
            </Panel>
          </Collapse>
        )
      })}
      <div className="mt-20 mb-10">
        <Button type="primary" icon={<PlusOutlined />} className="btn-custom">Bộ lọc</Button>
      </div>
    </div>
  );
}

export default FormWork;
