import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Lectures</h1>
    <Link to="/big-o">Time Complexity Visualization</Link><br></br>
    <a href="https://github.com/CentralCatholic/time-complexity">Source code</a><br></br>

    <h1>Homework</h1>
    <ul>
        <li>
            <p>Lab 6: Using Java Arrays</p>
            <p>Due Friday, 9/22 </p>
        </li>
        <li>
            <p>Introduction to Java, <i>Gatis</i>, Chapter 7 #17</p>
            <p>Due Tuesday, 9/26 </p>
        </li>
    </ul>
  </div>
)

export default IndexPage
