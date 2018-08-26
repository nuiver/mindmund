import * as React from 'react'

interface ToggleState {
  isChecked: boolean
}

interface ToggleProps {
  complete: boolean
}

class Toggle extends React.Component<ToggleProps, ToggleState> {

  constructor(props: any) {
    super(props)
    this.state = { isChecked: props.complete }
  }

  handleChange = (): void => {
    this.setState({ isChecked: !this.state.isChecked })
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

export default Toggle
