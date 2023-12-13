import {TaskName, TagsCategory, ListItem} from './style'

const Tasks = props => {
  const {tasksDetails} = props
  const {taskName, taskCategory} = tasksDetails

  return (
    <ListItem>
      <TaskName>{taskName}</TaskName>
      <TagsCategory>{taskCategory}</TagsCategory>
    </ListItem>
  )
}

export default Tasks
