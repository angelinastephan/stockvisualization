import React, { Component } from 'react';
import { Badge, Card, CardBody, CardFooter, CardHeader, Col, Row, Collapse, Fade } from 'reactstrap';
import { AppSwitch } from '@coreui/react'

class Cards extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stockData: []
    };
  }

componentDidMount(){
  console.log('myFirstComponent');
  fetch('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=5min&apikey=demo')
  .then(response => response.json())
  .then(data => {
    this.setState({stockData:data});
    this.buildMyCards();
  })
}

  buildMyCards(){
    console.log(this.state.stockData['Meta Data']);
    console.log(this.state.stockData['Time Series (5min)']);

  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="6" md="4">
            <Card className="text-white bg-danger">
              <CardHeader className= "text-white bg-info">
                Card title
              </CardHeader>
              <CardBody>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
              </CardBody>
              <CardFooter className="text-black bg-info">
              Contact Infomation
              </CardFooter>
            </Card>
          </Col>
          </Row>
       </div>
    );
  }
}



export default Cards;
