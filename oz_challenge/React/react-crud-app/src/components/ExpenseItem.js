import React, { Component } from "react";
import "./ExpenseItem.css";
import { MdDelete, MdEdit } from "react-icons/md";

export const ExpenseItem = ({ expense, handleEdit, handleDelete }) => {
  return (
    <li className="item">
      <div className="info">
        <span className="expense">{expense.charge}</span>
        <span className="amount">{expense.amount}</span>
      </div>
      <button className="edit-btn" onClick={() => handleEdit(expense.id)}>
        <MdEdit />
      </button>
      <button className="clear-btn" onClick={() => handleDelete(expense.id)}>
        <MdDelete />
      </button>
    </li>
  );
};
export default ExpenseItem;
