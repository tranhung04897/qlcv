import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions/index';

class TaskSortControl extends Component {

    onClick = (sortBy, sortValue) => {
        this.props.onSort({
            by: sortBy,
            value: sortValue
        });
    }

    render() {
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="dropdown">
                    <button
                        className="btn btn-primary dropdown-toggle"
                        type="button"
                        id="dropdownMenu1"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="true"
                    >
                        Sắp Xếp
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                        <li onClick={() => this.onClick('name', 1)}>
                            <button>
                                Tên A-Z
                            </button>
                        </li>
                        <li onClick={() => this.onClick('name', -1)}>
                            <button>
                                Tên Z-A
                            </button>
                        </li>
                        <li role="separator" className="divider"></li>
                        <li onClick={() => this.onClick('status', 1)}>
                            <button>
                                Trạng Thái Kích Hoạt
                            </button>
                        </li>
                        <li onClick={() => this.onClick('status', -1)}>
                            <button>
                                Trạng Thái Ẩn
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onSort: (sort) => {
            dispatch(actions.sortTask(sort));
        }
    };
}

export default connect(null, mapDispatchToProps)(TaskSortControl);
