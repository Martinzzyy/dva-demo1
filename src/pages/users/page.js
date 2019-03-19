import React from 'react';
import styles from './page.css';
import {connect} from 'dva';
import {Table,Pagination, Popconfirm,Spin} from 'antd';
const Users = ({dispatch,list: dataSource, total, loading,page: current}) => {
  function deleteHandler(id){

  }
  const columns = [
    {
      title:'Name',
      dataIndex:'name',
      key:'name',
      render:text => <a href="">{text}</a>,
    },
    {
      title:'Age',
      dataIndex:'age',
      key:'age'
    },
    {
      title: 'Operation',
      key: 'operation',
      render: (text, { id }) => (
        <span className={styles.operation}>
          <a href="">Edit</a>
          <Popconfirm title="Confirm to delete?" onConfirm={deleteHandler.bind(null, id)}>
            <a href="">Delete</a>
          </Popconfirm>
        </span>
      ),
    },
  ]
  return (
    <div className={styles.normal}>
      <Spin spinning={loading}>
        <div>
          <Table
            columns={columns}
            dataSource={dataSource}
            rowKey={record => record.id}
            pagination={false}
          />
          <Pagination
            className="ant-table-pagination"
            total={total}
            current={current}
            pageSize={10}
          />
        </div>
      </Spin>
    </div>
  );
}
function mapStateToProps(state) {
  const { list, total, page,loading } = state.users;
  return {
    list,
    total,
    page,
    loading
  };
}
export default connect(mapStateToProps)(Users);
