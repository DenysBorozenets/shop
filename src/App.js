import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      items: [
        {
          id: 1,
          title: "Chair grey",
          img: "chair-grey.jpeg",
          desc: "Lorem ipsum dolor sit",
          category: "chairs",
          price: "49.99",
        },
        {
          id: 2,
          title: "Table",
          img: "table.jpeg",
          desc: "Lorem ipsum dolor sit",
          category: "tables",
          price: "49.99",
        },
        {
          id: 3,
          title: "Chair grey",
          img: "chair-grey.jpeg",
          desc: "Lorem ipsum dolor sit",
          category: "chairs",
          price: "49.99",
        },
      ],
    };
    this.addToOrder = this.addToOrder.bind(this);
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} />
        <Items items={this.state.items} onAdd={this.addToOrder} />
        <Footer />
      </div>
    );
  }

  addToOrder(item) {
    let isInArray = false;
    this.state.orders.forEach((el) => {
      if (el.id === item.id) isInArray = true;
    });
    if (!isInArray) this.setState({ orders: [...this.state.orders, item] });
  }
}

export default App;
