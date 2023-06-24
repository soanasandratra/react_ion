import React, { Component } from 'react'

export class ClassCount extends Component {

  constructor(props : any )
  {

    super(props)

    this.state = {
      counter : 0
    }
  }

  componentDidMount(): void {
    document.title = "nombre de click : "
  }
  render() {
    return (
      <div>
        <h3 className='text-center'>ClassCount</h3>
      </div>
    )
  }
}

export default ClassCount