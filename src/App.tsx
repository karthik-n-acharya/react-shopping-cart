import React from 'react';
import Products from './component/products';
import data from "./mock_data/products.json"
class App extends React.Component<any,any> {

  constructor(props:any){
    super(props);
    this.state={
      products:data.products,
      size: "",
      sort: ""

    }
  }

  render() {
    return (
      <div className="grid-container">
        <header>
          <a href="/">React Shopping Cart</a>
        </header>
        <main>
          <div className="content">
            <div className="main">
              <Products products={this.state.products}/>
            </div>
            <div className="sidebar">
              Cart Items
            </div>

          </div>
      </main>
        <footer>
          All right is reserverd.
      </footer>
      </div>
    );
  }
}

export default App;