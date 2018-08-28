import * as React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  background: #f4f2f2;
  height: 45px;
  margin-bottom: 2px;
  padding-top: 13px;
`

const TodoLabel = styled.label`
  display: block;
  position: relative;
  margin-left: 12px;
  padding-left: 36px;
  padding-top: 4px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  & input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }

  &:hover input ~ .checkmark {
    background-color: tomato;
  }

  & input:checked ~ .checkmark {
    background-color: tomato;
  }

  & input:checked ~ .checkmark:after {
    display: block;
  }

  & .checkmark:after {
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`

const Checkmark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #fff;

  &:after {
    content: '';
    position: absolute;
    display: none;
  }
`

export interface TodoFullProps {
  complete: boolean
  title: string
  note: string
  deadline: Date
  plannedDate: Date
  id: number
  todoItems: any[]
}

interface TodoState {
  isChecked: boolean
}

export interface TodoProps {
  id: number
  complete: boolean
  title: string
}

class Todo extends React.Component<TodoProps, TodoState> {
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
    const envPort = process.env.NODE_ENV === 'testing' ? process.env.REACT_APP_PORT_TEST : process.env.REACT_APP_PORT
    const url = `http://localhost:${envPort}/api/v1/todo/${id}`
    const response = await fetch(url, {
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
      <Wrapper>
        <TodoLabel>
          <input
            onChange={this.handleChange}
            id={`toggle_${Math.random()
              .toString()
              .replace(/0\./, '')}`}
            type="checkbox"
            checked={this.state.isChecked}
          />
          <Checkmark className="checkmark" />
          {this.props.title}
        </TodoLabel>
      </Wrapper>
    )
  }
}

export default Todo
