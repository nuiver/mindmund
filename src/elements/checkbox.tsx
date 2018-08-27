import * as React from 'react'

interface CheckboxState {
  isChecked: boolean
}

interface CheckboxProps {
  id: number
  complete: boolean
}

class Checkbox extends React.Component<CheckboxProps, CheckboxState> {
  constructor(props: any) {
    super(props)
    this.state = { isChecked: props.complete }
  }

  handleChange = (): void => {
    this.setState(
      {
        isChecked: !this.state.isChecked
      },
      () =>
        this.postApi(this.props.id, this.state.isChecked)
          // .then(res => {
          //   console.log(res)
          // })
          .catch(err => console.log(err))
    )
  }

  postApi = async (id: number, complete: boolean) => {
    const postBody = JSON.stringify({
      complete
    })
    const response = await fetch(`/api/v1/todo/${id}`, {
      method: 'PATCH',
      body: postBody,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const body = await response.json()

    if (response.status !== 200) {
      throw Error(response.status.toString())
    }
    return body
  }

  render() {
    return (
      <div>
        <input
          onChange={this.handleChange}
          id={`toggle_${Math.random()
            .toString()
            .replace(/0\./, '')}`}
          type="checkbox"
          checked={this.state.isChecked}
        />
      </div>
    )
  }
}

export default Checkbox
