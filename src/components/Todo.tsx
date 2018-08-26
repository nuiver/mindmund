import * as React from 'react'
import styled from 'styled-components'
import Checkbox from '../elements/checkbox'

const Wrapper = styled.div`
  background: #f4f2f2;
  height: 45px;
  margin-bottom: 2px;
  padding-top: 13px;
`

const TodoP = styled.p`
  font-size: 18px;
  color: #383838;
  margin: 0 0 0 50px;
  text-align: left;
`

export interface TodoProps {
  complete: boolean
  title: string
  note: string
  deadline: Date
  plannedDate: Date
  id: number
  todoItems: any[]
}

const Todo: React.SFC<TodoProps> = props => (
  <Wrapper>
    <Checkbox
      complete={props.complete}
      key={`${props.id}-todo`}
    />
    <p>{props.complete ? 'yes' : 'no'}</p>
    <TodoP>{props.title}</TodoP>
    <p>{props.note}</p>
    <h1>---</h1>
  </Wrapper>
)

export default Todo
