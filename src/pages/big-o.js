import React from 'react'
import Link from 'gatsby-link'
import { Chart } from 'react-google-charts';
import BubbleData from '../data/bubble';
import FibData from '../data/fib';
import ExchangeData from '../data/exchange';
import LinearData from '../data/linear';
import BinaryData from '../data/binary';

const BigOPage = () => (
  <div>
    <h1>Linear Search</h1>
    <Link to="/">Go back to the homepage</Link><br></br>
    <Link to="/linear">Linear Search</Link>
  </div>
)
export default BigOPage
