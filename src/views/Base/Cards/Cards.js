import React, { Component } from 'react';
import { Badge, Card, CardBody, CardFooter, CardHeader, Col, Row, Collapse, Fade } from 'reactstrap';


class Cards extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stockData: [],
      stockList: []
    };
  }

componentDidMount(){
  console.log('myFirstComponent');
  fetch('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=5min&apikey=demo')
  .then(response => response.json())
  .then(data => {
    this.setState({stockData:data});
    this.buildStockList();
  })
}

buildStockList(){
   // console.log(this.state.stockData['Meta Data']);
   // console.log(this.state.stockData['Time Series (5min)']);
   let items = Object.keys(this.state.stockData['Time Series (5min)']);
   const sl = items.map((key, index)=>{
     //console.log(this.state.stockData['Time Series (5min)'][key]);
     //console.log(key);
     return <Col key={key} xs="12" sm="6" md="4">
            <Card>
                <CardHeader>
                {JSON.stringify(key)}
                </CardHeader>
                <CardBody>
                  {JSON.stringify(this.state.stockData['Time Series (5min)'][key])}
                </CardBody>
            </Card>
            </Col>


   })

   this.setState({stockList: sl});

 }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          {this.state.stockList}
        </Row>
      </div>
    );
  }
}



export default Cards;
