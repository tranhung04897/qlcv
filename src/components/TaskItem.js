import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions/index';

class TaskItem extends Component {

    showStatusElement() {
        return (
            <span
                className={this.props.task.status ? 'label label-success' : 'label label-danger'}
                onClick={this.onUpdateStatus}
            >{this.props.task.status === true ? 'Kích Hoạt' : 'Ẩn'}</span>
        );
    }

    onUpdateStatus = () => {
        this.props.onUpdateStatus(this.props.task.id);
    }

    onDelete = () => {
        this.props.onDeleteTask(this.props.task.id);
        this.props.onCloseForm();
    }

    onEdit = () => {
        this.props.onOpenForm();
        this.props.onEditTask(this.props.task);
    }
    render() {
        return (
            <tr>
                <td>{this.props.index}</td>
                <td>{this.props.task.name}</td>
                <td className="text-center">
                    {this.showStatusElement()}
                </td>
                <td className="text-center">
                    <button
                        type="button"
                        className="btn btn-warning"
                        onClick={this.onEdit}
                    >
                        Sửa
                    </button>
                    &nbsp;
                    <button
                        type="button"
                        className="btn btn-danger"
                        onClick={this.onDelete}
                    >
                        Xóa
                    </button>
                </td>
            </tr>
        );
    }
}

const mapStateToProps = state => {
    return {};
};
const mapDispatchToProps = (dispatch, props) => {
    return {
        onUpdateStatus: (id) => {
            dispatch(actions.updateStatus(id));
        },
        onDeleteTask: (id) => {
            dispatch(actions.deleteTask(id))
        },
        onCloseForm: () => {
            dispatch(actions.closeForm());
        },
        onOpenForm: () => {
            dispatch(actions.openForm());
        },
        onEditTask: (task) => {
            dispatch(actions.editTask(task));
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(TaskItem);
