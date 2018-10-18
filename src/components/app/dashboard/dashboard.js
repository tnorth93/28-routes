import React from 'react';
import ExpenseForm from "../expense-form/expense-form";
import uuid from 'uuid/v4';


class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.state.expenses = [];
  }

  renderExpenses = () => {
    return (
      <ul>
        {
          this.state.expenses.map((currentExpense) => {
            return <li key={currentExpense.id}>
              {currentExpense.title} : $ {currentExpense.price}
            </li>
          })
        }
      </ul>
    );
  };

  handleAddExpense = (expense) => {
    expense.createdOn = new Date();
    expense.id = uuid();
    return this.setState((previousState) => {
      return {
        expenses: [...previousState.expenses, expense],
      }
    });
  };

  calculateTotalPrice = () => {
    return this.state.expenses.reduce((sum, currentExpense) => {
      return sum + Number(currentExpense.price);
    },0);
  };

  render() {
    return (
      <section>
        <h2>Dashboard</h2>
        <p>Add new Expense</p>
        <ExpenseForm handleAddExpense={this.handleAddExpense}/>
        <p>Here is a list of all your expenses so far:</p>
        { this.renderExpenses() }
        <p>Your total debt is : $ {this.calculateTotalPrice() } </p>
      </section>
    );
  }
}

export default Dashboard;