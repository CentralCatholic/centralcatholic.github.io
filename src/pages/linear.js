import React from 'react'
import Link from 'gatsby-link'
import { Chart } from 'react-google-charts';
import BubbleData from '../data/bubble';
import FibData from '../data/fib';
import ExchangeData from '../data/exchange';
import LinearData from '../data/linear';
import BinaryData from '../data/binary';

class LinearChart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            columns: [{
                type: 'number',
                label: 'Input Size',
            }, {
                type: 'number',
                label: 'Duration (ms)',
            }],
            rows: LinearData,
            options: {
                title: 'Linear Sort',
                hAxis: { title: 'Array Size'},
                vAxis: { title: 'Duration (ms)'},
                legend: 'none',
            }
        }
    }

    render() {
        return (
            <Chart
                chartType="ScatterChart"
                rows={this.state.rows}
                columns={this.state.columns}
                options={this.state.options}
                graph_id="ScatterChart"
                width={'100%'}
                height={'400px'}
                legend_toggle
            />
        );
    }
}

const BigOPage = () => (
  <div>
    <h1>Linear Search</h1>
    <Link to="/">Go back to the homepage</Link>
    <LinearChart/>
    <Link to="/public/binary">Binary Search</Link>
  </div>
)
export default BigOPage
